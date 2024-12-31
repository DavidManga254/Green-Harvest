<?php

namespace App\Models\Produce;

use App\Models\Farmer\Farmer;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Produce extends Model
{
    //

    public function farmer(): BelongsTo
    {
        return $this->belongsTo(Farmer::class);
    }
}