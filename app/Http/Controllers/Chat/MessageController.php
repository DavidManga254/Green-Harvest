<?php

namespace App\Http\Controllers\Chat;

use App\Events\MessageSent;
use App\Http\Controllers\Controller;
use App\Http\Requests\Chat\StoreMessageRequest;
use App\Http\Requests\Message\CheckChatStatusWithVendor;
use App\Http\Resources\Chat\FarmerMessageResource;
use App\Http\Resources\Chat\MessageResource;
use App\Http\Resources\ChatMessage\ChatResource;
use App\Models\Chat\Chat;
use App\Models\Chat\Message;
use App\Models\Farmer\Farmer;
use Carbon\Carbon;
use Firebase\JWT\JWT;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class MessageController extends Controller
{


    public function getUserChats(Request $request)
    {
        $user = $request->user();

        $chats = Chat::with([
            'vendor:id,name,profile_image',
            'latestMessage'
        ])
        ->where('customer_id', $user->id)
        ->orderByDesc('last_activity_at')
        ->get();

        return response()->json([
            'data' => ChatResource::Collection($chats)
        ]);
    }

    public function getFarmerChats(Request $request)
{
    $farmer = $request->farmer;


    if (!$farmer) {
        return response()->json(['message' => 'Unauthorized'], 403);
    }

    $chats = Chat::with(['customer:id,name,profile_image', 'latestMessage'])
        ->where('vendor_id', $farmer->id)
        ->orderByDesc('last_activity_at')
        ->get();

    return response()->json([
        'data' => ChatResource::collection($chats),
    ]);
}


    public function CheckChatStatusWithFarmer(CheckChatStatusWithVendor $request){
        $user = $request->authenticated_user;

        $vendorId = $request->input('vendor_id');

        if (!$vendorId || !Farmer::where('id', $vendorId)->exists()) {
            return response()->json(['error' => 'Invalid vendor'], 400);
        }

        $chat = Chat::firstOrCreate([
            'customer_id' => $user->id,
            'vendor_id' => $vendorId,
        ]);

        return response()->json(['chat_id' => $chat->id]);
    }

    public function storeAsCustomer(StoreMessageRequest $request)
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
            'product_id' => $request->product_id,
        ]);

        $chat->update(['last_activity_at' => now()]);

        broadcast(new MessageSent($message))->toOthers();

        return new MessageResource($message);
    }

    public function storeAsFarmer(StoreMessageRequest $request)
    {
        $user = $request->authenticated_user;
        $customerId = $request->customer_id;

        $farmer = $user->farmer; // assumes hasOne Farmer relation



        if (!$farmer) {
            return response()->json(['message' => 'You are not associated with a farmer profile.'], 403);
        }

        $chat = Chat::firstOrCreate([
            'customer_id' => $customerId,
            'vendor_id' => $farmer->id,
        ]);

        $message = Message::create([
            'chat_id' => $chat->id,
            'sender_id' => $user->id,
            'message' => $request->message,
        ]);

        $chat->update(['last_activity_at' => now()]);

        broadcast(new MessageSent($message));
        Log::info('📨 MessageSent dispatched manually');
        // broadcast(new MessageSent($message))->toOthers();

        return new MessageResource($message);
    }


    public function generateChatSessionToken(Request $request)
    {
        $user = $request->authenticated_user;

        $issuedAt = now()->timestamp;
        $expiration = now()->addHour()->timestamp; // 1 hour

        $payload = [
            'iat' => $issuedAt,
            'exp' => $expiration,
            'id' => $user->id,
            'email' => $user->email,
            'name' => $user->name,
            'type' => 'chat-session',
        ];

        $token = JWT::encode($payload, env('JWT_KEY'), 'HS256');

        return response()->json([
            'chat_token' => $token,
            'expires_at' => Carbon::createFromTimestamp($expiration)->toIso8601String(),
        ]);
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
            ->with(['sender','product'])
            ->orderBy('created_at', 'desc')
            ->paginate(30);

        // Get farmer profile details
        $farmerUser = optional($chat->vendor);

        return response()->json([
            'messages' => MessageResource::collection($messages->getCollection()->reverse()->values()),
            'pagination' => [
                'current_page' => $messages->currentPage(),
                'last_page' => $messages->lastPage(),
                'per_page' => $messages->perPage(),
                'total' => $messages->total(),
                'has_more' => $messages->hasMorePages(),
            ],
            'farmer' => $farmerUser ? [
                'id' => $farmerUser->id,
                'name' => $farmerUser->name,
                'avatar' => $farmerUser->profile_image, // or use `asset($farmerUser->profile_photo_path)`
            ] : null,
        ]);
    }

    public function getFarmerMessages(Request $request, Chat $chat)
    {
        $farmer = $request->farmer;

        // Authorization
        $isVendor = $chat->vendor && $chat->vendor->id === $farmer->id;


        if (!($isVendor)) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }


        // Get messages newest-first (bottom-up pagination)
        $messages = Message::where('chat_id', $chat->id)
            ->with(['sender','product'])
            ->orderBy('created_at', 'desc')
            ->paginate(30);

        // Get farmer profile details
        $user = optional($chat->customer);

        $farmerUser = optional($chat->vendor);


        return response()->json([
            'messages' => FarmerMessageResource::collection($messages->getCollection()->reverse()->values()),
            'pagination' => [
                'current_page' => $messages->currentPage(),
                'last_page' => $messages->lastPage(),
                'per_page' => $messages->perPage(),
                'total' => $messages->total(),
                'has_more' => $messages->hasMorePages(),
            ],
            'user' => $user ? [
                'id' => $user->id,
                'name' => $user->name,
                'avatar' => $user->profile_image, // or use `asset($farmerUser->profile_photo_path)`
            ] : null,
            'farmer' => $farmerUser ? [
                'id' => $farmerUser->id,
                'name' => $farmerUser->name,
                'avatar' => $farmerUser->profile_image, // or use `asset($farmerUser->profile_photo_path)`
            ] : null,
        ]);
    }



}