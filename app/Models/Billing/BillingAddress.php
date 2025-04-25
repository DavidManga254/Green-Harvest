<?php

namespace App\Models\Billing;

use App\Models\User\User;
use Illuminate\Database\Eloquent\Model;

class BillingAddress extends Model
{
    protected $fillable = [
        'user_id',
        'street',
        'city',
        'state',
        'zip_code',
        'country',
        'full_name',
        'phone',
        'address_line_1',
        'address_line_2',
        'county',
        'postal_code',
        'notes',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
