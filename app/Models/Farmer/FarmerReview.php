<?php

namespace App\Models\Farmer;

use App\Models\User\User;
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
        return $this->belongsTo(Farmer::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function images()
    {
        return $this->hasMany(FarmerReviewImage::class);
    }
}
