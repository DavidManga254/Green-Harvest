<?php

namespace App\Http\Resources\FarmerSubscription;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FarmerSubscriptionPlanResource extends JsonResource
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
            'template' => [
                'name' => $this->template->name,
                'frequency' => $this->template->frequency,
                'base_price' => $this->template->base_price,
            ],
            'cover_image'=>$this->cover_image,
            'highlight' => $this->description ?? $this->template->description,
            'produce' => $this->produce ? [
                'name' => $this->produce->name,
            ] : null,
            'farmer' => [
                'name' => $this->farmer->user->name,
                'profile_image' => $this->farmer->user->profile_image ?? null,
            ]
        ];
    }
}
