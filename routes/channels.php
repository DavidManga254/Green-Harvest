<?php

use App\Models\Chat\Chat;
use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('chat.{chatId}', function ($user, $chatId) {
    return Chat::where('id', $chatId)
        ->where(function ($q) use ($user) {
            $q->where('customer_id', $user->id)
              ->orWhereHas('vendor', fn($v) => $v->where('user_id', $user->id));
        })->exists();
});