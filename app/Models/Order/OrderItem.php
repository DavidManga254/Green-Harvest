<?php

namespace App\Models\Order;

use App\Models\Produce\Produce;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    public function produce()
    {
        return $this->belongsTo(Produce::class);
    }

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
