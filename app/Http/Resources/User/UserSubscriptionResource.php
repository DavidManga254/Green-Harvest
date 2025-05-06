<?php

namespace App\Http\Resources\User;

use App\Http\Resources\Farmer\FarmerSubscriptionPlanResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserSubscriptionResource extends JsonResource
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
            'plan' => new FarmerSubscriptionPlanResource($this->farmerSubscriptionPlan),
            'payment_mode' => $this->payment_mode,
            'start_date' => $this->start_date,
            'next_billing_date' => $this->next_billing_date,
            'is_active' => $this->is_active,
        ];
    }
}
