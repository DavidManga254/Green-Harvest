<?php

namespace App\Models\Farmer;

use Illuminate\Database\Eloquent\Model;

class FarmerReviewImage extends Model
{
    protected $fillable = ['farmer_review_id', 'image_path'];

    public function review()
    {
        return $this->belongsTo(FarmerReview::class);
    }
}
