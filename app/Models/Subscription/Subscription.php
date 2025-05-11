<?php

namespace App\Models\Subscription;

use App\Models\Farmer\Farmer;
use App\Models\User\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Subscription extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'user_id', 'farmer_subscription_plan_id', 'payment_mode',
        'start_date', 'next_billing_date', 'is_active'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function farmerSubscriptionPlan()
    {
        return $this->belongsTo(FarmerSubscriptionPlan::class);
    }

    public function reviews()
    {
        return $this->hasMany(SubscriptionReview::class);
    }



}
