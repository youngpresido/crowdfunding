<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\User::class, 20)->create()
        ->each(function($user){
            $user->fund()->save(factory(App\Funding::class)->make());
        });
        App\Funding::all()
        ->each(function($ch){
            $ch->paid()->save(factory(App\Accept::class)->make());
        });
    }
}
