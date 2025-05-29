<?php

namespace App\Models\User;

use App\Models\Billing\BillingAddress;
use App\Models\cart\Cart;
use App\Models\Farmer\Farmer;
use App\Models\Order\Order;
use App\Models\Order\UserOrder;
use App\Models\Subscription\Subscription;
use App\Models\Subscription\SubscriptionPlan;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends authenticatable
{
    use SoftDeletes;
    use Notifiable;
    use HasFactory;

    protected $fillable = ['name', 'email', 'password', 'phone', 'role', 'address', 'token','profile_image'];

    public function subscriptionPlans()
    {
        return $this->hasMany(SubscriptionPlan::class);
    }

    public function hasVerifiedEmail(): bool
    {
        return !is_null($this->email_verified_at);
    }

    public function cart()
    {
        return $this->hasOne(Cart::class);
    }

    public function billingAddresses()
    {
        return $this->hasMany(BillingAddress::class);
    }

    public function orders(): HasMany
    {
        return $this->hasMany(UserOrder::class);
    }

    public function hasActiveSubscriptionTo($planId)
    {
        return $this->subscriptions()
            ->where('plan_id', $planId)
            ->whereNull('ends_at') // or ->where('status', 'active')
            ->exists();
    }

    public function farmer(){
        return $this->hasOne(Farmer::class);
    }


}