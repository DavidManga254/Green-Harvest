<?php

namespace Database\Seeders\Farmer;

use App\Models\Farmer\Farmer;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class FarmerLocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        // Example: Nairobi center coordinates (as base)
        $baseLat = -1.286389;
        $baseLng = 36.817223;

        Farmer::all()->each(function ($farmer) use ($faker, $baseLat, $baseLng) {
            $latitude = $baseLat + $faker->randomFloat(6, -0.2, 0.2);   // ±~22km
            $longitude = $baseLng + $faker->randomFloat(6, -0.2, 0.2); // ±~22km

            $farmer->update([
                'latitude' => $latitude,
                'longitude' => $longitude,
            ]);
        });
    }
}
