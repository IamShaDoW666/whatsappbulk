<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

use Illuminate\Support\Str;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      
       $user = [
        'id' => 1,
        'username' => 'admin',
        'email' => 'saakshicctv@gmail.com',
        'email_verified_at' => now(),
        'password' => bcrypt(123456),
        'api_key' => Str::random(15),
        'chunk_blast' =>100,
        'subscription_expired' => date('Y-m-d', strtotime('+1 year'))
    ];

    User::create($user);
    }
}
