<?php

namespace Database\Seeders;

use App\Models\Number;
use Illuminate\Database\Seeder;

class NumberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'user_id' => 1,
                'body' => '917012749946',
                'webhook' => '',
                'status' => 'Disconnect',
                'created_at' => now(),
                'updated_at' => now()
            ],
           
           
        ];

       foreach($data as $d){
           Number::create($d);
       }
    }
}
