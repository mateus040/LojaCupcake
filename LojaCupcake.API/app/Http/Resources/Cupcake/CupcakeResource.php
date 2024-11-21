<?php

namespace App\Http\Resources\Cupcake;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CupcakeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'amount' => $this->amount,
            'quantity' => $this->quantity,
            'image' => $this->image,
            'created_at' => $this->created_at->toDateTimeLocalString(),
        ];
    }
}
