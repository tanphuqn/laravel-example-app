<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{

    public function purchase(Request $request)
    {
        $user = User::firstOrCreate(
            [
                'email' => $request->input('email')
            ],
            [
                'password' => Hash::make(Str::random(12)),
                'name' => $request->input('first_name') . ' ' . $request->input('last_name'),
                'address' => $request->input('address'),
                'city' => $request->input('city'),
                'state' => $request->input('state'),
                'zip_code' => $request->input('zip_code')
            ]
        );

        try {

            // user is not exist on stripe
            if ($user->stripe_id == '') {
                $user->createAsStripeCustomer();
            }

            $user->updateDefaultPaymentMethod($request->input('payment_method_id'));
            foreach (json_decode($request->input('cart'), true) as $item) {
                // Step 1: create item invoice
                $invoice_item = $user->tab(
                    $item["name"] . '.Color:' . $item['color'].'. Size:' . $item['size'],
                    $item['price'],
                    [
                        // 'quantity' => $item['quantity'],
                        'metadata' => [
                            'color' => $item['color'],
                            'size' => $item['size'],
                        ]
                    ]
                );
            }

            // Setp 2: submit invoice
            $invoice = $user->invoice([
                'description' => 'description master',
                // 'collection_method' => 'send_invoice',
                // 'days_until_due' => 30, // Only set for collection_method = send_invoice

            ]);

            $invoice_info = $invoice->asStripeInvoice();
            $order = $user->orders()
                ->create([
                    'transaction_id' => $invoice_info->payment_intent,
                    'total' => $invoice_info->total
                ]);

            foreach (json_decode($request->input('cart'), true) as $item) {
                $order->products()
                    ->attach($item['id'], [
                        'quantity' => $item['quantity'],
                        'note' => "Size:".$item['size']. ". Color: ".$item['color']
                    ]
                );
            }

            $order->load('products');

            return $order;
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
