<?php

namespace Database\Seeders;


// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Database\Seeders\categories\CategoriesSeeder;
use Database\Seeders\Farmer\FarmerSeeder;
use Database\Seeders\Farmer\FarmerLocationSeeder;
use Database\Seeders\Order\UserOrderStatusSeeder;
use Database\Seeders\Produce\ProduceSeeder;
use Database\Seeders\Produce\ProducesSeeder;
use Database\Seeders\Reviews\ReviewsSeeder;
use Database\Seeders\Subscription\SubscriptionPlanSeeder;
use Database\Seeders\Subscription\SubscriptionPlanTemplateSeeder;
use Database\Seeders\Subscription\SubscriptionReviewSeeder;
use Database\Seeders\User\UserSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            // UserSeeder::class,
            // FarmerSeeder::class,
            // ProduceSeeder::class
            // FarmerLocationSeeder::class
            // SubscriptionPlanTemplateSeeder::class
            // SubscriptionPlanSeeder::class
            // SubscriptionReviewSeeder::class
            // UserOrderStatusSeeder::class
            // CategoriesSeeder::class,
            // ProducesSeeder::class
            ReviewsSeeder::class
        ]);
    }
}
