<?php

namespace App\Http\Resources\ChatMessage;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ChatResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
        'id' => $this->id,
        'vendor' => [
            'id' => $this->vendor->id,
            'name' => $this->vendor->name,
            'avatar' => $this->vendor->profile_image ?? null
        ],
        'latest_message' => [
            'text' => $this->latestMessage?->message,
            'sent_at' => $this->latestMessage?->created_at,
        ],
        'last_activity_at' => $this->last_activity_at,
        'customer' => [
    'id' => $this->customer->id,
    'name' => $this->customer->name,
    'avatar' => $this->customer->profile_image,
],
    ];
    }
}
