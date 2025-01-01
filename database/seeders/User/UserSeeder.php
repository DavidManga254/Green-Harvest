<?php

namespace Database\Seeders\User;

use App\Models\User\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory(300)->create()->each(function ($user) {
            // Generate a random token for each user
            $user->token = Str::random(60);
            $user->save();

            // Randomly mark email as verified
            if (rand(0, 1)) {
                $user->email_verified_at = now();
            }

            // Hash the password
            $user->password = Hash::make('password');
            $user->save();
        });
    }
}
