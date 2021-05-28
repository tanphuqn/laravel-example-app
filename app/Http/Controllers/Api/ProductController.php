<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Str;

class ProductController extends Controller
{

    public function index()
    {
        return Product::orderBy('created_at', 'desc')->get();
    }

    public function show(Product $product)
    {
        // $product->load();
        return $product;
    }
    public function addProduct(Request $request)
    {
        $name = $request->input('name');
        $product = Product::updateOrCreate(
            [
                'id' => $request->input('id')
            ],

           [ 'name' => $name,
           'slug' => Str::slug($name),
           'description' => $request->input('description'),
           'price' => $request->input('price'),
           ]
        );

        try {
            return $product;
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function deleteProduct(Request $request)
    {
        try {
            $product = Product::where('id', $request->input('id'));
            return $product->delete(); //returns true/false

        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }


}
