<?php

namespace database\Seeders\Farmer;

use App\Models\Farmer\Farmer;
use App\Models\User\User;
use Illuminate\Database\Seeder;

class FarmerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $users = User::all();


        Farmer::factory(150)->create()->each(function ($farmer) use ($users) {
            $farmer->save();
        });
    }
}
