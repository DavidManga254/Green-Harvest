<?php

namespace App\Models\Order;

use Illuminate\Database\Eloquent\Model;

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
    ];
}
