<?php

namespace App\Http\Resources\Produce;

use App\Http\Resources\Image\ImageResource;
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
            'id' => $this->id,
            // 'farmer_id' => $this->farmer_id,
            'name' => $this->name,
            // 'description' => $this->description,
            'price_per_unit' => $this->price_per_unit,
            'is_on_sale' => $this->is_on_sale,
            'discount' => $this->discount,
            // 'quantity' => $this->quantity,
            'out_of_stock' => $this->out_of_stock,
            // 'available_from' => $this->available_from,
            // 'available_to' => $this->available_to,
            'rating' => $this->rating,
            'images' => new ImageResource($this->images->first())
            // 'tags' => $this->tags,
        ];
    }
}
