<?php

namespace App\Models\Farmer;

use App\Models\Practice\Practice;
use App\Models\Subscription\Subscription;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Farmer extends Model
{
    use SoftDeletes;

    protected $fillable = ['name', 'location'];

    public function practices(): BelongsToMany
    {
        return $this->belongsToMany(Practice::class);
    }

    public function subscriptions(): HasMany
    {
        return $this->hasMany(Subscription::class);
    }
}