<?php

namespace Database\Seeders\Subscription;

use App\Models\Subscription\SubscriptionPlanTemplate;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionPlanTemplateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $plans = [
            [
                'name' => 'Standard Weekly Box',
                'description' => 'A curated box of seasonal produce delivered weekly.',
                'plan_type' => 'standard',
                'frequency' => 'weekly',
                'base_price' => 15.00,
            ],
            [
                'name' => 'Custom Bi-weekly Box',
                'description' => 'Pick your own selection, delivered every two weeks.',
                'plan_type' => 'custom',
                'frequency' => 'bi-weekly',
                'base_price' => 20.00,
            ],
            [
                'name' => 'Standard Monthly Box',
                'description' => 'Pre-selected monthly delivery of local produce.',
                'plan_type' => 'standard',
                'frequency' => 'monthly',
                'base_price' => 30.00,
            ],
        ];

        foreach ($plans as $plan) {
            SubscriptionPlanTemplate::create($plan);
        }
    }
}