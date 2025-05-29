<?php

namespace App\Models\Subscription;

use App\Models\Farmer\Farmer;
use App\Models\Produce\Produce;
use Illuminate\Database\Eloquent\Model;

class FarmerSubscriptionPlan extends Model
{
    protected $fillable = [
        'farmer_id', 'subscription_plan_template_id', 'is_active','cover_image'
    ];
    protected $guarded = []; // allows all


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

    public function items()
    {
        return $this->belongsToMany(Produce::class, 'farmer_subscription_plan_items')
            ->withTimestamps();
    }

    public function reviews()
    {
        return $this->hasMany(SubscriptionReview::class);
    }


}