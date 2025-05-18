<?php

namespace App\Models\Order;

use App\Models\Produce\Produce;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserOrderItem extends Model
{
    protected $fillable = [
        'user_order_id',
        'produce_id',
        'quantity',
        'price',
        'total',
    ];

    public function userOrder(): BelongsTo
    {
        return $this->belongsTo(UserOrder::class, 'user_order_id');
    }

    /**
     * Each item refers to one produce.
     */
    public function produce(): BelongsTo
    {
        return $this->belongsTo(Produce::class, 'produce_id');
    }
}
