<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->longText('description')->nullable();
            $table->integer('price')->default(0);
            $table->string('title')->nullable();
            $table->string('creator_email')->nullable();
            $table->integer('inventory')->nullable()->default(0);
            $table->integer('duration')->nullable()->default(0);
            $table->integer('age_min')->nullable()->default(0);
            $table->integer('age_max')->nullable()->default(0);
            $table->string('shopify_pdp_image')->nullable();
            $table->string('zoom_banner')->nullable();
            $table->string('zoom_item_type')->nullable();
            $table->string('master_sku')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
