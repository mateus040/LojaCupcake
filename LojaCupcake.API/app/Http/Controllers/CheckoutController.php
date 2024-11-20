<?php

namespace App\Http\Controllers;

use App\Enums\DeliveryType;
use App\Enums\PaymentType;
use App\Exceptions\OutStockException;
use App\Http\Requests\Checkout\CheckoutRequest;
use App\Http\Resources\Checkout\CheckoutResource;
use App\Models\Checkout;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CheckoutController extends Controller
{
    public function userAuthenticated(): User
    {
        return Auth::user();
    }
    
    public function index()
    {
        $user = $this->userAuthenticated();

        $checkouts = $user->checkouts;

        return CheckoutResource::collection($checkouts);
    }

    public function checkout(CheckoutRequest $request)
    {
        /** @var User */
        $user = Auth::user();

        $cartItems = $user->items;

        if ($cartItems->isEmpty()) {
            return response()->json([
                'message' => 'Cart is empty.'
            ], 400);
        }

        DB::beginTransaction();

        try {
            $totalAmount = 0;

            foreach ($cartItems as $cartItem) {
                $cupcake = $cartItem->cupcake;

                if ($cupcake->quantity < $cartItem->quantity) {
                    throw new OutStockException($cupcake->name, 400);
                }

                $totalAmount += $cupcake->amount * $cartItem->quantity;

                $cupcake->decrement('quantity', $cartItem->quantity);
            }

            Checkout::create([
                'user_id' => $user->id,
                'amount' => $totalAmount,
                'delivery_type' => DeliveryType::from($request->delivery_type)->value,
                'payment_type' => PaymentType::from($request->payment_type)->value,
            ]);

            $user->items()->delete();

            DB::commit();

            return response()->json([
                'message' => 'Checkout successfully.',
                'amount' => $totalAmount,
            ], 200);
        } catch (\Exception $e) {
            DB::rollBack();

            if ($e instanceof OutStockException) {
                return response()->json([
                    'message' => $e->getMessage(),
                ], $e->getCode());
            }

            return response()->json([
                'message' => 'An error occurred during checkout.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
