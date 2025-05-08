<?php

namespace App\Http\Resources\FarmerSubscription;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FarmerSubscriptionPlanDetailResource extends JsonResource
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
                'type' => $this->template->plan_type,
            ],
            'description' => $this->description ?? $this->template->description,
            'included_produce' => $this->produce
                ? [ [ 'id' => $this->produce->id, 'name' => $this->produce->name ] ]
                : $this->items->map(fn($item) => [
                    'id' => $item->id,
                    'name' => $item->name,
                ]),
            'farmer' => [
                'name' => $this->farmer->user->name,
                'profile_image' => $this->farmer->user->profile_image ?? null,
                'location' => $this->farmer->location ?? null,
            ]
        ];
    }
}