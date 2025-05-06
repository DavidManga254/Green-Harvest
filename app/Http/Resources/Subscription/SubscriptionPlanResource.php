<?php

namespace App\Http\Resources\Subscription;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SubscriptionPlanResource extends JsonResource
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
            'plan_type' => $this->plan_type,
            'frequency' => $this->frequency,
            'payment_mode' => $this->payment_mode,
            'price' => $this->price,
            'start_date' => $this->start_date,
            'next_billing_date' => $this->next_billing_date,
            'is_active' => $this->is_active,
            'items' => SubscriptionPlanItemResource::collection($this->whenLoaded('items')),
            'created_at' => $this->created_at,
        ];
    }
}
