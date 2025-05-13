<?php

namespace App\Http\Resources\User;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserSubscriptionResourcee extends JsonResource
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
            'name' => $this->template->name ?? null,
            'description' => $this->template->description ?? null,
            'frequency' => $this->template->frequency ?? $this->frequency,
            'plan_type' => $this->template->plan_type ?? $this->plan_type,
            'price' => $this->price,
            'start_date' => $this->start_date,
            'next_billing_date' => $this->next_billing_date,
            'is_active' => $this->is_active,
            'farmer' => [
                'id' => $this->farmer->id,
                'name' => $this->farmer->user->name ?? null,
                'location' => $this->farmer->location ?? null,
            ],
            'image_url' => $this->template->farmerSubscriptionPlans[0]->cover_image ?? null, // if you store images
        ];
    }
}