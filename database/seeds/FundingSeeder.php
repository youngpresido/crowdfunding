<?php

use Illuminate\Database\Seeder;

class FundingSeeder extends Seeder
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
