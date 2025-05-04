<?php

namespace App\Http\Controllers\Payment;

use App\Http\Controllers\Controller;
use App\Http\Requests\Billing\BillingSaveRequest;
use App\Models\Billing\BillingAddress;
use App\Models\cart\Cart;
use App\Models\cart\CartItem;
use App\Models\Order\Order;
use App\Models\Order\UserOrder;
use App\Models\Order\UserOrderItem;
use App\Models\Payment\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Unicodeveloper\Paystack\Facades\Paystack;

class PaymentController extends Controller
{
    // Step 1: Redirect to Paystack for payment
    public function redirectToGateway(BillingSaveRequest $request)
    {
        try {
            $user = $request->authenticated_user;

            $billingData = $request->validated();

            // 2. Store billing address if not existing
            $billingAddress = BillingAddress::firstOrCreate([
                'user_id' => $user->id,
                'address_line_1' => $billingData['address_line_1'],
                'postal_code' => $billingData['postal_code'],
                'county' => $billingData['county'],
                'city' => $billingData['city'],
                'country' => $billingData['country'],
                'full_name' => $billingData['full_name'],
                'phone' => $billingData['phone'],
            ], $billingData);

            // 3. Fetch cart items
            $cart = Cart::where('user_id', $user->id)->first();

            if (!$cart) {
                return response()->json(['message' => 'Cart not found.'], 404);
            }

            $cartItems = CartItem::where('cart_id', $cart->id)->with('produce')->get();

            if ($cartItems->isEmpty()) {
                return response()->json(['message' => 'Your cart is empty.'], 400);
            }


            // foreach ($cartItems as $item) {
            //     dump([
            //         'produce_id' => $item->produce_id,
            //         'quantity' => $item->quantity,
            //         // 'produce' => $item->produce,
            //         'price' => $item->price ?? 'no price'
            //     ]);
            // }

            // 4. Calculate totals
            $subtotal = $cartItems->sum(fn($item) => $item->price * $item->quantity);
            $shipping = 250;
            $total = $subtotal + $shipping;


            // 5. Create user order
            $order = UserOrder::create([
                'user_id' => $user->id,
                'billing_address_id' => $billingAddress->id,
                'subtotal' => $subtotal,
                'shipping' => $shipping,
                'total' => $total,
                'status' => 'pending',
                'notes' => $billingData['notes'] ?? null,
            ]);

            // dump($cartItems[0]->produce_id);
            // dump($cartItems[1]->produce_id);
            // dump($cartItems[2]->produce_id);
            // dump($cartItems[3]->produce_id);
            // 6. Store snapshot of order items
            foreach ($cartItems as $item) {
                UserOrderItem::create([
                    'user_order_id' => $order->id,
                    'produce_id' => $item->produce_id,
                    'quantity' => $item->quantity,
                    'price' => $item->price,
                ]);
            }

            // 7. Convert amount to kobo (Paystack's expected format)
            $amountInCents = $total * 100;

            // 8. Build callback URL (include order ID for tracking)
            $callbackUrl = env('CUSTOMER_WEB_APP_URL') . '/checkout/pay/callback?order_id=' . $order->id;

            // 9. Initiate Paystack payment
            $authorizationUrl = Paystack::getAuthorizationUrl([
                'amount' => $amountInCents,
                'email' => $user->email,
                'currency' => 'KES',
                'payment_method' => 'mpesa',
                'callback_url' => $callbackUrl,
            ]);

            return response()->json([
                'authorization_url' => $authorizationUrl,
                'order_id' => $order->id,
            ]);
        } catch (\Exception $e) {
            Log::error('Order creation/payment initiation failed: ' . $e->getMessage());
            return response()->json(['message' => 'Something went wrong while processing your order.'], 500);
        }
    }


    public function verifyPayment(Request $request, $reference)
    {


        if (!$reference) {
            return response()->json([
                'status' => 'error',
                'message' => 'No reference provided.',
            ], 400);
        }

        try {
            // First, check if this payment is already saved
            $existingPayment = Payment::where('reference', $reference)->first();

            if ($existingPayment) {
                return response()->json([
                    'status' => 'success',
                    'message' => 'Payment already verified',
                    'data' => [
                        'reference' => $existingPayment->reference,
                        'status' => $existingPayment->status,
                    ],
                ]);
            }

            // If not already saved, call Paystack to verify
            $secretKey = config('paystack.secretKey');

            $response = Http::withToken($secretKey)
                ->get("https://api.paystack.co/transaction/verify/{$reference}");

            if ($response->failed()) {
                return response()->json([
                    'status' => 'failed',
                    'message' => 'Verification failed',
                    'error' => $response->json(),
                ], $response->status());
            }

            $paymentDetails = $response->json('data');

            if ($paymentDetails['status'] === 'success') {
                $payment = Payment::create([
                    'user_id' => $request->authenticated_user->id,
                    'reference' => $paymentDetails['reference'],
                    'status' => $paymentDetails['status'],
                    'amount' => $paymentDetails['amount'],
                    'email' => $paymentDetails['customer']['email'],
                    'transaction_id' => $paymentDetails['id'],
                    'meta' => json_encode($paymentDetails),
                ]);

                $order = Order::create([
                    'user_id' => $request->authenticated_user->id,
                    'total_price' => $payment->amount,
                    'discount' => 0.00,
                    'shipping_fee' => 0.00,
                    'payment_method' => 'mpesa',
                    'status' => 'order_received',
                ]);

                return response()->json([
                    'status' => 'success',
                    'message' => 'Payment verified and saved successfully',
                ]);
            } else {
                return response()->json([
                    'status' => 'failed',
                    'message' => 'Payment not successful',
                ], 400);
            }
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Exception caught during verification',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}