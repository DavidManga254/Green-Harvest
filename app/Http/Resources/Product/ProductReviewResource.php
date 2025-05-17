<?php

namespace App\Http\Resources\Product;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class ProductReviewResource extends JsonResource
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
            'user_name' => $this->user->name ?? 'Anonymous',
            'initial' => strtoupper(substr($this->user->name ?? 'A', 0, 1)),
            'rating' => $this->rating,
            'comment' => $this->comment,
            'posted_at' => Carbon::parse($this->created_at)->diffForHumans(),
        ];
    }
}
