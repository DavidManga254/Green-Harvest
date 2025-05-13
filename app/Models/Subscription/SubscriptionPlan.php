<?php

namespace App\Models\Subscription;

use App\Models\Farmer\Farmer;
use App\Models\User\User;
use Illuminate\Database\Eloquent\Model;

class SubscriptionPlan extends Model
{
    protected $fillable = [
        'user_id', 'plan_type', 'frequency', 'payment_mode',
        'price', 'start_date', 'next_billing_date', 'is_active','farmer_id','template_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function items()
    {
        return $this->hasMany(SubscriptionPlanItem::class);
    }

    public function farmer()
    {
        return $this->belongsTo(Farmer::class);
    }

    public function template()
    {
        return $this->belongsTo(SubscriptionPlanTemplate::class, 'template_id');
    }
}
