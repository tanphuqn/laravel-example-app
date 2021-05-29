<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

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
        $shopify_pdp_image = "";
        $zoom_banner = "";
        $name = $request->input('name');
        // $request->validate([
        //     'shopify_pdp_image' => 'required|mimes:jpg,jpeg,png,csv,txt,xlx,xls,pdf|max:2048',
        //     'zoom_banner' => 'required|mimes:jpg,jpeg,png,csv,txt,xlx,xls,pdf|max:2048'
        //  ]);

        if ($request->file()) {
            if ($request->hasFile('shopify_pdp_image')) {
                $shopify_pdp_image = time().'_'.$request->shopify_pdp_image->getClientOriginalName();
                $request->shopify_pdp_image->move(public_path('images'), $shopify_pdp_image);
            }

            if ($request->hasFile('zoom_banner')) {
                $zoom_banner = time().'_'.$request->zoom_banner->getClientOriginalName();
                $request->zoom_banner->move(public_path('images'), $zoom_banner);
            }
        }
        $data = [
            'name' => $name,
            'slug' => Str::slug($name),
            'price' => $request->input('price', 0),
            'description' => $request->input('description', ""),
            'title' => $request->input('title', ""),
            'creator_email' => $request->input('creator_email', ""),
            'inventory' => $request->input('inventory', 0),
            'duration' => $request->input('duration', 0),
            'age_min' => $request->input('age_min', 0),
            'age_max' => $request->input('age_max', 0),
            'zoom_item_type' => $request->input('zoom_item_type', 'event'),
            'master_sku' => $request->input('master_sku', ''),
        ];

        if ($shopify_pdp_image != "") {
            $data["shopify_pdp_image"] = $shopify_pdp_image;
        }
        if ($zoom_banner != "") {
            $data["zoom_banner"] = $zoom_banner;
        }

        $product = Product::updateOrCreate(
            [
                'id' => $request->input('id')
            ],
            $data

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
            $product = Product::where('id', $request->input('id'))->first();
            unlink("images/".$product->shopify_pdp_image);
            unlink("images/".$product->zoom_banner);
            return $product->delete(); //returns true/false

        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
