<?php

namespace App\Http\Resources\Produce;

use App\Http\Resources\Category\CategoryResource;
use App\Http\Resources\Image\ImageResource;
use App\Http\Resources\Review\ReviewResource;
use App\Http\Resources\Tag\TagResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProduceDetailResource extends JsonResource
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
            'description' => $this->description,
            'price_per_unit' => $this->price_per_unit,
            'is_on_sale' => $this->is_on_sale,
            'discount' => $this->discount,
            'quantity' => $this->quantity,
            'out_of_stock' => $this->out_of_stock,
            'available_from' => $this->available_from,
            'available_to' => $this->available_to,
            'category' => new CategoryResource($this->whenLoaded('category')),
            'tags' => $this->tags,
            'images' => ImageResource::collection($this->whenLoaded('images')),
            'reviews' => ReviewResource::collection($this->whenLoaded('reviews')),
            'rating' => $this->rating,
        ];
    }
}
