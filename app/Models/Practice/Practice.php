<?php

namespace App\Models\Practice;

use App\Models\Farmer\Farmer;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Practice extends Model
{
    use HasFactory;

    public function farmer(): BelongsToMany
    {
        return $this->belongsToMany(Farmer::class);
    }
}