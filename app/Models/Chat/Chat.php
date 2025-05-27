<?php

namespace App\Models\Chat;

use App\Models\Farmer\Farmer;
use App\Models\User\User;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{

    protected $fillable = [
        'customer_id',
        'vendor_id',
        'last_activity_at',
    ];

    public function customer() {
        return $this->belongsTo(User::class, 'customer_id');
    }

    public function vendor() {
        return $this->belongsTo(Farmer::class, 'vendor_id');
    }

    public function messages() {
        return $this->hasMany(Message::class);
    }

}