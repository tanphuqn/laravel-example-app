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

            $user->updateDefaultPaymentMethod($request->input('payment_method_id'));

            // Submit payment is ok
            // $payment = $user->charge(
            //     $request->input('amount'),
            //     $request->input('payment_method_id')
            // );

            // Get payment info is ok
            // $php = $payment->asStripePaymentIntent();

            // Get customer info is ok
            // example cus_JW5sgmdJAoWE7O
            // $stripeCustomer = $user->createAsStripeCustomer();

            var_dump($request->input('cart'));
            // OK
            // $invoice = $user->newSubscription('default', 'price_1IsigRCBaoBKC4ddSm44Jt1L')
            // ->create($request->input('payment_method_id'), [
            //     'email' => $request->input('email'),
            // ], [
            //     'metadata' => ['note' => 'Some extra information.'],
            // ]);

            // // Subscription only accept price recurring type
            // $invoice = $user->newSubscription('default', 'basic')
            //     ->create(
            //         $request->input('payment_method_id'),
            //         [
            //             'email' => $request->input('email'),
            //             'name' => 'customer name',
            //         ],
            //         [
            //             'items' => [
            //                 [
            //                     'price' => 'price_1IsigRCBaoBKC4ddSm44Jt1L',
            //                     'quantity' => 1,
            //                     'metadata' => [
            //                         'description' => 'T-shirt',
            //                         'color' => 'Red'
            //                     ],
            //                 ],

            //             ],
            //             // Any other subscription ot
            //         ]
            //     );


            $invoice = $user->invoice([
                'description' => 'description master',
                'collection_method'=>'send_invoice',
                'lines' => [
                    'data' => [
                        'amount' => 50,
                        'description' => 'Product 1',
                        'metadata' => [
                            'color' => 'Red',
                        ]
                    ]
                ]
            ]);

            // Subimit example invoice is ok
            // //    Create the Invoice
            // $invoice = $user->invoiceFor('Stickers 1 s', 500, [
            //     'metadata' => ['color'=> 'Red'],
            // ], [

            // ]);

            var_dump($invoice);
            return response()->json(['message' => $invoice], 500);
            // $order = $user->orders()
            //     ->create([
            //         'transaction_id' => $payment->charges->data[0]->id,
            //         'total' => $payment->charges->data[0]->amount
            //     ]);

            // foreach (json_decode($request->input('cart'), true) as $item) {
            //     $order->products()
            //         ->attach($item['id'], ['quantity' => $item['quantity']]);
            // }

            // $order->load('products');
            // return $order;
            // return $invoice;
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
