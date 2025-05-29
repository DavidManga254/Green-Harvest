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
       Schema::table('user_orders', function (Blueprint $table) {
            $table->unsignedBigInteger('farmer_id')->nullable()->after('user_id');
            $table->foreign('farmer_id')->references('id')->on('farmers')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('user_orders', function (Blueprint $table) {
            $table->dropForeign(['farmer_id']);
            $table->dropColumn('farmer_id');
        });
    }
};
