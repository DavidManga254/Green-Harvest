<?php

namespace App\Models\Farmer;

use Illuminate\Database\Eloquent\Model;

class FarmerReview extends Model
{
    protected $fillable = [
        'user_id',
        'farmer_id',
        'rating',
        'comment',
    ];

    public function farmer()
    {
        return $this->belongsTo(\App\Models\Farmer\Farmer::class);
    }

    public function user()
    {
        return $this->belongsTo(\App\Models\User\User::class);
    }
}
