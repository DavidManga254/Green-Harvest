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
        Schema::create('subscription_plan_templates', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // e.g. "Standard Weekly Box"
            $table->text('description')->nullable();
            $table->enum('plan_type', ['standard', 'custom']);
            $table->enum('frequency', ['weekly', 'bi-weekly', 'monthly']);
            $table->decimal('base_price', 8, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('subscription_plan_templates');
    }
};