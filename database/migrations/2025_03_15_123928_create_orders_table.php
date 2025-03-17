<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->decimal('total_price', 10, 2);
            $table->decimal('discount', 5, 2)->default(0);
            $table->decimal('shipping_fee', 10, 2)->default(0);
            $table->enum('payment_method', ['mpesa', 'stripe', 'paypal']);
            $table->enum('status', ['order_received', 'processing', 'on_the_way', 'delivered'])->default('order_received');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};