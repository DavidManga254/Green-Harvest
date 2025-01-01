<?php

namespace App\Http\Resources\Farmer;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FarmerResource extends JsonResource
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
            "name" => $this->name,
            "location" => $this->location,
            "description" => $this->description,
            "practices" => $this->practices,
            "certifications" => $this->certifications,
            "primary_products" => $this->primary_products,
            "seasonal_availability" => $this->seasonal_availability,
            "delivery_options" => $this->delivery_options,
            "delivery_locations" => $this->delivery_locations,
            "profile_image" => $this->profile_image,
            "social_links" => $this->social_links,
            "notes" => $this->notes,
        ];
    }
}
