<?php

namespace App\Http\Resources\FarmerSubscription;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FarmerSubscriptionPlanDetailResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'template' => [
                'name' => $this->template->name,
                'frequency' => $this->template->frequency,
                'base_price' => $this->template->base_price,
                'type' => $this->template->plan_type,
            ],
            'description' => $this->description ?? $this->template->description,
            'cover_image' => $this->cover_image ?? null,

            'included_produce' => $this->produce
                ? [[
                    'id' => $this->produce->id,
                    'name' => $this->produce->name,
                    'image' => $this->produce->images ?? null,
                    'quantity' => $this->produce->pivot->quantity ?? null
                ]]
                : $this->items->map(fn ($item) => [
                    'id' => $item->id,
                    'name' => $item->name,
                    'image' => $item->images[0]->image_path ?? null,
                    'quantity' => $item->pivot->quantity ?? null,
                ])->values(),

            'farmer' => [
                'name' => $this->farmer->user->name,
                'profile_image' => $this->farmer->user->profile_image ?? null,
                'location' => $this->farmer->location ?? null,
                'bio' => collect([
                "With over 20 years of organic farming experience, I believe healthy soil grows healthy people.",
                "Passionate about sustainable agriculture and connecting communities to clean, fresh produce.",
                "We grow with nature, not against it — everything is hand-picked and pesticide-free.",
                "A third-generation farmer committed to traditional techniques and modern quality.",
                "Our mission is simple: deliver vibrant, seasonal food straight from the earth to your home.",
                "Every crop is a promise of care, sustainability, and local resilience.",
                "From seed to harvest, we prioritize biodiversity, freshness, and community nourishment.",
                "We specialize in heirloom varieties that deliver rich flavor and deep nutrition.",
                "Farm-fresh, chemical-free, and grown with love for your health and the planet.",
                "Family-run farm that values ethical growing practices and honest food.",
            ])->random(),
            ],

            'reviews' => $this->reviews->map(function ($review) {
                return [
                    'id' => $review->id,
                    'name' => optional($review->user)->name ?? 'Anonymous',
                    'rating' => $review->rating,
                    'comment' => $review->comment,
                    'date' => $review->created_at->format('F Y'),
                ];
            }),
        ];
    }
}
