<?php

namespace Database\Seeders\Order;

use App\Models\Order\UserOrder;
use App\Models\Order\UserOrderStatus;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserOrderStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        DB::beginTransaction();

        try {
            $orders = UserOrder::all();

            foreach ($orders as $order) {
                // Clear any existing statuses (optional)
                $order->statuses()->delete();

                // Add base status
                UserOrderStatus::create([
                    'user_order_id' => $order->id,
                    'status' => 'order_received',
                    'created_at' => $order->created_at,
                    'updated_at' => $order->created_at,
                ]);

                // Optionally simulate other steps
                UserOrderStatus::create([
                    'user_order_id' => $order->id,
                    'status' => 'processing',
                    'created_at' => $order->created_at->copy()->addMinutes(10),
                    'updated_at' => $order->created_at->copy()->addMinutes(10),
                ]);

                UserOrderStatus::create([
                    'user_order_id' => $order->id,
                    'status' => 'on_the_way',
                    'created_at' => $order->created_at->copy()->addMinutes(20),
                    'updated_at' => $order->created_at->copy()->addMinutes(20),
                ]);
            }

            DB::commit();

            $this->command->info("User order statuses seeded successfully.");
        } catch (\Exception $e) {
            DB::rollBack();
            $this->command->error("Seeding failed: " . $e->getMessage());
        }
    }
}
