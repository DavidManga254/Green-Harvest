<?php

namespace App\Models\User;

use App\Models\Subscription\Subscription;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;

class User extends Model
{
    use SoftDeletes;
    use Notifiable;
    use HasFactory;

    protected $fillable = ['name', 'email', 'password', 'phone', 'role', 'address', 'token'];

    public function subscriptions()
    {
        return $this->hasMany(Subscription::class);
    }

    public function hasVerifiedEmail(): bool
    {
        return !is_null($this->email_verified_at);
    }
}
