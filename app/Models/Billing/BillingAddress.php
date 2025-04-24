<?php

namespace App\Models\Billing;

use App\Models\User\User;
use Illuminate\Database\Eloquent\Model;

class BillingAddress extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
