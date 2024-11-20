<?php

namespace App\Http\Resources\Checkout;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CheckoutResource extends JsonResource
{
    /**
 * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'amount' => $this->amount,
            'payment_type' => $this->payment_type,
            'delivery_type' => $this->delivery_type,
            'created_at' => $this->created_at->toDateTimeLocalString(),
        ];
    }
}
