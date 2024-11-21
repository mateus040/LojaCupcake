<?php

namespace App\Http\Resources\Checkout;

use App\Http\Resources\Cupcake\CupcakeResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CheckoutItemsResource extends JsonResource
{
    /**
 * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'cupcake' => new CupcakeResource($this->cupcake),
            'amount' => $this->amount,
            'payment_type' => $this->payment_type,
            'delivery_type' => $this->delivery_type,
            'created_at' => $this->created_at->toDateTimeLocalString(),
        ];
    }
}
