<?php

$addresses = [
    'Address A', 'Address B', 'Address C'
];

$status = [
    'Status 1', 'Status 2'
];

$factory->define(App\Models\Carbon::class, function (Faker\Generator $faker) use ($hospitals, $insurances, $status) {
    $faker->addProvider(new Faker\Provider\pt_BR\Person($faker));

    return [
        'name' => $faker->name,
        'address' => $faker->randomElement($hospitals),
        'status' => $faker->randomElement($status),
    ];
});
