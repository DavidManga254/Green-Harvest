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
        Schema::table('produces', function (Blueprint $table) {
            $table->text('description')->change(); // Change 'description' to TEXT
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('produces', function (Blueprint $table) {
            $table->string('description', 255)->change(); // Revert back to VARCHAR(255)
        });
    }
};
