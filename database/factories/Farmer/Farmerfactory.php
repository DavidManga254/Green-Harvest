<?php

namespace Database\Factories\Farmer;

use App\Models\farmer\Farmer;
use App\Models\User\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class FarmerFactory extends Factory
{
    protected $model = Farmer::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $users = User::all();

        $current = $users->random();

        return [
            'name' => $current->name,
            'location' => $this->faker->city,
            'user_id' => $current->id,
        ];
    }
}
