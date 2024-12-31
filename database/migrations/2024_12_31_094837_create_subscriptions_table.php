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
        Schema::create('subscriptions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('farmer_id')->constrained()->onDelete('cascade');
            $table->enum('box_type', ['standard', 'customizable'])->default('standard');
            $table->enum('frequency', ['weekly', 'bi-weekly', 'monthly'])->default('weekly');
            $table->text('preferences')->nullable();
            $table->date('start_date');
            $table->enum('status', ['active', 'paused', 'cancelled'])->default('active');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('subscriptions');
    }
};