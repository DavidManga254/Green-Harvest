<?php

namespace App\Http\Resources\Order;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'quantity' => $this->quantity,
            'price' => $this->price,
            'produce' => [
                'id' => $this->produce->id,
                'name' => $this->produce->name,
                'price_per_unit' => $this->produce->price_per_unit,
                'out_of_stock' => $this->produce->out_of_stock,
                'image' => optional($this->produce->images->first())->image_path,
            ]
        ];
    }
}