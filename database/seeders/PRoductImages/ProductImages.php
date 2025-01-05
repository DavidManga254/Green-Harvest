<?php

namespace Database\Seeders\PRoductImages;

use App\Models\Produce\Produce;
use App\Models\ProduceImage\ProduceImage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

class ProductImages extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = Produce::all();

        foreach ($products as $product) {
            // Search Unsplash for images related to the product name
            $query = $product->name; // Use product name as the search term
            $response = Http::get('https://api.unsplash.com/search/photos', [
                'query' => $query,
                'per_page' => 5, // Get up to 5 images
                'client_id' => env('UNSPLASH_ACCESS_KEY'),
            ]);

            if ($response->successful()) {
                $images = $response->json()['results'];

                foreach ($images as $image) {
                    // Download and save the image locally
                    $imageUrl = $image['urls']['regular']; // Regular size URL
                    $imageContents = file_get_contents($imageUrl);
                    $imageName = uniqid() . '.jpg';
                    $imagePath = "products/{$product->id}/{$imageName}";

                    // Save the image in the public storage directory
                    Storage::disk('public')->put($imagePath, $imageContents);

                    // Save the image path in the database
                    ProduceImage::create([
                        'product_id' => $product->id,
                        'image_path' => $imagePath,
                    ]);
                }
            } else {
                echo "Failed to fetch images for product: {$product->name}\n";
            }
        }
    }
}
