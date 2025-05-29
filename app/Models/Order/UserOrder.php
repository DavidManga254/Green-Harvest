<?php

namespace App\Models\Order;

use App\Models\Billing\BillingAddress;
use App\Models\Farmer\Farmer;
use App\Models\User\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class UserOrder extends Model
{
    protected $fillable = [
        'user_id',
        'billing_address_id',
        'subtotal',
        'shipping',
        'total',
        'status',
        'notes',
        'farmer_id'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * The items in the order.
     */
    public function items(): HasMany
    {
        return $this->hasMany(UserOrderItem::class);
    }

    /**
     * Status history of the order.
     */
    public function statusUpdates(): HasMany
    {
        return $this->hasMany(OrderStatus::class);
    }

    public function statuses(): HasMany
    {
        return $this->hasMany(UserOrderStatus::class, 'user_order_id')->orderBy('created_at');
    }

    public function billingAddress()
    {
        return $this->belongsTo(BillingAddress::class, 'billing_address_id');
    }

    public function farmer()
    {
        return $this->belongsTo(Farmer::class);
    }

}
