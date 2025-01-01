<?php

namespace App\Http\Resources\Produce;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProduceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'farmer_id' => $this->farmer_id,
            'name' => $this->name,
            'description' => $this->description,
            'price_per_unit' => $this->price_per_unit,
            'quantity' => $this->quantity,
            'available_from' => $this->available_from,
            'available_to' => $this->available_to
        ];
    }
}
