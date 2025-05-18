<?php

namespace App\Models\Order;

use App\Models\Order\OrderItem;
use App\Models\Order\OrderStatus;
use App\Models\User\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Order extends Model
{
    protected $fillable = [
        'user_id',
        'total_price',
        'payment_method',
        'status',
    ];

    /**
     * The customer who placed the order.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * The items in the order.
     */
    public function items(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }

    /**
     * Status history of the order.
     */
    public function statusUpdates(): HasMany
    {
        return $this->hasMany(OrderStatus::class);
    }

    public function statuses()
    {
        return $this->hasMany(OrderStatus::class)->orderBy('updated_at');
    }
}