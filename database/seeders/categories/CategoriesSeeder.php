<?php

namespace Database\Seeders\categories;

use App\Models\Category\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            'Fruits', 'Vegetables', 'Dairy Products', 'Meat', 'Fish & Seafood',
            'Legumes & Pulses', 'Tubers & Roots', 'Herbs & Spices',
            'Cereals & Grains', 'Oils & Fats', 'Baking Essentials',
            'Beverages', 'Honey & Sweeteners', 'Animal Products', 'Organic Fertilizers'
        ];

        foreach ($categories as $name) {
            Category::create(['name' => $name]);
        }
    }
}
