<?php

namespace App\Models\User;

use App\Models\Subscription\Subscription;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;

class User extends Model implements MustVerifyEmail
{
    use SoftDeletes;
    use Notifiable;

    protected $fillable = ['name', 'email', 'password', 'phone', 'role', 'address'];

    public function subscriptions()
    {
        return $this->hasMany(Subscription::class);
    }

    public function hasVerifiedEmail(): bool
    {
        return !is_null($this->email_verified_at);
    }

    // Mark the email as verified
    public function markEmailAsVerified(): void
    {
        $this->forceFill([
            'email_verified_at' => now(),
        ])->save();
    }

    // Send the email verification notification
    public function sendEmailVerificationNotification()
    {
        $this->notify(new VerifyEmail);
    }

    // Get the email address for verification
    public function getEmailForVerification(): string
    {
        return $this->email;
    }
}