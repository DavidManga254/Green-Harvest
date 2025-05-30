<?php

use App\Models\Produce\Produce;
use Illuminate\Database\Seeder;

class ProducesSeeder extends Seeder
{
    public function run(): void
    {
        $produce = Produce::create([
            'farmer_id' => 53,
            'name' => "Free Range Eggs (North Christoph)",
            'description' => "Premium quality free range eggs fresh from our farm.",
            'markdown_description' => <<<MD
## Free Range Eggs

Our free range eggs from North Christoph is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of free range eggs with care and passion. You can taste the difference in every bite."_
— *Dr. Eliza Murazik MD*

MD,
            'price_per_unit' => 180,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 7,
            'rating' => 4.9,
        ]);

        $produce = Produce::create([
            'farmer_id' => 53,
            'name' => "Tomatoes (North Christoph)",
            'description' => "Premium quality tomatoes fresh from our farm.",
            'markdown_description' => <<<MD
## Tomatoes

Our tomatoes from North Christoph is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of tomatoes with care and passion. You can taste the difference in every bite."_
— *Dr. Eliza Murazik MD*

MD,
            'price_per_unit' => 60,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 8,
            'rating' => 4.8,
        ]);

        $produce = Produce::create([
            'farmer_id' => 53,
            'name' => "Honey (North Christoph)",
            'description' => "Premium quality honey fresh from our farm.",
            'markdown_description' => <<<MD
## Honey

Our honey from North Christoph is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of honey with care and passion. You can taste the difference in every bite."_
— *Dr. Eliza Murazik MD*

MD,
            'price_per_unit' => 300,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 10,
            'rating' => 4.9,
        ]);

        $produce = Produce::create([
            'farmer_id' => 53,
            'name' => "Zucchini (North Christoph)",
            'description' => "Premium quality zucchini fresh from our farm.",
            'markdown_description' => <<<MD
## Zucchini

Our zucchini from North Christoph is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of zucchini with care and passion. You can taste the difference in every bite."_
— *Dr. Eliza Murazik MD*

MD,
            'price_per_unit' => 102,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 4,
            'rating' => 4.9,
        ]);

        $produce = Produce::create([
            'farmer_id' => 53,
            'name' => "Ginger (North Christoph)",
            'description' => "Premium quality ginger fresh from our farm.",
            'markdown_description' => <<<MD
## Ginger

Our ginger from North Christoph is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of ginger with care and passion. You can taste the difference in every bite."_
— *Dr. Eliza Murazik MD*

MD,
            'price_per_unit' => 170,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 7,
            'rating' => 4.7,
        ]);

        $produce = Produce::create([
            'farmer_id' => 53,
            'name' => "Sorghum (North Christoph)",
            'description' => "Premium quality sorghum fresh from our farm.",
            'markdown_description' => <<<MD
## Sorghum

Our sorghum from North Christoph is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of sorghum with care and passion. You can taste the difference in every bite."_
— *Dr. Eliza Murazik MD*

MD,
            'price_per_unit' => 98,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 10,
            'rating' => 4.9,
        ]);

        $produce = Produce::create([
            'farmer_id' => 53,
            'name' => "Lima Beans (North Christoph)",
            'description' => "Premium quality lima beans fresh from our farm.",
            'markdown_description' => <<<MD
## Lima Beans

Our lima beans from North Christoph is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of lima beans with care and passion. You can taste the difference in every bite."_
— *Dr. Eliza Murazik MD*

MD,
            'price_per_unit' => 93,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 9,
            'rating' => 4.8,
        ]);

        $produce = Produce::create([
            'farmer_id' => 53,
            'name' => "Coriander (North Christoph)",
            'description' => "Premium quality coriander fresh from our farm.",
            'markdown_description' => <<<MD
## Coriander

Our coriander from North Christoph is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of coriander with care and passion. You can taste the difference in every bite."_
— *Dr. Eliza Murazik MD*

MD,
            'price_per_unit' => 59,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 9,
            'rating' => 4.8,
        ]);

        $produce = Produce::create([
            'farmer_id' => 53,
            'name' => "Sunflower Seeds (North Christoph)",
            'description' => "Premium quality sunflower seeds fresh from our farm.",
            'markdown_description' => <<<MD
## Sunflower Seeds

Our sunflower seeds from North Christoph is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of sunflower seeds with care and passion. You can taste the difference in every bite."_
— *Dr. Eliza Murazik MD*

MD,
            'price_per_unit' => 135,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 5,
            'rating' => 4.7,
        ]);

        $produce = Produce::create([
            'farmer_id' => 53,
            'name' => "Bananas (North Christoph)",
            'description' => "Premium quality bananas fresh from our farm.",
            'markdown_description' => <<<MD
## Bananas

Our bananas from North Christoph is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of bananas with care and passion. You can taste the difference in every bite."_
— *Dr. Eliza Murazik MD*

MD,
            'price_per_unit' => 50,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 12,
            'rating' => 4.4,
        ]);

        $produce = Produce::create([
            'farmer_id' => 53,
            'name' => "Garlic (North Christoph)",
            'description' => "Premium quality garlic fresh from our farm.",
            'markdown_description' => <<<MD
## Garlic

Our garlic from North Christoph is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of garlic with care and passion. You can taste the difference in every bite."_
— *Dr. Eliza Murazik MD*

MD,
            'price_per_unit' => 150,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 8,
            'rating' => 4.2,
        ]);

        $produce = Produce::create([
            'farmer_id' => 53,
            'name' => "Passion Fruits (North Christoph)",
            'description' => "Premium quality passion fruits fresh from our farm.",
            'markdown_description' => <<<MD
## Passion Fruits

Our passion fruits from North Christoph is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of passion fruits with care and passion. You can taste the difference in every bite."_
— *Dr. Eliza Murazik MD*

MD,
            'price_per_unit' => 115,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 1,
            'rating' => 4.6,
        ]);

        $produce = Produce::create([
            'farmer_id' => 53,
            'name' => "Cauliflower (North Christoph)",
            'description' => "Premium quality cauliflower fresh from our farm.",
            'markdown_description' => <<<MD
## Cauliflower

Our cauliflower from North Christoph is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of cauliflower with care and passion. You can taste the difference in every bite."_
— *Dr. Eliza Murazik MD*

MD,
            'price_per_unit' => 104,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 2,
            'rating' => 4.9,
        ]);

        $produce = Produce::create([
            'farmer_id' => 53,
            'name' => "Goat Meat (North Christoph)",
            'description' => "Premium quality goat meat fresh from our farm.",
            'markdown_description' => <<<MD
## Goat Meat

Our goat meat from North Christoph is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of goat meat with care and passion. You can taste the difference in every bite."_
— *Dr. Eliza Murazik MD*

MD,
            'price_per_unit' => 400,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 4,
            'rating' => 4.8,
        ]);

        $produce = Produce::create([
            'farmer_id' => 53,
            'name' => "Tamarind (North Christoph)",
            'description' => "Premium quality tamarind fresh from our farm.",
            'markdown_description' => <<<MD
## Tamarind

Our tamarind from North Christoph is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of tamarind with care and passion. You can taste the difference in every bite."_
— *Dr. Eliza Murazik MD*

MD,
            'price_per_unit' => 83,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 2,
            'rating' => 4.5,
        ]);

        $produce = Produce::create([
            'farmer_id' => 52,
            'name' => "Lemongrass (New London)",
            'description' => "Premium quality lemongrass fresh from our farm.",
            'markdown_description' => <<<MD
## Lemongrass

Our lemongrass from New London is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of lemongrass with care and passion. You can taste the difference in every bite."_
— *Mr. Rodrigo Senger IV*

MD,
            'price_per_unit' => 89,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 12,
            'rating' => 4.6,
        ]);

        $produce = Produce::create([
            'farmer_id' => 52,
            'name' => "Spinach (New London)",
            'description' => "Premium quality spinach fresh from our farm.",
            'markdown_description' => <<<MD
## Spinach

Our spinach from New London is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of spinach with care and passion. You can taste the difference in every bite."_
— *Mr. Rodrigo Senger IV*

MD,
            'price_per_unit' => 80,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 1,
            'rating' => 4.3,
        ]);

        $produce = Produce::create([
            'farmer_id' => 52,
            'name' => "Groundnuts (New London)",
            'description' => "Premium quality groundnuts fresh from our farm.",
            'markdown_description' => <<<MD
## Groundnuts

Our groundnuts from New London is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of groundnuts with care and passion. You can taste the difference in every bite."_
— *Mr. Rodrigo Senger IV*

MD,
            'price_per_unit' => 100,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 10,
            'rating' => 4.9,
        ]);

        $produce = Produce::create([
            'farmer_id' => 52,
            'name' => "Mulberries (New London)",
            'description' => "Premium quality mulberries fresh from our farm.",
            'markdown_description' => <<<MD
## Mulberries

Our mulberries from New London is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of mulberries with care and passion. You can taste the difference in every bite."_
— *Mr. Rodrigo Senger IV*

MD,
            'price_per_unit' => 145,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 3,
            'rating' => 4.4,
        ]);

        $produce = Produce::create([
            'farmer_id' => 52,
            'name' => "Coconut Oil (New London)",
            'description' => "Premium quality coconut oil fresh from our farm.",
            'markdown_description' => <<<MD
## Coconut Oil

Our coconut oil from New London is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of coconut oil with care and passion. You can taste the difference in every bite."_
— *Mr. Rodrigo Senger IV*

MD,
            'price_per_unit' => 310,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 6,
            'rating' => 4.7,
        ]);

        $produce = Produce::create([
            'farmer_id' => 52,
            'name' => "Raspberries (New London)",
            'description' => "Premium quality raspberries fresh from our farm.",
            'markdown_description' => <<<MD
## Raspberries

Our raspberries from New London is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of raspberries with care and passion. You can taste the difference in every bite."_
— *Mr. Rodrigo Senger IV*

MD,
            'price_per_unit' => 185,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 12,
            'rating' => 4.2,
        ]);

        $produce = Produce::create([
            'farmer_id' => 52,
            'name' => "Raw Macadamia (New London)",
            'description' => "Premium quality raw macadamia fresh from our farm.",
            'markdown_description' => <<<MD
## Raw Macadamia

Our raw macadamia from New London is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of raw macadamia with care and passion. You can taste the difference in every bite."_
— *Mr. Rodrigo Senger IV*

MD,
            'price_per_unit' => 280,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 15,
            'rating' => 4.2,
        ]);

        $produce = Produce::create([
            'farmer_id' => 52,
            'name' => "Herbal Tea Mix (New London)",
            'description' => "Premium quality herbal tea mix fresh from our farm.",
            'markdown_description' => <<<MD
## Herbal Tea Mix

Our herbal tea mix from New London is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of herbal tea mix with care and passion. You can taste the difference in every bite."_
— *Mr. Rodrigo Senger IV*

MD,
            'price_per_unit' => 250,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 2,
            'rating' => 4.1,
        ]);

        $produce = Produce::create([
            'farmer_id' => 52,
            'name' => "Pumpkin (New London)",
            'description' => "Premium quality pumpkin fresh from our farm.",
            'markdown_description' => <<<MD
## Pumpkin

Our pumpkin from New London is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of pumpkin with care and passion. You can taste the difference in every bite."_
— *Mr. Rodrigo Senger IV*

MD,
            'price_per_unit' => 108,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 8,
            'rating' => 4.5,
        ]);

        $produce = Produce::create([
            'farmer_id' => 52,
            'name' => "Lettuce (New London)",
            'description' => "Premium quality lettuce fresh from our farm.",
            'markdown_description' => <<<MD
## Lettuce

Our lettuce from New London is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of lettuce with care and passion. You can taste the difference in every bite."_
— *Mr. Rodrigo Senger IV*

MD,
            'price_per_unit' => 88,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 11,
            'rating' => 4.4,
        ]);

        $produce = Produce::create([
            'farmer_id' => 52,
            'name' => "Avocados (New London)",
            'description' => "Premium quality avocados fresh from our farm.",
            'markdown_description' => <<<MD
## Avocados

Our avocados from New London is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of avocados with care and passion. You can taste the difference in every bite."_
— *Mr. Rodrigo Senger IV*

MD,
            'price_per_unit' => 130,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 4,
            'rating' => 4.4,
        ]);

        $produce = Produce::create([
            'farmer_id' => 52,
            'name' => "Limes (New London)",
            'description' => "Premium quality limes fresh from our farm.",
            'markdown_description' => <<<MD
## Limes

Our limes from New London is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of limes with care and passion. You can taste the difference in every bite."_
— *Mr. Rodrigo Senger IV*

MD,
            'price_per_unit' => 99,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 4,
            'rating' => 4.6,
        ]);

        $produce = Produce::create([
            'farmer_id' => 52,
            'name' => "Arrowroots (New London)",
            'description' => "Premium quality arrowroots fresh from our farm.",
            'markdown_description' => <<<MD
## Arrowroots

Our arrowroots from New London is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of arrowroots with care and passion. You can taste the difference in every bite."_
— *Mr. Rodrigo Senger IV*

MD,
            'price_per_unit' => 70,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 4,
            'rating' => 4.7,
        ]);

        $produce = Produce::create([
            'farmer_id' => 52,
            'name' => "Black Beans (New London)",
            'description' => "Premium quality black beans fresh from our farm.",
            'markdown_description' => <<<MD
## Black Beans

Our black beans from New London is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of black beans with care and passion. You can taste the difference in every bite."_
— *Mr. Rodrigo Senger IV*

MD,
            'price_per_unit' => 90,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 6,
            'rating' => 4.1,
        ]);

        $produce = Produce::create([
            'farmer_id' => 52,
            'name' => "Pineapples (New London)",
            'description' => "Premium quality pineapples fresh from our farm.",
            'markdown_description' => <<<MD
## Pineapples

Our pineapples from New London is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of pineapples with care and passion. You can taste the difference in every bite."_
— *Mr. Rodrigo Senger IV*

MD,
            'price_per_unit' => 140,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 9,
            'rating' => 4.1,
        ]);

        $produce = Produce::create([
            'farmer_id' => 54,
            'name' => "Ugali Flour (Langport)",
            'description' => "Premium quality ugali flour fresh from our farm.",
            'markdown_description' => <<<MD
## Ugali Flour

Our ugali flour from Langport is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of ugali flour with care and passion. You can taste the difference in every bite."_
— *Ernesto Koss*

MD,
            'price_per_unit' => 120,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 5,
            'rating' => 4.4,
        ]);

        $produce = Produce::create([
            'farmer_id' => 54,
            'name' => "Broccoli (Langport)",
            'description' => "Premium quality broccoli fresh from our farm.",
            'markdown_description' => <<<MD
## Broccoli

Our broccoli from Langport is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of broccoli with care and passion. You can taste the difference in every bite."_
— *Ernesto Koss*

MD,
            'price_per_unit' => 106,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 3,
            'rating' => 4.7,
        ]);

        $produce = Produce::create([
            'farmer_id' => 54,
            'name' => "Carrots (Langport)",
            'description' => "Premium quality carrots fresh from our farm.",
            'markdown_description' => <<<MD
## Carrots

Our carrots from Langport is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of carrots with care and passion. You can taste the difference in every bite."_
— *Ernesto Koss*

MD,
            'price_per_unit' => 68,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 13,
            'rating' => 4.1,
        ]);

        $produce = Produce::create([
            'farmer_id' => 54,
            'name' => "Mangoes (Langport)",
            'description' => "Premium quality mangoes fresh from our farm.",
            'markdown_description' => <<<MD
## Mangoes

Our mangoes from Langport is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of mangoes with care and passion. You can taste the difference in every bite."_
— *Ernesto Koss*

MD,
            'price_per_unit' => 110,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 8,
            'rating' => 4.8,
        ]);

        $produce = Produce::create([
            'farmer_id' => 54,
            'name' => "Green Bell Pepper (Langport)",
            'description' => "Premium quality green bell pepper fresh from our farm.",
            'markdown_description' => <<<MD
## Green Bell Pepper

Our green bell pepper from Langport is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of green bell pepper with care and passion. You can taste the difference in every bite."_
— *Ernesto Koss*

MD,
            'price_per_unit' => 73,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 15,
            'rating' => 4.5,
        ]);

        $produce = Produce::create([
            'farmer_id' => 54,
            'name' => "Beetroot (Langport)",
            'description' => "Premium quality beetroot fresh from our farm.",
            'markdown_description' => <<<MD
## Beetroot

Our beetroot from Langport is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of beetroot with care and passion. You can taste the difference in every bite."_
— *Ernesto Koss*

MD,
            'price_per_unit' => 92,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 15,
            'rating' => 4.3,
        ]);

        $produce = Produce::create([
            'farmer_id' => 54,
            'name' => "Organic Fertilizer (Langport)",
            'description' => "Premium quality organic fertilizer fresh from our farm.",
            'markdown_description' => <<<MD
## Organic Fertilizer

Our organic fertilizer from Langport is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of organic fertilizer with care and passion. You can taste the difference in every bite."_
— *Ernesto Koss*

MD,
            'price_per_unit' => 200,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 9,
            'rating' => 4.2,
        ]);

        $produce = Produce::create([
            'farmer_id' => 54,
            'name' => "Chili Peppers (Langport)",
            'description' => "Premium quality chili peppers fresh from our farm.",
            'markdown_description' => <<<MD
## Chili Peppers

Our chili peppers from Langport is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of chili peppers with care and passion. You can taste the difference in every bite."_
— *Ernesto Koss*

MD,
            'price_per_unit' => 123,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 12,
            'rating' => 4.7,
        ]);

        $produce = Produce::create([
            'farmer_id' => 54,
            'name' => "Onions (Langport)",
            'description' => "Premium quality onions fresh from our farm.",
            'markdown_description' => <<<MD
## Onions

Our onions from Langport is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of onions with care and passion. You can taste the difference in every bite."_
— *Ernesto Koss*

MD,
            'price_per_unit' => 66,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 9,
            'rating' => 4.4,
        ]);

        $produce = Produce::create([
            'farmer_id' => 54,
            'name' => "Strawberries (Langport)",
            'description' => "Premium quality strawberries fresh from our farm.",
            'markdown_description' => <<<MD
## Strawberries

Our strawberries from Langport is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of strawberries with care and passion. You can taste the difference in every bite."_
— *Ernesto Koss*

MD,
            'price_per_unit' => 180,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 13,
            'rating' => 4.5,
        ]);

        $produce = Produce::create([
            'farmer_id' => 54,
            'name' => "Kale (Langport)",
            'description' => "Premium quality kale fresh from our farm.",
            'markdown_description' => <<<MD
## Kale

Our kale from Langport is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of kale with care and passion. You can taste the difference in every bite."_
— *Ernesto Koss*

MD,
            'price_per_unit' => 76,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 11,
            'rating' => 4.9,
        ]);

        $produce = Produce::create([
            'farmer_id' => 54,
            'name' => "Yoghurt (Plain) (Langport)",
            'description' => "Premium quality yoghurt (plain) fresh from our farm.",
            'markdown_description' => <<<MD
## Yoghurt (Plain)

Our yoghurt (plain) from Langport is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of yoghurt (plain) with care and passion. You can taste the difference in every bite."_
— *Ernesto Koss*

MD,
            'price_per_unit' => 160,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 3,
            'rating' => 4.8,
        ]);

        $produce = Produce::create([
            'farmer_id' => 54,
            'name' => "Pumpkin Leaves (Langport)",
            'description' => "Premium quality pumpkin leaves fresh from our farm.",
            'markdown_description' => <<<MD
## Pumpkin Leaves

Our pumpkin leaves from Langport is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of pumpkin leaves with care and passion. You can taste the difference in every bite."_
— *Ernesto Koss*

MD,
            'price_per_unit' => 65,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 10,
            'rating' => 4.6,
        ]);

        $produce = Produce::create([
            'farmer_id' => 54,
            'name' => "Cucumber (Langport)",
            'description' => "Premium quality cucumber fresh from our farm.",
            'markdown_description' => <<<MD
## Cucumber

Our cucumber from Langport is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of cucumber with care and passion. You can taste the difference in every bite."_
— *Ernesto Koss*

MD,
            'price_per_unit' => 97,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 8,
            'rating' => 4.1,
        ]);

        $produce = Produce::create([
            'farmer_id' => 54,
            'name' => "Chicken Eggs (Langport)",
            'description' => "Premium quality chicken eggs fresh from our farm.",
            'markdown_description' => <<<MD
## Chicken Eggs

Our chicken eggs from Langport is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of chicken eggs with care and passion. You can taste the difference in every bite."_
— *Ernesto Koss*

MD,
            'price_per_unit' => 175,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 2,
            'rating' => 4.5,
        ]);

        $produce = Produce::create([
            'farmer_id' => 55,
            'name' => "Sugarcane (Port Mathildeview)",
            'description' => "Premium quality sugarcane fresh from our farm.",
            'markdown_description' => <<<MD
## Sugarcane

Our sugarcane from Port Mathildeview is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of sugarcane with care and passion. You can taste the difference in every bite."_
— *Margie Leuschke*

MD,
            'price_per_unit' => 40,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 1,
            'rating' => 4.8,
        ]);

        $produce = Produce::create([
            'farmer_id' => 55,
            'name' => "Cabbages (Port Mathildeview)",
            'description' => "Premium quality cabbages fresh from our farm.",
            'markdown_description' => <<<MD
## Cabbages

Our cabbages from Port Mathildeview is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of cabbages with care and passion. You can taste the difference in every bite."_
— *Margie Leuschke*

MD,
            'price_per_unit' => 45,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 2,
            'rating' => 4.7,
        ]);

        $produce = Produce::create([
            'farmer_id' => 55,
            'name' => "Cassava (Port Mathildeview)",
            'description' => "Premium quality cassava fresh from our farm.",
            'markdown_description' => <<<MD
## Cassava

Our cassava from Port Mathildeview is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of cassava with care and passion. You can taste the difference in every bite."_
— *Margie Leuschke*

MD,
            'price_per_unit' => 85,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 3,
            'rating' => 4.3,
        ]);

        $produce = Produce::create([
            'farmer_id' => 55,
            'name' => "Managu (Port Mathildeview)",
            'description' => "Premium quality managu fresh from our farm.",
            'markdown_description' => <<<MD
## Managu

Our managu from Port Mathildeview is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of managu with care and passion. You can taste the difference in every bite."_
— *Margie Leuschke*

MD,
            'price_per_unit' => 55,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 10,
            'rating' => 4.1,
        ]);

        $produce = Produce::create([
            'farmer_id' => 55,
            'name' => "Papayas (Port Mathildeview)",
            'description' => "Premium quality papayas fresh from our farm.",
            'markdown_description' => <<<MD
## Papayas

Our papayas from Port Mathildeview is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of papayas with care and passion. You can taste the difference in every bite."_
— *Margie Leuschke*

MD,
            'price_per_unit' => 124,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 5,
            'rating' => 4.7,
        ]);

        $produce = Produce::create([
            'farmer_id' => 55,
            'name' => "Green Grams (Port Mathildeview)",
            'description' => "Premium quality green grams fresh from our farm.",
            'markdown_description' => <<<MD
## Green Grams

Our green grams from Port Mathildeview is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of green grams with care and passion. You can taste the difference in every bite."_
— *Margie Leuschke*

MD,
            'price_per_unit' => 95,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 3,
            'rating' => 4.7,
        ]);

        $produce = Produce::create([
            'farmer_id' => 55,
            'name' => "Tilapia (Port Mathildeview)",
            'description' => "Premium quality tilapia fresh from our farm.",
            'markdown_description' => <<<MD
## Tilapia

Our tilapia from Port Mathildeview is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of tilapia with care and passion. You can taste the difference in every bite."_
— *Margie Leuschke*

MD,
            'price_per_unit' => 250,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 5,
            'rating' => 4.4,
        ]);

        $produce = Produce::create([
            'farmer_id' => 55,
            'name' => "Millet Flour (Port Mathildeview)",
            'description' => "Premium quality millet flour fresh from our farm.",
            'markdown_description' => <<<MD
## Millet Flour

Our millet flour from Port Mathildeview is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of millet flour with care and passion. You can taste the difference in every bite."_
— *Margie Leuschke*

MD,
            'price_per_unit' => 105,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 14,
            'rating' => 4.2,
        ]);

        $produce = Produce::create([
            'farmer_id' => 55,
            'name' => "Red Cabbage (Port Mathildeview)",
            'description' => "Premium quality red cabbage fresh from our farm.",
            'markdown_description' => <<<MD
## Red Cabbage

Our red cabbage from Port Mathildeview is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of red cabbage with care and passion. You can taste the difference in every bite."_
— *Margie Leuschke*

MD,
            'price_per_unit' => 79,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 6,
            'rating' => 4.1,
        ]);

        $produce = Produce::create([
            'farmer_id' => 55,
            'name' => "Sweet Potatoes (Port Mathildeview)",
            'description' => "Premium quality sweet potatoes fresh from our farm.",
            'markdown_description' => <<<MD
## Sweet Potatoes

Our sweet potatoes from Port Mathildeview is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of sweet potatoes with care and passion. You can taste the difference in every bite."_
— *Margie Leuschke*

MD,
            'price_per_unit' => 75,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 4,
            'rating' => 5.0,
        ]);

        $produce = Produce::create([
            'farmer_id' => 55,
            'name' => "Peas (Port Mathildeview)",
            'description' => "Premium quality peas fresh from our farm.",
            'markdown_description' => <<<MD
## Peas

Our peas from Port Mathildeview is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of peas with care and passion. You can taste the difference in every bite."_
— *Margie Leuschke*

MD,
            'price_per_unit' => 87,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 7,
            'rating' => 4.7,
        ]);

        $produce = Produce::create([
            'farmer_id' => 55,
            'name' => "Rabbit Meat (Port Mathildeview)",
            'description' => "Premium quality rabbit meat fresh from our farm.",
            'markdown_description' => <<<MD
## Rabbit Meat

Our rabbit meat from Port Mathildeview is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of rabbit meat with care and passion. You can taste the difference in every bite."_
— *Margie Leuschke*

MD,
            'price_per_unit' => 420,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 14,
            'rating' => 4.7,
        ]);

        $produce = Produce::create([
            'farmer_id' => 55,
            'name' => "Cow Milk (Port Mathildeview)",
            'description' => "Premium quality cow milk fresh from our farm.",
            'markdown_description' => <<<MD
## Cow Milk

Our cow milk from Port Mathildeview is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of cow milk with care and passion. You can taste the difference in every bite."_
— *Margie Leuschke*

MD,
            'price_per_unit' => 90,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 4,
            'rating' => 4.7,
        ]);

        $produce = Produce::create([
            'farmer_id' => 55,
            'name' => "Dates (Port Mathildeview)",
            'description' => "Premium quality dates fresh from our farm.",
            'markdown_description' => <<<MD
## Dates

Our dates from Port Mathildeview is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of dates with care and passion. You can taste the difference in every bite."_
— *Margie Leuschke*

MD,
            'price_per_unit' => 190,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 4,
            'rating' => 4.1,
        ]);

        $produce = Produce::create([
            'farmer_id' => 55,
            'name' => "Watermelons (Port Mathildeview)",
            'description' => "Premium quality watermelons fresh from our farm.",
            'markdown_description' => <<<MD
## Watermelons

Our watermelons from Port Mathildeview is cultivated using sustainable farming practices. It is known for its exceptional quality, freshness, and nutrient density.

---

### 🌿 Product Highlights

- Carefully grown and harvested by experienced farmers
- Free from synthetic pesticides and GMOs
- Handpicked at peak ripeness for maximum flavor and nutrition
- Packed and delivered promptly to preserve freshness

---

### 🧊 Storage & Usage

Keep refrigerated to maintain freshness. Best used within a week of delivery. Perfect for salads, cooking, or juicing, depending on the item.

---

### 👩‍🌾 Farmer's Note

_"We grow every batch of watermelons with care and passion. You can taste the difference in every bite."_
— *Margie Leuschke*

MD,
            'price_per_unit' => 132,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 8,
            'rating' => 4.2,
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/1/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/2/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/3/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/4/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/5/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/6/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/7/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/8/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/9/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/10/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/11/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/12/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/13/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/14/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/15/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/16/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/17/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/18/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/19/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/20/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/21/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/22/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/23/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/24/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/25/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/26/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/27/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/28/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/29/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/30/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/31/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/32/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/33/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/34/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/35/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/36/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/37/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/38/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/39/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/40/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/41/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/42/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/43/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/44/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/45/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/46/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/47/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/48/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/49/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/50/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/51/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/52/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/53/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/54/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/55/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/56/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/57/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/58/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/59/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/60/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/61/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/62/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/63/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/64/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/65/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/66/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/67/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/68/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/69/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/70/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/71/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/72/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/73/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/74/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/75/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/76/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/77/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/78/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/79/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/80/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/81/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/82/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/83/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/84/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/85/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/86/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/87/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/88/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/89/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/90/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/91/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/92/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/93/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/94/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/95/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/96/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/97/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/98/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/99/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/100/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/101/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/102/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/103/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/104/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/105/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/106/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/107/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/108/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/109/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/110/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/111/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/112/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/113/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/114/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/115/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/116/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/117/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/118/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/119/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/120/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/121/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/122/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/123/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/124/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/125/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/126/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/127/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/128/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/129/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/130/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/131/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/132/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/133/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/134/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/135/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/136/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/137/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/138/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/139/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/140/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/141/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/142/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/143/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/144/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/145/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/146/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/147/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/148/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/149/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/150/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/151/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/152/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/153/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/154/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/155/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/156/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/157/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/158/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/159/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/160/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/161/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/162/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/163/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/164/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/165/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/166/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/167/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/168/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/169/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/170/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/171/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/172/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/173/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/174/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/175/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/176/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/177/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/178/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/179/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/180/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/181/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/182/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/183/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/184/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/185/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/186/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/187/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/188/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/189/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/190/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/191/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/192/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/193/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/194/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/195/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/196/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/197/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/198/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/199/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/200/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/201/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/202/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/203/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/204/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/205/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/206/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/207/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/208/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/209/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/210/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/211/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/212/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/213/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/214/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/215/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/216/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/217/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/218/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/219/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/220/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/221/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/222/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/223/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/224/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/225/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/226/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/227/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/228/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/229/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/230/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/231/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/232/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/233/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/234/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/235/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/236/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/237/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/238/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/239/600/400",
        ]);

        \App\Models\ProduceImage\ProduceImage::create([
            'produce_id' => $produce->id,
            'url' => "https://picsum.photos/seed/240/600/400",
        ]);
    }
}
