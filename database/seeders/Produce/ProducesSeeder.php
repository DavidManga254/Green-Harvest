<?php

namespace Database\Seeders\Produce;

use App\Models\Produce\Produce;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProducesSeeder extends Seeder
{
    public function run(): void
    {
        Produce::create([
            'farmer_id' => 53,
            'name' => "Fresh Organic Spinach",
            'description' => "Increase positive guy.",
            'markdown_description' => <<<MD
## Fresh Organic Spinach

Grown in the fertile regions of North Christoph, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Dr. Eliza Murazik MD*

---

![Product Image](https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 80,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 1,
            'rating' => 4.7,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 53,
            'name' => "Sweet Bananas",
            'description' => "Race bed poor kitchen think price total.",
            'markdown_description' => <<<MD
## Sweet Bananas

Grown in the fertile regions of North Christoph, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Dr. Eliza Murazik MD*

---

![Product Image](https://images.unsplash.com/photo-1582281298057-5e56f6f4f780?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 50,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 2,
            'rating' => 4.1,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 53,
            'name' => "Maize Flour (Ugali)",
            'description' => "Music side whatever arrive north end.",
            'markdown_description' => <<<MD
## Maize Flour (Ugali)

Grown in the fertile regions of North Christoph, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Dr. Eliza Murazik MD*

---

![Product Image](https://images.unsplash.com/photo-1579881518074-9e7ac2a46f5a?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 120,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 3,
            'rating' => 4.9,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 53,
            'name' => "Cow Milk (Raw)",
            'description' => "Painting experience race oil hospital anything student.",
            'markdown_description' => <<<MD
## Cow Milk (Raw)

Grown in the fertile regions of North Christoph, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Dr. Eliza Murazik MD*

---

![Product Image](https://images.unsplash.com/photo-1580910051070-040dd17f13d3?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 90,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 4,
            'rating' => 4.6,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 53,
            'name' => "Tilapia (Freshwater)",
            'description' => "World risk part position serve often south.",
            'markdown_description' => <<<MD
## Tilapia (Freshwater)

Grown in the fertile regions of North Christoph, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Dr. Eliza Murazik MD*

---

![Product Image](https://images.unsplash.com/photo-1604908177524-472dfb5fe1f3?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 250,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 5,
            'rating' => 4.3,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 53,
            'name' => "Arrowroots",
            'description' => "Put media note player.",
            'markdown_description' => <<<MD
## Arrowroots

Grown in the fertile regions of North Christoph, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Dr. Eliza Murazik MD*

---

![Product Image](https://images.unsplash.com/photo-1625947506332-98dbee73cb92?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 70,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 6,
            'rating' => 4.9,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 53,
            'name' => "Tomatoes (Roma)",
            'description' => "Process partner reach fund Congress interesting citizen.",
            'markdown_description' => <<<MD
## Tomatoes (Roma)

Grown in the fertile regions of North Christoph, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Dr. Eliza Murazik MD*

---

![Product Image](https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 60,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 7,
            'rating' => 4.8,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 53,
            'name' => "Groundnuts",
            'description' => "Once indicate day learn information have.",
            'markdown_description' => <<<MD
## Groundnuts

Grown in the fertile regions of North Christoph, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Dr. Eliza Murazik MD*

---

![Product Image](https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 100,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 8,
            'rating' => 4.0,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 53,
            'name' => "Cabbages",
            'description' => "Light guess maybe model authority entire.",
            'markdown_description' => <<<MD
## Cabbages

Grown in the fertile regions of North Christoph, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Dr. Eliza Murazik MD*

---

![Product Image](https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 45,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 9,
            'rating' => 4.6,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 53,
            'name' => "Avocados (Hass)",
            'description' => "Draw water treat commercial artist drug.",
            'markdown_description' => <<<MD
## Avocados (Hass)

Grown in the fertile regions of North Christoph, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Dr. Eliza Murazik MD*

---

![Product Image](https://images.unsplash.com/photo-1576402187873-622f942d08fc?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 130,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 10,
            'rating' => 4.8,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 53,
            'name' => "Honey (Raw Organic)",
            'description' => "Price around at great hear start own.",
            'markdown_description' => <<<MD
## Honey (Raw Organic)

Grown in the fertile regions of North Christoph, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Dr. Eliza Murazik MD*

---

![Product Image](https://images.unsplash.com/photo-1590080876350-1d0430f98fda?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 300,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 11,
            'rating' => 4.6,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 53,
            'name' => "Managu",
            'description' => "Physical someone on ahead body crime.",
            'markdown_description' => <<<MD
## Managu

Grown in the fertile regions of North Christoph, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Dr. Eliza Murazik MD*

---

![Product Image](https://images.unsplash.com/photo-1593866331959-60c330c4a3c5?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 55,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 12,
            'rating' => 4.4,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 53,
            'name' => "Pumpkin Leaves",
            'description' => "Around different itself.",
            'markdown_description' => <<<MD
## Pumpkin Leaves

Grown in the fertile regions of North Christoph, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Dr. Eliza Murazik MD*

---

![Product Image](https://images.unsplash.com/photo-1642667448971-9600cc97c7c7?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 65,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 13,
            'rating' => 5.0,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 53,
            'name' => "Free Range Eggs",
            'description' => "True effect state purpose office.",
            'markdown_description' => <<<MD
## Free Range Eggs

Grown in the fertile regions of North Christoph, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Dr. Eliza Murazik MD*

---

![Product Image](https://images.unsplash.com/photo-1582810828343-1e4f76c5fd5a?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 180,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 14,
            'rating' => 4.1,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 53,
            'name' => "Organic Fertilizer (Compost)",
            'description' => "Note different nothing.",
            'markdown_description' => <<<MD
## Organic Fertilizer (Compost)

Grown in the fertile regions of North Christoph, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Dr. Eliza Murazik MD*

---

![Product Image](https://images.unsplash.com/photo-1603570411772-cd62a966b30e?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 200,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 15,
            'rating' => 4.9,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 52,
            'name' => "Fresh Organic Spinach",
            'description' => "Business population page purpose about unit treatment.",
            'markdown_description' => <<<MD
## Fresh Organic Spinach

Grown in the fertile regions of New London, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Mr. Rodrigo Senger IV*

---

![Product Image](https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 80,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 1,
            'rating' => 4.1,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 52,
            'name' => "Sweet Bananas",
            'description' => "Quite suddenly boy message poor month cover.",
            'markdown_description' => <<<MD
## Sweet Bananas

Grown in the fertile regions of New London, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Mr. Rodrigo Senger IV*

---

![Product Image](https://images.unsplash.com/photo-1582281298057-5e56f6f4f780?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 50,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 2,
            'rating' => 4.1,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 52,
            'name' => "Maize Flour (Ugali)",
            'description' => "History onto owner accept require.",
            'markdown_description' => <<<MD
## Maize Flour (Ugali)

Grown in the fertile regions of New London, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Mr. Rodrigo Senger IV*

---

![Product Image](https://images.unsplash.com/photo-1579881518074-9e7ac2a46f5a?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 120,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 3,
            'rating' => 4.2,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 52,
            'name' => "Cow Milk (Raw)",
            'description' => "Movie vote more develop contain talk.",
            'markdown_description' => <<<MD
## Cow Milk (Raw)

Grown in the fertile regions of New London, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Mr. Rodrigo Senger IV*

---

![Product Image](https://images.unsplash.com/photo-1580910051070-040dd17f13d3?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 90,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 4,
            'rating' => 4.3,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 52,
            'name' => "Tilapia (Freshwater)",
            'description' => "Share unit wind interest.",
            'markdown_description' => <<<MD
## Tilapia (Freshwater)

Grown in the fertile regions of New London, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Mr. Rodrigo Senger IV*

---

![Product Image](https://images.unsplash.com/photo-1604908177524-472dfb5fe1f3?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 250,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 5,
            'rating' => 4.9,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 52,
            'name' => "Arrowroots",
            'description' => "Size they paper.",
            'markdown_description' => <<<MD
## Arrowroots

Grown in the fertile regions of New London, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Mr. Rodrigo Senger IV*

---

![Product Image](https://images.unsplash.com/photo-1625947506332-98dbee73cb92?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 70,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 6,
            'rating' => 4.6,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 52,
            'name' => "Tomatoes (Roma)",
            'description' => "Social east lawyer American local born.",
            'markdown_description' => <<<MD
## Tomatoes (Roma)

Grown in the fertile regions of New London, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Mr. Rodrigo Senger IV*

---

![Product Image](https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 60,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 7,
            'rating' => 4.3,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 52,
            'name' => "Groundnuts",
            'description' => "Within plant or still.",
            'markdown_description' => <<<MD
## Groundnuts

Grown in the fertile regions of New London, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Mr. Rodrigo Senger IV*

---

![Product Image](https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 100,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 8,
            'rating' => 4.5,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 52,
            'name' => "Cabbages",
            'description' => "Whether operation tonight fall seek may.",
            'markdown_description' => <<<MD
## Cabbages

Grown in the fertile regions of New London, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Mr. Rodrigo Senger IV*

---

![Product Image](https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 45,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 9,
            'rating' => 4.2,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 52,
            'name' => "Avocados (Hass)",
            'description' => "Wall floor remember how particular.",
            'markdown_description' => <<<MD
## Avocados (Hass)

Grown in the fertile regions of New London, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Mr. Rodrigo Senger IV*

---

![Product Image](https://images.unsplash.com/photo-1576402187873-622f942d08fc?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 130,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 10,
            'rating' => 4.9,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 52,
            'name' => "Honey (Raw Organic)",
            'description' => "Sometimes pattern happy sometimes large.",
            'markdown_description' => <<<MD
## Honey (Raw Organic)

Grown in the fertile regions of New London, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Mr. Rodrigo Senger IV*

---

![Product Image](https://images.unsplash.com/photo-1590080876350-1d0430f98fda?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 300,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 11,
            'rating' => 4.4,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 52,
            'name' => "Managu",
            'description' => "Today recent strategy skin.",
            'markdown_description' => <<<MD
## Managu

Grown in the fertile regions of New London, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Mr. Rodrigo Senger IV*

---

![Product Image](https://images.unsplash.com/photo-1593866331959-60c330c4a3c5?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 55,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 12,
            'rating' => 4.4,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 52,
            'name' => "Pumpkin Leaves",
            'description' => "Kid live nearly as just.",
            'markdown_description' => <<<MD
## Pumpkin Leaves

Grown in the fertile regions of New London, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Mr. Rodrigo Senger IV*

---

![Product Image](https://images.unsplash.com/photo-1642667448971-9600cc97c7c7?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 65,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 13,
            'rating' => 4.0,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 52,
            'name' => "Free Range Eggs",
            'description' => "Special ago only night ability step occur school.",
            'markdown_description' => <<<MD
## Free Range Eggs

Grown in the fertile regions of New London, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Mr. Rodrigo Senger IV*

---

![Product Image](https://images.unsplash.com/photo-1582810828343-1e4f76c5fd5a?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 180,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 14,
            'rating' => 4.6,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 52,
            'name' => "Organic Fertilizer (Compost)",
            'description' => "Member occur relationship wonder area.",
            'markdown_description' => <<<MD
## Organic Fertilizer (Compost)

Grown in the fertile regions of New London, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Mr. Rodrigo Senger IV*

---

![Product Image](https://images.unsplash.com/photo-1603570411772-cd62a966b30e?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 200,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 15,
            'rating' => 4.1,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 54,
            'name' => "Fresh Organic Spinach",
            'description' => "Do hard grow challenge note.",
            'markdown_description' => <<<MD
## Fresh Organic Spinach

Grown in the fertile regions of Langport, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Ernesto Koss*

---

![Product Image](https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 80,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 1,
            'rating' => 4.5,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 54,
            'name' => "Sweet Bananas",
            'description' => "Computer various win strong piece large easy.",
            'markdown_description' => <<<MD
## Sweet Bananas

Grown in the fertile regions of Langport, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Ernesto Koss*

---

![Product Image](https://images.unsplash.com/photo-1582281298057-5e56f6f4f780?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 50,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 2,
            'rating' => 4.1,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 54,
            'name' => "Maize Flour (Ugali)",
            'description' => "Suggest feel born simple poor run while first.",
            'markdown_description' => <<<MD
## Maize Flour (Ugali)

Grown in the fertile regions of Langport, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Ernesto Koss*

---

![Product Image](https://images.unsplash.com/photo-1579881518074-9e7ac2a46f5a?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 120,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 3,
            'rating' => 4.2,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 54,
            'name' => "Cow Milk (Raw)",
            'description' => "Pay whatever church you.",
            'markdown_description' => <<<MD
## Cow Milk (Raw)

Grown in the fertile regions of Langport, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Ernesto Koss*

---

![Product Image](https://images.unsplash.com/photo-1580910051070-040dd17f13d3?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 90,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 4,
            'rating' => 4.4,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 54,
            'name' => "Tilapia (Freshwater)",
            'description' => "Language civil everything try.",
            'markdown_description' => <<<MD
## Tilapia (Freshwater)

Grown in the fertile regions of Langport, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Ernesto Koss*

---

![Product Image](https://images.unsplash.com/photo-1604908177524-472dfb5fe1f3?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 250,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 5,
            'rating' => 4.7,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 54,
            'name' => "Arrowroots",
            'description' => "Room not wish relate imagine program.",
            'markdown_description' => <<<MD
## Arrowroots

Grown in the fertile regions of Langport, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Ernesto Koss*

---

![Product Image](https://images.unsplash.com/photo-1625947506332-98dbee73cb92?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 70,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 6,
            'rating' => 4.5,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 54,
            'name' => "Tomatoes (Roma)",
            'description' => "None walk fly.",
            'markdown_description' => <<<MD
## Tomatoes (Roma)

Grown in the fertile regions of Langport, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Ernesto Koss*

---

![Product Image](https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 60,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 7,
            'rating' => 4.2,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 54,
            'name' => "Groundnuts",
            'description' => "Everyone place red involve strategy nor race.",
            'markdown_description' => <<<MD
## Groundnuts

Grown in the fertile regions of Langport, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Ernesto Koss*

---

![Product Image](https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 100,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 8,
            'rating' => 4.4,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 54,
            'name' => "Cabbages",
            'description' => "Worker loss state describe some network major.",
            'markdown_description' => <<<MD
## Cabbages

Grown in the fertile regions of Langport, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Ernesto Koss*

---

![Product Image](https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 45,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 9,
            'rating' => 4.1,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 54,
            'name' => "Avocados (Hass)",
            'description' => "Former hope imagine smile past clear.",
            'markdown_description' => <<<MD
## Avocados (Hass)

Grown in the fertile regions of Langport, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Ernesto Koss*

---

![Product Image](https://images.unsplash.com/photo-1576402187873-622f942d08fc?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 130,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 10,
            'rating' => 4.4,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 54,
            'name' => "Honey (Raw Organic)",
            'description' => "One travel education it participant order.",
            'markdown_description' => <<<MD
## Honey (Raw Organic)

Grown in the fertile regions of Langport, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Ernesto Koss*

---

![Product Image](https://images.unsplash.com/photo-1590080876350-1d0430f98fda?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 300,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 11,
            'rating' => 4.6,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 54,
            'name' => "Managu",
            'description' => "Foot also see early trip space choice.",
            'markdown_description' => <<<MD
## Managu

Grown in the fertile regions of Langport, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Ernesto Koss*

---

![Product Image](https://images.unsplash.com/photo-1593866331959-60c330c4a3c5?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 55,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 12,
            'rating' => 4.6,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 54,
            'name' => "Pumpkin Leaves",
            'description' => "Item people risk tonight.",
            'markdown_description' => <<<MD
## Pumpkin Leaves

Grown in the fertile regions of Langport, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Ernesto Koss*

---

![Product Image](https://images.unsplash.com/photo-1642667448971-9600cc97c7c7?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 65,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 13,
            'rating' => 4.9,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 54,
            'name' => "Free Range Eggs",
            'description' => "Summer cause campaign mention country reduce.",
            'markdown_description' => <<<MD
## Free Range Eggs

Grown in the fertile regions of Langport, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Ernesto Koss*

---

![Product Image](https://images.unsplash.com/photo-1582810828343-1e4f76c5fd5a?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 180,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 14,
            'rating' => 4.3,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 54,
            'name' => "Organic Fertilizer (Compost)",
            'description' => "Picture chance building Republican owner administration key.",
            'markdown_description' => <<<MD
## Organic Fertilizer (Compost)

Grown in the fertile regions of Langport, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Ernesto Koss*

---

![Product Image](https://images.unsplash.com/photo-1603570411772-cd62a966b30e?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 200,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 15,
            'rating' => 4.6,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 55,
            'name' => "Fresh Organic Spinach",
            'description' => "Treat can culture.",
            'markdown_description' => <<<MD
## Fresh Organic Spinach

Grown in the fertile regions of Port Mathildeview, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Margie Leuschke*

---

![Product Image](https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 80,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 1,
            'rating' => 4.8,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 55,
            'name' => "Sweet Bananas",
            'description' => "Fund worker agree.",
            'markdown_description' => <<<MD
## Sweet Bananas

Grown in the fertile regions of Port Mathildeview, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Margie Leuschke*

---

![Product Image](https://images.unsplash.com/photo-1582281298057-5e56f6f4f780?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 50,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 2,
            'rating' => 4.9,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 55,
            'name' => "Maize Flour (Ugali)",
            'description' => "Letter this material.",
            'markdown_description' => <<<MD
## Maize Flour (Ugali)

Grown in the fertile regions of Port Mathildeview, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Margie Leuschke*

---

![Product Image](https://images.unsplash.com/photo-1579881518074-9e7ac2a46f5a?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 120,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 3,
            'rating' => 4.2,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 55,
            'name' => "Cow Milk (Raw)",
            'description' => "Social student term environment.",
            'markdown_description' => <<<MD
## Cow Milk (Raw)

Grown in the fertile regions of Port Mathildeview, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Margie Leuschke*

---

![Product Image](https://images.unsplash.com/photo-1580910051070-040dd17f13d3?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 90,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 4,
            'rating' => 4.8,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 55,
            'name' => "Tilapia (Freshwater)",
            'description' => "Address staff five figure.",
            'markdown_description' => <<<MD
## Tilapia (Freshwater)

Grown in the fertile regions of Port Mathildeview, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Margie Leuschke*

---

![Product Image](https://images.unsplash.com/photo-1604908177524-472dfb5fe1f3?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 250,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 5,
            'rating' => 4.5,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 55,
            'name' => "Arrowroots",
            'description' => "Garden though president morning over.",
            'markdown_description' => <<<MD
## Arrowroots

Grown in the fertile regions of Port Mathildeview, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Margie Leuschke*

---

![Product Image](https://images.unsplash.com/photo-1625947506332-98dbee73cb92?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 70,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 6,
            'rating' => 4.5,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 55,
            'name' => "Tomatoes (Roma)",
            'description' => "Staff customer debate heart not positive.",
            'markdown_description' => <<<MD
## Tomatoes (Roma)

Grown in the fertile regions of Port Mathildeview, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Margie Leuschke*

---

![Product Image](https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 60,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 7,
            'rating' => 4.8,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 55,
            'name' => "Groundnuts",
            'description' => "Detail family official wear water half.",
            'markdown_description' => <<<MD
## Groundnuts

Grown in the fertile regions of Port Mathildeview, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Margie Leuschke*

---

![Product Image](https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 100,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 8,
            'rating' => 4.9,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 55,
            'name' => "Cabbages",
            'description' => "Pick study history rock more thank anyone decade.",
            'markdown_description' => <<<MD
## Cabbages

Grown in the fertile regions of Port Mathildeview, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Margie Leuschke*

---

![Product Image](https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 45,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 9,
            'rating' => 4.7,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 55,
            'name' => "Avocados (Hass)",
            'description' => "Price respond between effect sell authority history.",
            'markdown_description' => <<<MD
## Avocados (Hass)

Grown in the fertile regions of Port Mathildeview, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Margie Leuschke*

---

![Product Image](https://images.unsplash.com/photo-1576402187873-622f942d08fc?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 130,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 10,
            'rating' => 4.1,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 55,
            'name' => "Honey (Raw Organic)",
            'description' => "Serve short shake lot.",
            'markdown_description' => <<<MD
## Honey (Raw Organic)

Grown in the fertile regions of Port Mathildeview, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Margie Leuschke*

---

![Product Image](https://images.unsplash.com/photo-1590080876350-1d0430f98fda?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 300,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 11,
            'rating' => 4.1,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 55,
            'name' => "Managu",
            'description' => "Talk street manage training while.",
            'markdown_description' => <<<MD
## Managu

Grown in the fertile regions of Port Mathildeview, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Margie Leuschke*

---

![Product Image](https://images.unsplash.com/photo-1593866331959-60c330c4a3c5?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 55,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 12,
            'rating' => 4.0,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 55,
            'name' => "Pumpkin Leaves",
            'description' => "Pass spend child.",
            'markdown_description' => <<<MD
## Pumpkin Leaves

Grown in the fertile regions of Port Mathildeview, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Margie Leuschke*

---

![Product Image](https://images.unsplash.com/photo-1642667448971-9600cc97c7c7?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 65,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 13,
            'rating' => 4.3,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 55,
            'name' => "Free Range Eggs",
            'description' => "Many sometimes ready tonight will how increase vote.",
            'markdown_description' => <<<MD
## Free Range Eggs

Grown in the fertile regions of Port Mathildeview, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Margie Leuschke*

---

![Product Image](https://images.unsplash.com/photo-1582810828343-1e4f76c5fd5a?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 180,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 14,
            'rating' => 4.8,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);

        Produce::create([
            'farmer_id' => 55,
            'name' => "Organic Fertilizer (Compost)",
            'description' => "Investment hot plan affect eight Mr within tax.",
            'markdown_description' => <<<MD
## Organic Fertilizer (Compost)

Grown in the fertile regions of Port Mathildeview, this product is hand-picked for maximum freshness.

---

### ✅ Why You’ll Love It

- 🍃 Fresh from Kenyan farms
- 🚫 No chemicals or preservatives
- 🧺 Packed daily and delivered quickly

---

### 🌱 Farmer's Note

_"Proudly grown by our team with love."_
— *Margie Leuschke*

---

![Product Image](https://images.unsplash.com/photo-1603570411772-cd62a966b30e?auto=format&fit=crop&w=600&h=400)
MD,
            'price_per_unit' => 200,
            'quantity' => 50,
            'is_on_sale' => true,
            'discount' => 10.0,
            'out_of_stock' => false,
            'available_from' => now(),
            'available_to' => now()->addMonths(6),
            'category_id' => 15,
            'rating' => 4.9,
            'tags' => json_encode(["organic", "local", "fresh"]),
        ]);
    }
}
