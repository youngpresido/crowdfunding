<?php

use Illuminate\Database\Seeder;

class FundingTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Funding::class, 50)->create();
    }
}
