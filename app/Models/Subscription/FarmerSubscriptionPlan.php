<?php

namespace App\Models\Subscription;

use App\Models\Farmer\Farmer;
use App\Models\Produce\Produce;
use Illuminate\Database\Eloquent\Model;

class FarmerSubscriptionPlan extends Model
{
    protected $fillable = [
        'farmer_id', 'subscription_plan_template_id', 'is_active'
    ];

    public function template()
    {
        return $this->belongsTo(SubscriptionPlanTemplate::class, 'subscription_plan_template_id');
    }

    public function farmer()
    {
        return $this->belongsTo(Farmer::class);
    }

    public function subscriptions()
    {
        return $this->hasMany(Subscription::class);
    }

    public function produce()
    {
        return $this->belongsTo(Produce::class);
    }

}
