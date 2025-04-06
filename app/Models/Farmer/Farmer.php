<?php

namespace App\Models\Farmer;

use App\Models\Practice\Practice;
use App\Models\Subscription\Subscription;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Farmer extends Model
{
    use SoftDeletes;
    use HasFactory;

    protected $fillable = [
        'name',
        'location',
        'description',
        'practices',
        'certifications',
        'primary_products',
        'seasonal_availability',
        'delivery_options',
        'delivery_locations',
        'profile_image',
        'social_links',
        'notes',
        'latitude',
        'longitude'
    ];

    public function practices(): BelongsToMany
    {
        return $this->belongsToMany(Practice::class);
    }

    public function subscriptions(): HasMany
    {
        return $this->hasMany(Subscription::class);
    }

    public function reviews()
    {
        return $this->hasMany(FarmerReview::class);
    }
}
