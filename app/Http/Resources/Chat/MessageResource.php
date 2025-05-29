<?php

namespace App\Http\Resources\Chat;

use App\Http\Resources\Produce\ProduceResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MessageResource extends JsonResource
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
        'chat_id' => $this->chat_id,
        'sender' => [
            'id' => $this->sender->id,
            'name' => $this->sender->name,
            'avatar' => $this->sender->avatar_url ?? null,
        ],
        'message' => $this->message,
        'created_at' => $this->created_at->toDateTimeString(),
        'is_me' => $request->authenticated_user->id === $this->sender_id,
        'product'=> $this->product_id? new ProduceResource($this->product):null,
        'product_detail' => $this->whenLoaded('product', function () {
            return [
                'id' => $this->product->id,
                'name' => $this->product->name,
                'price_per_unit' => $this->product->price_per_unit,
                'image' => $this->product->images()->first()?->image_path, // get first image if available
            ];
        }),
    ];
    }
}
