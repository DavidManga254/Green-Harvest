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
        Schema::create('practices', function (Blueprint $table) {
            $table->id();
            $table->enum('name', [
                'Organic Farming',
                'Sustainable Farming',
                'Pesticide-Free Farming',
                'Hydroponics',
                'Aquaponics',
                'Dairy Farming',
                'Free-Range Poultry',
                'Beekeeping',
                'Crop Rotation',
                'Agroforestry',
                'Irrigated Farming',
                'Regenerative Agriculture',
                'Pasture Grazing',
                'Mixed Farming',
                'Organic Dairy',
                'Fertilizer-Free Farming',
                'Sheep Farming',
                'Goat Farming',
                'Silviculture',
                'Fish Farming',
                'Vertical Farming',
                'Urban Gardening',
                'Livestock Integration',
                'Permaculture',
                'Cover Cropping',
                'Precision Agriculture',
                'Composting',
                'No-Till Farming',
                'Dryland Farming',
                'Wildlife-Friendly Farming',
                'Shifting Cultivation',
                'Terrace Farming',
                'Integrated Pest Management',
                'Alley Cropping',
                'Conservation Tillage',
                'Forestry',
                'Seaweed Farming',
                'Shrimp Aquaculture',
                'Integrated Farming Systems',
                'Hedgerow Planting',
                'Rainwater Harvesting',
                'Biointensive Farming',
                'Sloping Agricultural Land Technology',
                'Intercropping',
                'Biodynamic Agriculture',
                'Water Conservation Practices',
                'Horticulture',
                'Tree Farming',
                'Crop Diversification',
                'Rooftop Farming',
                'Vermiculture',
                'Mulching',
                'Biochar Usage',
                'Salinity Management',
                'Riparian Buffer Strips',
                'Climate-Smart Agriculture',
                'Mechanized Farming',
                'Controlled Environment Agriculture',
                'Plasticulture',
                'Edible Landscaping',
                'Integrated Weed Management',
                'Farm Forestry',
                'Pastoralism',
                'Intensive Grazing',
                'Rotational Grazing',
                'Fodder Cropping',
                'Soil Erosion Control',
                'Soil Reclamation',
                'Agri-tourism',
                'Community-Supported Agriculture (CSA)',
                'Contract Farming',
                'Industrial Agriculture',
                'Seed Saving',
                'Organic Certification Practices',
                'Sustainable Aquaculture',
                'Genetically Modified Crops (GMO)',
                'Traditional Irrigation Systems',
                'Bioenergy Crop Farming',
                'Organic Pest Management',
                'Herbal Farming',
                'Medicinal Plant Cultivation',
                'Solar-Powered Farming',
                'Drought-Resilient Farming'
            ]);
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('practices');
    }
};