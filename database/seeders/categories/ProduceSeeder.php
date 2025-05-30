<?php
use App\Models\Produce\Produce;
use App\Models\Farmer\Farmer;
use App\Models\Category\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ProducesSeeder extends Seeder
{
    public function run(): void
    {
        $categories = Category::all();
        $farmers = Farmer::all();
        $faker = \Faker\Factory::create('en_KE');

        foreach ($farmers as $farmer) {
            for ($i = 0; $i < 15; $i++) {
                $category = $categories->random();
                Produce::create([
                    'farmer_id' => $farmer->id,
                    'name' => $faker->randomElement([
                        'Sukuma Wiki', 'Cow Milk', 'Fresh Tilapia', 'Sweet Bananas',
                        'Arrowroots', 'Maize Flour', 'Groundnuts', 'Tomatoes',
                        'Fresh Eggs', 'Avocados', 'Honey', 'Managu', 'Cabbages', 'Papayas', 'Pumpkin Leaves'
                    ]),
                    'description' => $faker->sentence(),
                    'markdown_description' => $faker->paragraph(),
                    'price_per_unit' => $faker->randomFloat(2, 20, 300),
                    'quantity' => $faker->numberBetween(10, 100),
                    'is_on_sale' => $faker->boolean(30),
                    'discount' => $faker->randomFloat(2, 5, 30),
                    'out_of_stock' => $faker->boolean(10),
                    'available_from' => now()->subDays(rand(1, 30)),
                    'available_to' => now()->addDays(rand(5, 60)),
                    'category_id' => $category->id,
                    'rating' => $faker->randomFloat(1, 3.5, 5.0),
                    'tags' => json_encode(['organic', 'local', 'fresh']),
                ]);
            }
        }
    }
}