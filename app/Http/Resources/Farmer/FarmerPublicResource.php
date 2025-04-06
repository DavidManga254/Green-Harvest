<?php

namespace App\Http\Resources\Farmer;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FarmerPublicResource extends JsonResource
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
            'farm_name' => $this->name,
            'location' => $this->location,
            'description' => $this->description,
            'profile_image' => $this->profile_image,
            'certifications' => json_decode($this->certifications),
            'growing_practices' => $this->practices,
            'delivery_locations' => json_decode($this->delivery_locations),
            'delivery_options' => $this->delivery_options,
            'products_count' => $this->produce_count,
            'products' => $this->produce->map(fn($p) => [
                'id' => $p->id,
                'name' => $p->name,
                'price' => $p->price_per_unit,
                'image' => $p->images->first()?->image_path,
            ])
        ];
    }
}
