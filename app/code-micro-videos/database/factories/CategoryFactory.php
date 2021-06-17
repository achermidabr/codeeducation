<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Category;
use Faker\Generator as Faker;
use Ramsey\Uuid\Uuid;

$factory->define(Category::class, function (Faker $faker) {
    return [
        'id' => Uuid::uuid4(),
        'name' => $faker->colorName,
        'description' => rand(1,10) % 2 == 0 ? $faker->sentence() : null
    ];
});
