<?php

namespace Database\Seeders\Subscription;

use App\Models\Produce\Produce;
use App\Models\Subscription\FarmerSubscriptionPlan;
use App\Models\Subscription\SubscriptionPlanTemplate;
use Illuminate\Database\Seeder;

class SubscriptionPlanSeeder extends Seeder
{
    public function run()
    {
        $farmerId = 53;

        // Pull available produce grouped logically
        $spinach = Produce::where('farmer_id', $farmerId)->where('name', 'Spinach')->first();
        $tomato = Produce::where('farmer_id', $farmerId)->where('name', 'Tomato')->first();
        $apple = Produce::where('farmer_id', $farmerId)->where('name', 'Apple')->first();
        $salmon = Produce::where('farmer_id', $farmerId)->where('name', 'Salmon')->first();
        $lobster = Produce::where('farmer_id', $farmerId)->where('name', 'Lobster')->first();
        $butter = Produce::where('farmer_id', $farmerId)->where('name', 'Butter')->first();
        $broccoli = Produce::where('farmer_id', $farmerId)->where('name', 'Broccoli')->first();
        $milk = Produce::where('farmer_id', $farmerId)->where('name', 'Milk')->first();

        // 1. Veggie Box
        $template1 = SubscriptionPlanTemplate::firstOrCreate([
            'name' => 'Weekly Veggie Basket',
            'frequency' => 'weekly',
            'plan_type' => 'standard',
            'base_price' => 600,
            'description' => 'A rotating basket of fresh vegetables including spinach, broccoli, and tomato.',
        ]);

        $plan1 = FarmerSubscriptionPlan::firstOrCreate([
            'farmer_id' => $farmerId,
            'subscription_plan_template_id' => $template1->id,
            'produce_id' => null,
            'cover_image'=>'https://www.paniercadeauelizabeth.com/media/original/50028-Panier-bio-grand.jpg'
        ], ['is_active' => true]);

        $plan1->items()->sync([$spinach->id, $broccoli->id, $tomato->id]);

        // 2. Fruit Crate
        $template2 = SubscriptionPlanTemplate::firstOrCreate([
            'name' => 'Seasonal Fruit Crate',
            'frequency' => 'bi-weekly',
            'plan_type' => 'standard',
            'base_price' => 450,
            'description' => 'Enjoy seasonal fruits fresh from the orchard.',
        ]);

        $plan2 = FarmerSubscriptionPlan::firstOrCreate([
            'farmer_id' => $farmerId,
            'subscription_plan_template_id' => $template2->id,
            'produce_id' => null,
            'cover_image'=>'https://media.istockphoto.com/id/953006520/photo/fruits-and-vegetables-in-a-wooden-crate-on-white-background.jpg?s=612x612&w=0&k=20&c=3_PpBuu1oDb_unJ2GZW8Wv03fkViPlBUR8fy_Y1LN4c='
        ], ['is_active' => true]);

        $plan2->items()->sync([$apple->id]);

        // 3. Dairy Delight
        $template3 = SubscriptionPlanTemplate::firstOrCreate([
            'name' => 'Dairy Delight Box',
            'frequency' => 'monthly',
            'plan_type' => 'standard',
            'base_price' => 850,
            'description' => 'A monthly supply of dairy goodness including butter and milk.',
        ]);

        $plan3 = FarmerSubscriptionPlan::firstOrCreate([
            'farmer_id' => $farmerId,
            'subscription_plan_template_id' => $template3->id,
            'produce_id' => null,
            'cover_image'=>'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrIUaAM7VCqiELdb_gfQeaVjqzhgtwcRY1Q&s'
        ], ['is_active' => true]);

        $plan3->items()->sync([$butter->id, $milk->id]);

        // 4. Protein Pack
        $template4 = SubscriptionPlanTemplate::firstOrCreate([
            'name' => 'Protein Pack (Seafood)',
            'frequency' => 'weekly',
            'plan_type' => 'standard',
            'base_price' => 1200,
            'description' => 'A box packed with premium seafood including salmon and lobster.',
        ]);

        $plan4 = FarmerSubscriptionPlan::firstOrCreate([
            'farmer_id' => $farmerId,
            'subscription_plan_template_id' => $template4->id,
            'produce_id' => null,
            'cover_image'=>'https://media.sciencephoto.com/h1/10/48/16/h1104816-800px-wm.jpg'
        ], ['is_active' => true]);

        $plan4->items()->sync([$salmon->id, $lobster->id]);

        // 5. Tomato Exclusive
        $template5 = SubscriptionPlanTemplate::firstOrCreate([
            'name' => 'Tomato Lovers Club',
            'frequency' => 'weekly',
            'plan_type' => 'standard',
            'base_price' => 300,
            'description' => 'A weekly supply of ripe, flavorful tomatoes perfect for sauces and salads.',
        ]);

        $plan5 = FarmerSubscriptionPlan::firstOrCreate([
            'farmer_id' => $farmerId,
            'subscription_plan_template_id' => $template5->id,
            'produce_id' => $tomato->id,
            'cover_image'=>'https://www.shutterstock.com/image-photo/red-tomatoes-basket-on-table-600nw-2500879715.jpg'
        ], ['is_active' => true]);

        // 6. Balanced Farm Box
        $template6 = SubscriptionPlanTemplate::firstOrCreate([
            'name' => 'Balanced Farm Box',
            'frequency' => 'monthly',
            'plan_type' => 'standard',
            'base_price' => 980,
            'description' => 'A balanced box of greens, fruits, and proteins: spinach, apple, and salmon.',
        ]);

        $plan6 = FarmerSubscriptionPlan::firstOrCreate([
            'farmer_id' => $farmerId,
            'subscription_plan_template_id' => $template6->id,
            'produce_id' => null,
            'cover_image'=>"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD32z0RdOYf7Btj4FDI9cO2XwLQCs-AaYoymRYFksE9r2n1JS1JmdcepQH25kweiL2_7I&usqp=CAU"
        ], ['is_active' => true]);

        $plan6->items()->sync([$spinach->id, $apple->id, $salmon->id]);
    }
}