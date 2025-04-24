<?php

namespace App\Models\Payment;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $fillable = [
        'user_id',
        'reference',
        'status',
        'amount',
        'email',
        'transaction_id',
        'meta'
    ];
}
