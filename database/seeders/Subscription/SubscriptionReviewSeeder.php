<?php

namespace Database\Seeders\Subscription;

use App\Models\Subscription\FarmerSubscriptionPlan;
use App\Models\Subscription\SubscriptionReview;
use App\Models\User\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $plans = FarmerSubscriptionPlan::all();
        $users = User::where('role', 'consumer')->inRandomOrder()->take(20)->get();

        // Curated realistic reviews
        $reviews = [
            [5, "Absolutely love the freshness and variety. Always a surprise in the best way!"],
            [4, "Great quality but delivery was delayed once."],
            [5, "This box helped me eat healthier consistently."],
            [3, "Good produce but sometimes repetitive selection."],
            [5, "Perfect for busy professionals like me. I don’t have to worry about shopping."],
            [4, "Support local farms and eat well? Win-win!"],
            [5, "My kids now eat spinach without a fuss. That's magic."],
            [4, "Love the seafood options. Always fresh and tasty."],
            [5, "Beautifully packaged and always on time."],
            [3, "A few items once came slightly bruised, but customer service made up for it."],
            [4, "Good value for money. Recommended it to my coworkers."],
            [5, "I’ve never tasted tomatoes this good. Subscribed for life."],
            [5, "The butter and milk are phenomenal. I bake with them weekly."],
            [4, "One of the best subscriptions I’ve ever signed up for."],
            [5, "Makes meal prep so easy! Love the weekly rhythm."],
            [4, "Fresh, crisp vegetables every time."],
            [5, "I’m eating more fruits now than ever before. Thank you!"],
            [5, "The packaging is eco-friendly. Very thoughtful brand."],
            [3, "Would love more variety in the fruit crate."],
            [4, "Very reliable. Great for families!"],
        ];

        foreach ($plans as $plan) {
            $count = rand(4, 7);
            $sampledReviews = collect($reviews)->random($count);
            $sampledUsers = $users->random($count);

            foreach ($sampledReviews->values() as $i => [$rating, $comment]) {
                SubscriptionReview::create([
                    'farmer_subscription_plan_id' => $plan->id,
                    'user_id' => $sampledUsers[$i]->id,
                    'rating' => $rating,
                    'comment' => $comment,
                    'created_at' => now()->subDays(rand(10, 180)),
                ]);
            }
        }
    }
}
