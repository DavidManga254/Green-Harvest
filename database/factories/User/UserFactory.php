<?php

namespace Database\Factories\User;

use App\Models\User\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'password' => 'password', // You can hash passwords in the seeder
            'phone' => $this->faker->phoneNumber,
            'role' => $this->faker->randomElement(['consumer', 'farmer']),
            'address' => $this->faker->address,
            'token' => null, // Token will be generated in the seeder
            'email_verified_at' => now(), // Can be randomly assigned to `null` in seeder
        ];
    }
}
