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
        Schema::table('farmers', function (Blueprint $table) {
            $table->text('description')->nullable()->after('location');
            $table->json('practices')->nullable()->after('description');
            $table->string('certifications')->nullable()->after('practices');
            $table->text('primary_products')->nullable()->after('certifications');
            $table->json('seasonal_availability')->nullable()->after('primary_products');
            $table->boolean('delivery_options')->default(false)->after('seasonal_availability');
            $table->text('delivery_locations')->nullable()->after('delivery_options');
            $table->string('profile_image')->nullable()->after('delivery_locations');
            $table->text('social_links')->nullable()->after('profile_image');
            $table->text('notes')->nullable()->after('social_links');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('farmers', function (Blueprint $table) {
            $table->dropColumn([
                'description',
                'practices',
                'certifications',
                'primary_products',
                'seasonal_availability',
                'delivery_options',
                'delivery_locations',
                'profile_image',
                'social_links',
                'notes',
            ]);
        });
    }
};
