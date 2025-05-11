<?php

namespace App\Models\Subscription;

use App\Models\User\User;
use Illuminate\Database\Eloquent\Model;

class SubscriptionReview extends Model
{
        public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function plan()
    {
        return $this->belongsTo(FarmerSubscriptionPlan::class, 'farmer_subscription_plan_id');
    }
}