<?php

use App\Models\Chat\Chat;
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Log;

Broadcast::routes([
    'middleware' => ['chatAuth'],
]);

Broadcast::channel('chat.{chatId}', fn ($user, $chatId) => true);


Broadcast::channel('chat.{chatId}', function ($user, $chatId) {
    // return Chat::where('id', $chatId)
    //     ->where(function ($q) use ($user) {
    //         $q->where('customer_id', $user->id)
    //           ->orWhereHas('vendor', function ($v) use ($user) {
    //               $v->where('user_id', $user->id); // walk through farmers table
    //           });
    //     })->exists();
    Log::info('Channel invoked', ['user_id' => $user->id, 'chat_id' => $chatId]);
    Log::info('Channel invoked', ['user' => $user]);

     return Chat::where('id', $chatId)
        ->where(function ($q) use ($user) {
            $q->where('customer_id', $user->id)
              ->orWhereHas('vendor', function ($v) use ($user) {
                  $v->where('user_id', $user->id); // walk through farmers table
              });
        })->exists();

});
