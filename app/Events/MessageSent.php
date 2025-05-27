<?php

namespace App\Events;

use App\Http\Resources\Chat\MessageResource;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class MessageSent implements ShouldBroadcastNow
{
    public $message;

    public function __construct($message)
    {
        $this->message = $message;
    }

    public function broadcastOn()
    {
        Log::info('📡 Broadcasting MessageSent event', [
            'channel' => 'chat.' . $this->message->chat_id,
            'chat_id' => $this->message->chat_id,
            'sender_id' => $this->message->sender_id,
            'to' => 'private-chat.' . $this->message->chat_id,
        ]);

        return new PrivateChannel('chat.' . $this->message->chat_id);
    }

    public function broadcastWith()
    {
        return (new MessageResource($this->message))->resolve();
    }

    public function broadcastAs()
    {
        return 'MessageSent';
    }
}