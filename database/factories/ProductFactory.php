<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $productPrefixes = ['Sweater', 'Pants', 'Shirt', 'Hat', 'Glasses', 'Socks'];
        $name = $this->faker->company . ' ' . Arr::random($productPrefixes);


        return [
            'name' => $name,
            'slug' => Str::slug($name),
            'description' => $this->faker->realText(320),
            'price' => $this->faker->numberBetween(10000, 100000),
            'description' => $this->faker->realText(320),
            'title' =>  $this->faker->jobTitle(50),
            'creator_email' => $this->faker->unique()->safeEmail(),
            'inventory' => $this->faker->numberBetween(1, 50),
            'duration' => $this->faker->numberBetween(1, 50),
            'age_min' => $this->faker->numberBetween(1, 50),
            'age_max' => $this->faker->numberBetween(1, 50),
            // 'shopify_pdp_image' =>  $this->faker->image('public/images'),
            // 'zoom_banner' => $this->faker->image('public/images'),
            'zoom_item_type' => 'event',
            'master_sku' => $this->faker->words(6, true),
        ];
    }
}
