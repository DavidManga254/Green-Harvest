<?php

namespace Database\Seeders;


// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Database\Seeders\Farmer\FarmerSeeder;
use Database\Seeders\Farmer\FarmerLocationSeeder;
use Database\Seeders\Produce\ProduceSeeder;
use Database\Seeders\Subscription\SubscriptionPlanTemplateSeeder;
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
            SubscriptionPlanTemplateSeeder::class
        ]);
    }
}