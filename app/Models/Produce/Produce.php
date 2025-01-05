<?php

namespace App\Models\Produce;

use App\Models\Category\Category;
use App\Models\Farmer\Farmer;
use App\Models\ProduceImage\ProduceImage;
use App\Models\Review\Review;
use App\Models\Tag\Tag;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Produce extends Model
{
    protected $fillable = ['farmer_id', 'name', 'description', 'price_per_unit', 'quantity', 'available_from', 'available_to'];

    public function farmer(): BelongsTo
    {
        return $this->belongsTo(Farmer::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'produce_tag');
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function images()
    {
        return $this->hasMany(ProduceImage::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
}
