<?php

namespace App\Models\Order;

use Illuminate\Database\Eloquent\Model;

class UserOrderItem extends Model
{
    protected $fillable = [
        'user_order_id',
        'produce_id',
        'quantity',
        'price',
        'total',
    ];
}
