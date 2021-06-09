<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(1)->create();
        \App\Models\User::create([
            'name' => 'andrew',
            'email' => "tanphuqn@gmail.com",
            'password' => Hash::make('sbsJd2m!B.r$$D$'), // sbsJd2m!B.r$$D$
            'remember_token' => Str::random(10),
        ]);
        Product::factory()
            ->times(20)
            ->create();
    }
}
