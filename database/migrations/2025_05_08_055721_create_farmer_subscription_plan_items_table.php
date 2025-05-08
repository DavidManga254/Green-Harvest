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
        Schema::create('farmer_subscription_plan_items', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('farmer_subscription_plan_id');
            $table->unsignedBigInteger('produce_id');

            $table->foreign('farmer_subscription_plan_id', 'fsp_items_fsp_id_fk')
                ->references('id')->on('farmer_subscription_plans')
                ->onDelete('cascade');

            $table->foreign('produce_id', 'fsp_items_prod_id_fk')
                ->references('id')->on('produces')
                ->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('farmer_subscription_plan_items');
    }
};