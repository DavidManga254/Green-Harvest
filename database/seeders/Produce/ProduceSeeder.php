<?php

namespace Database\Seeders\Produce;

use App\Models\Category\Category;
use App\Models\Farmer\Farmer;
use App\Models\Produce\Produce;
use App\Models\ProduceImage\ProduceImage;
use App\Models\Review\Review;
use App\Models\User\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Faker\Factory as Faker;

class ProduceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        $defaultUser = User::first();

        // Get an existing farmer or create a default one
        $defaultFarmer = Farmer::first();

        // Get an existing user or create a default user



        // Define categories and produces
        $categories = [
            'Fruits' => ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple'],
            'Vegetables' => ['Carrot', 'Potato', 'Broccoli', 'Spinach', 'Tomato'],
            'Dairy' => ['Milk', 'Cheese', 'Yogurt', 'Butter', 'Cream'],
            'Meat' => ['Chicken', 'Beef', 'Lamb', 'Pork', 'Turkey'],
            'Seafood' => ['Salmon', 'Tuna', 'Shrimp', 'Lobster', 'Crab'],
        ];

        foreach ($categories as $categoryName => $produces) {
            foreach ($produces as $produceName) {
                // Create a produce
                $produce = Produce::create([
                    'name' => $produceName,
                    'description' => $faker->paragraph,
                    'price_per_unit' => $faker->randomFloat(2, 1, 100), // Random price between $1 and $100
                    'quantity' => $faker->numberBetween(10, 200), // Random quantity between 10 and 200
                    'category_id' => $this->getCategoryId($categoryName), // Get or create category ID
                    'is_on_sale' => $faker->boolean, // Randomly mark as on sale
                    'discount' => $faker->boolean ? $faker->randomFloat(2, 5, 30) : null, // Discount if on sale
                    'out_of_stock' => $faker->boolean(20), // 20% chance of being out of stock
                    'available_from' => $faker->dateTimeBetween('-1 month', 'now'), // Available from last month to now
                    'available_to' => $faker->dateTimeBetween('now', '+2 months'), // Available until 2 months in the future
                    'rating' => $faker->randomFloat(2, 0, 5), // Random rating between 0 and 5
                    'tags' => json_encode($faker->words(5)), // Random tags as JSON
                    'farmer_id' => $defaultFarmer->id, // Assign the default farmer ID
                ]);


                // Attach images to the produce
                $this->attachImages($produce);

                // Add reviews to the produce
                $this->addReviews($produce);
            }
        }
    }

    private function attachImages(Produce $produce)
    {
        // Aspect ratio 209:139
        $width = 500; // Define your preferred width
        $height = intval($width / 1.5036); // Calculate height based on the aspect ratio

        foreach (range(1, 5) as $index) {
            // Use Unsplash to fetch images
            $query = $produce->name; // Use produce name as the search term
            $response = Http::get('https://api.unsplash.com/search/photos', [
                'query' => $query,
                'per_page' => 1,
                'client_id' => env('UNSPLASH_ACCESS_KEY'),
            ]);

            if ($response->successful()) {
                $images = $response->json()['results'];
                foreach ($images as $image) {
                    // Use 'raw' URL with specified dimensions and cropping
                    $imageUrl = $image['urls']['raw'] . "&w={$width}&h={$height}&fit=crop";

                    // Save the image URL directly in the database
                    ProduceImage::create([
                        'produce_id' => $produce->id,
                        'image_path' => $imageUrl, // Save the HTTPS URL with specified aspect ratio
                    ]);
                }
            }
        }
    }


    private function addReviews(Produce $produce)
    {
        $faker = Faker::create();

        foreach (range(1, 10) as $index) { // Add 10 reviews per produce
            Review::create([
                'produce_id' => $produce->id,
                'user_id' => $faker->numberBetween(10, 70), // Assuming 50 users exist
                'rating' => $faker->numberBetween(1, 5),
                'comment' => $faker->sentence,
            ]);
        }
    }

    private function getCategoryId($categoryName)
    {
        // Assuming you have a categories table and model
        return Category::firstOrCreate(['name' => $categoryName])->id;
    }
}
