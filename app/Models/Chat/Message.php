<?php

namespace App\Models\Chat;

use App\Models\Produce\Produce;
use App\Models\User\User;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = [
        'chat_id',
        'sender_id',
        'message',
        'product_id'
    ];

    public function chat() {
        return $this->belongsTo(Chat::class);
    }

    public function sender() {
        return $this->belongsTo(User::class, 'sender_id');
    }

    public function product()
    {
        return $this->belongsTo(Produce::class);
    }


}