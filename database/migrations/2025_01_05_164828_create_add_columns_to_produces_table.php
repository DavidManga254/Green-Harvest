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
            $table->boolean('is_on_sale')->default(false)->after('price_per_unit');
            $table->decimal('discount', 5, 2)->nullable()->after('is_on_sale');
            $table->boolean('out_of_stock')->default(false)->after('quantity');
            $table->foreignId('category_id')->nullable()->constrained('categories')->onDelete('set null')->after('out_of_stock');
            $table->float('rating', 3, 2)->default(0)->after('category_id');
            $table->json('tags')->nullable()->after('rating');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('produces', function (Blueprint $table) {
            $table->dropColumn([
                'is_on_sale',
                'discount',
                'out_of_stock',
                'category_id',
                'rating',
                'tags',
            ]);
        });
    }
};
