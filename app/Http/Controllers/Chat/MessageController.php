<?php

namespace App\Http\Controllers\Chat;

use App\Events\MessageSent;
use App\Http\Controllers\Controller;
use App\Http\Requests\Chat\StoreMessageRequest;
use App\Http\Resources\Chat\MessageResource;
use App\Models\Chat\Chat;
use App\Models\Chat\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function store(StoreMessageRequest $request)
    {
        $user = $request->authenticated_user;

        $vendorId = $request->vendor_id;

        // Get or create chat
        $chat = Chat::firstOrCreate([
            'customer_id' => $user->id,
            'vendor_id' => $vendorId,
        ]);

        // Save the message
        $message = Message::create([
            'chat_id' => $chat->id,
            'sender_id' => $user->id,
            'message' => $request->message,
        ]);

        $chat->update(['last_activity_at' => now()]);

        broadcast(new MessageSent($message))->toOthers();

        return new MessageResource($message);
    }


    public function index(Request $request, Chat $chat)
    {
        $user = $request->authenticated_user;

        // Authorization
        $isCustomer = $chat->customer_id === $user->id;
        $isVendor = $chat->vendor && $chat->vendor->user_id === $user->id;

        if (!($isCustomer || $isVendor)) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        // Get messages newest-first (bottom-up pagination)
        $messages = Message::where('chat_id', $chat->id)
            ->with('sender')
            ->orderBy('created_at', 'desc')
            ->paginate(30);

        return response()->json([
            'messages' => MessageResource::collection($messages->getCollection()->reverse()->values()),
            'pagination' => [
                'current_page' => $messages->currentPage(),
                'last_page' => $messages->lastPage(),
                'per_page' => $messages->perPage(),
                'total' => $messages->total(),
                'has_more' => $messages->hasMorePages(),
            ]
        ]);
    }


}