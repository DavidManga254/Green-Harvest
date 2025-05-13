<?php

namespace App\Models\Subscription;

use Illuminate\Database\Eloquent\Model;

class SubscriptionPlanTemplate extends Model
{
    protected $fillable = [
        'name', 'description', 'plan_type', 'frequency', 'base_price'
    ];

    public function farmerSubscriptionPlans()
    {
        return $this->hasMany(farmerSubscriptionPlan::class);
    }
}
