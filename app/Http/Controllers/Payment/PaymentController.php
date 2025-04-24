<?php

namespace App\Http\Controllers\Payment;

use App\Http\Controllers\Controller;
use App\Models\Payment\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Unicodeveloper\Paystack\Facades\Paystack;

class PaymentController extends Controller
{
    // Step 1: Redirect to Paystack for payment
    public function redirectToGateway()
    {
        $amountInKES = 1000; // Example amount in Kenyan Shilling (KES)
        $email = 'user@example.com'; // Hardcoded email for now
        $callbackUrl = env('CUSTOMER_WEB_APP_URL') . '/checkout/pay/callback'; // URL to redirect after payment

        // Convert amount to cents (Paystack expects amount in kobo, i.e., 1 KES = 100 cents)
        $amountInCents = $amountInKES * 100;

        // Generate the Paystack authorization URL
        $authorizationUrl = Paystack::getAuthorizationUrl([
            'amount' => $amountInCents, // Amount in cents
            'email' => $email,
            'currency' => 'KES', // Set currency to KES
            'payment_method' => 'mpesa', // Specify MPesa as the payment method
            'callback_url' => $callbackUrl, // Redirect URL after payment
        ]);

        return response()->json([
            'authorization_url' => $authorizationUrl
        ]);
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
