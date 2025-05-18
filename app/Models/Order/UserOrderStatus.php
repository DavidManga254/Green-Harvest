<?php

namespace App\Models\Order;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserOrderStatus extends Model
{
    protected $fillable = ['user_order_id', 'status'];

    public function order(): BelongsTo
    {
        return $this->belongsTo(UserOrder::class, 'user_order_id');
    }
}