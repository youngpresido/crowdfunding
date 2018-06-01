<?php

use Illuminate\Database\Seeder;

class AcceptSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        factory(\App\Accept::class, 100)->create();
    }
}
