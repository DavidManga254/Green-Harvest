<?php

namespace App\Models\Review;

use App\Models\Produce\Produce;
use App\Models\User\User;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    public function produce()
    {
        return $this->belongsTo(Produce::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
