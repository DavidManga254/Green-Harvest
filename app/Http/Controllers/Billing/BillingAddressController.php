<?php

namespace App\Http\Controllers\Billing;

use App\Http\Controllers\Controller;
use App\Http\Requests\Billing\BillingSaveRequest;
use App\Http\Resources\Billing\BillingAddressResource;
use App\Models\Billing\BillingAddress;
use App\Models\User\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class BillingAddressController extends Controller
{
    public function index(Request $request)
    {
        try {
            $user = $request->authenticated_user;

            $userData = User::where('id', $user->id)
                ->with('billingAddresses')
                ->first();

            if (!$userData || $userData->billingAddresses->isEmpty()) {
                return response()->json([
                    'message' => 'No billing addresses found.',
                ], 404);
            }

            return response()->json([
                'addresses' => BillingAddressResource::collection($userData->billingAddresses),
            ], 200);
        } catch (\Exception $e) {
            Log::error('Error fetching billing addresses: ' . $e->getMessage());

            return response()->json([
                'message' => 'Something went wrong while fetching billing addresses.',
            ], 500);
        }
    }

    public function store(BillingSaveRequest $request)
    {
        try {
            $user = $request->authenticated_user;

            $address = BillingAddress::create([
                'user_id' => $user->id,
                'street' => $request->street,
                'city' => $request->city,
                'state' => $request->state,
                'zip_code' => $request->zip_code,
                'country' => $request->country,
            ]);

            return response()->json([
                'message' => 'Billing address saved successfully.',
                'address' => new BillingAddressResource($address)
            ], 201);
        } catch (\Exception $e) {
            Log::error('Error saving billing address: ' . $e->getMessage());

            return response()->json([
                'message' => 'Failed to save billing address.',
            ], 500);
        }
    }
}
