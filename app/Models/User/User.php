<?php

namespace App\Models\User;

use App\Models\Subscription\Subscription;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Model
{
    use SoftDeletes;

    protected $fillable = ['name', 'email', 'phone', 'role', 'address'];

    public function subscriptions()
    {
        return $this->hasMany(Subscription::class);
    }
}