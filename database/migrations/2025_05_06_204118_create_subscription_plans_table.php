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
        Schema::create('subscription_plans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('farmer_id')->constrained()->onDelete('cascade');
            $table->enum('plan_type', ['standard', 'custom']);
            $table->enum('frequency', ['weekly', 'bi-weekly', 'monthly']);
            $table->enum('payment_mode', ['recurring', 'seasonal']);
            $table->decimal('price', 8, 2);
            $table->date('start_date');
            $table->date('next_billing_date')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('subscription_plans');
    }
};