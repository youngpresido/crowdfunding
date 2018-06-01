<?php

use Faker\Generator as Faker;

$factory->define(App\Accept::class, function (Faker $faker) {
    return [

        'name'=>$faker->name,
        'amount'=>$faker->numberBetween($min=1000,$max=10,000),
        'email'=>$faker->email
        
    ];
});
