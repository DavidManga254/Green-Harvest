<?php

namespace App\Models\Subscription;

use App\Models\Farmer\Farmer;
use App\Models\User\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Subscription extends Model
{
    use SoftDeletes;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function farmer()
    {
        return $this->belongsTo(Farmer::class);
    }
}