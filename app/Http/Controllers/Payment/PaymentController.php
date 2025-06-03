<?php

namespace App\Http\Controllers\Payment;

use App\Http\Controllers\Controller;
use App\Http\Requests\Billing\BillingSaveRequest;
use App\Http\Requests\Subscription\SubscribeToPlanRequest;
use App\Models\Billing\BillingAddress;
use App\Models\cart\Cart;
use App\Models\cart\CartItem;
use App\Models\Order\Order;
use App\Models\Order\OrderItem;
use App\Models\Order\UserOrder;
use App\Models\Order\UserOrderItem;
use App\Models\Payment\Payment;
use App\Models\Subscription\FarmerSubscriptionPlan;
use App\Models\Subscription\SubscriptionPlan;
use Carbon\Carbon;
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
            $shipping = 0;
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
                'amount' => (int) $amountInCents,
                'email' => $user->email,
                'currency' => 'KES',
                'payment_method' => 'mpesa',
                'callback_url' => $callbackUrl,
                'metadata'=>[
                    'order_id' => $order->id,
                    'type' => 'one-time'
                ]
            ]);

            return response()->json([
                'authorization_url' => $authorizationUrl,
                'order_id' => $order->id,
            ]);
        } catch (\Exception $e) {
            Log::error('Order creation/payment initiation failed: ' . $e->getMessage());
            return response()->json(['message' => 'Something went wrong while processing your order.','error'=>$e], 500);
        }
    }

    public function subscribeToPlan(SubscribeToPlanRequest $request)
    {
        $user = $request->authenticated_user;
        $validated = $request->validated();

        try {
            // Step 1: Fetch the plan and related template
            $plan = FarmerSubscriptionPlan::with('template')->findOrFail($validated['farmer_plan_id']);

            // Step 2: Check if the user already has an active plan for the same farmer
            $alreadySubscribed = SubscriptionPlan::where('user_id', $user->id)
                ->where('farmer_id', $plan->farmer_id)
                ->where('id',$validated['farmer_plan_id'])
                ->where('is_active', 1)
                ->exists();

            if ($alreadySubscribed) {
                return response()->json([
                    'message' => 'You already have an active subscription to this farmer.'
                ], 409); // HTTP 409 Conflict
            }

            // Step 3: Prepare payment
            $amountInCents = $plan->template->base_price * 100;
            $callbackUrl = env('CUSTOMER_WEB_APP_URL') . '/checkout/pay/callback?plan_id=' . $plan->id;

            $order = UserOrder::create([
                'user_id' => $user->id,
                'billing_address_id' => 1,
                'subtotal' => $amountInCents,
                'shipping' => 0,
                'total' => $amountInCents,
                'status' => 'pending',
                'notes' => $billingData['notes'] ?? null,
            ]);

            $authorizationUrl = Paystack::getAuthorizationUrl([
                'amount' => $amountInCents,
                'email' => $user->email,
                'currency' => 'KES',
                'payment_method' => 'mpesa',
                'callback_url' => $callbackUrl,
                'metadata' => [
                    'farmer_plan_id' => $plan->id,
                    'start_date' => $validated['start_date'],
                    'type'=>'subscription',
                    'order_id'=>$order->id
                ]
            ]);

            return response()->json([
                'authorization_url' => $authorizationUrl,
            ]);
        } catch (\Exception $e) {
            Log::error('Subscription initiation failed: ' . $e->getMessage());
            return response()->json(['message' => 'Failed to initiate subscription.'], 500);
        }
    }




    public function verifyPayment(Request $request, $reference)
    {
        $user = $request->authenticated_user;

        if (!$reference) {
            return response()->json([
                'status' => 'error',
                'message' => 'No reference provided.',
            ], 400);
        }

        try {
            // First, check if this payment is already saved
            // $existingPayment = Payment::where('reference', $reference)->first();

            // if ($existingPayment) {
            //     return response()->json([
            //         'status' => 'success',
            //         'message' => 'Payment already verified',
            //         'data' => [
            //             'reference' => $existingPayment->reference,
            //             'status' => $existingPayment->status,
            //         ],
            //     ]);
            // }

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

                $orderId = $paymentDetails['metadata']['order_id'] ?? null;

                if (!$orderId) {
                    return response()->json(['message' => 'Order ID missing from metadata.'], 400);
                }

                $order = UserOrder::find($orderId);

                if (!$order) {
                    return response()->json(['message' => 'Order not found.'], 404);
                }

                $cart = Cart::where('user_id', $user->id)->first();

                if (!$cart) {
                    return response()->json(['message' => 'Cart not found.'], 404);
                }

                $cartItems = CartItem::where('cart_id', $cart->id)->with('produce')->get();

                foreach ($cartItems as $item) {
                    UserOrderItem::create([
                        'user_order_id' => $order->id,
                        'produce_id' => $item->produce_id,
                        'quantity' => $item->quantity,
                        'price' => $item->price,
                    ]);

                    $price = $item->produce->price_per_unit;
                    $quantity = $item->quantity;
                    $subtotal = $price * $quantity;

                    // OrderItem::create([
                    //     'order_id' => $order->id,
                    //     'produce_id' => $item->produce_id,
                    //     'quantity' => $quantity,
                    //     'price' => $price,
                    // ]);
                }

                // $cartItems->each->delete();

                $metadata = $paymentDetails['metadata'] ?? [];


                if (($metadata['type'] ?? null) === 'subscription') {
                    $farmerPlanId = $metadata['farmer_plan_id'] ?? null;
                    $startDate = $metadata['start_date'] ?? now();


                    if ($farmerPlanId) {
                        $farmerPlan = FarmerSubscriptionPlan::with('template')->find($farmerPlanId);


                        if ($farmerPlan) {
                            // Check for duplicate active subscription
                            $alreadySubscribed = SubscriptionPlan::where('user_id', $user->id)
                                ->where('farmer_id', $farmerPlan->farmer_id)
                                ->where('id',$farmerPlanId)
                                ->where('is_active', 1)
                                ->exists();

                            if (!$alreadySubscribed) {
                                $tpl = $farmerPlan->template;

                                SubscriptionPlan::create([
                                    'user_id' => $user->id,
                                    'farmer_id' => $farmerPlan->farmer_id,
                                    'plan_type' => $tpl->plan_type,
                                    'frequency' => $tpl->frequency,
                                    'payment_mode' => 'recurring', // if this one is on farmer_plan
                                    'price' => $tpl->base_price,
                                    'start_date' => $startDate,
                                    'next_billing_date' => match ($tpl->frequency) {
                                        'weekly' => Carbon::parse($startDate)->addWeek(),
                                        'bi-weekly' => Carbon::parse($startDate)->addWeeks(2),
                                        'monthly' => Carbon::parse($startDate)->addMonth(),
                                        default => Carbon::parse($startDate)->addWeek(), // fallback
                                    },
                                    'is_active' => 1,
                                    'template_id'=>$farmerPlan->template->id
                                ]);
                            }
                        }
                    }
                }


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
