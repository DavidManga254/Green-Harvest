<?php

namespace App\Http\Resources\Cart;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CartResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "produce_id" => $this->produce_id,
            "quantity" => $this->quantity,
            "price" => $this->price,
            "produce" => [
                "name" => $this->produce->name,
                "out_of_stock" => $this->produce->out_of_stock,
                "image" => $this->produce->images[0]->image_path,
            ],
        ];
    }
}
