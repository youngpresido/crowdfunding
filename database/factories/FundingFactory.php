<?php

use Faker\Generator as Faker;

$factory->define(App\Funding::class, function (Faker $faker) {
    return [
        'user_id'=>$faker->numberBetween($min=1, $max=7),
        'title'=>$faker->text(30),
        'desciption'=>$faker->text(100),
        'public_key'=>$faker->creditCardNumber,
        'private_key'=>$faker->swiftBicNumber,
        'date'=>$faker->date,
        'amount'=>$faker->numberBetween($min=30000, $max=100000)
    ];
});
