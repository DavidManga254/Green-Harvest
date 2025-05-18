<?php

namespace App\Models\Order;

use Illuminate\Database\Eloquent\Model;

class OrderStatus extends Model
{
    protected $table = 'order_status';

    protected $fillable = [
        'order_id',
        'status',
    ];

    public $timestamps = true;

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
