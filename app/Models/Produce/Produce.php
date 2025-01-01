<?php

namespace App\Models\Produce;

use App\Models\Farmer\Farmer;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Produce extends Model
{
    protected $fillable = ['farmer_id', 'name', 'description', 'price_per_unit', 'quantity', 'available_from', 'available_to'];

    public function farmer(): BelongsTo
    {
        return $this->belongsTo(Farmer::class);
    }
}
