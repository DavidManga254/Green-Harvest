<?php

namespace App\Http\Controllers\Subscription;

use App\Http\Controllers\Controller;
use App\Http\Requests\Subscription\StoreSubscriptionPlanRequest;
use App\Http\Requests\Subscription\UpdateSubscriptionPlanRequest;
use App\Http\Resources\Subscription\SubscriptionPlanResource;
use App\Models\Subscription\SubscriptionPlanTemplate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class SubscriptionPlanController extends Controller
{
    public function index(\Illuminate\Http\Request $request)
    {
        try {
            $user = $request->authenticated_user;

            $plans = $user->subscriptionPlans()->with('items')->get();

            return response()->json([
                'plans' => SubscriptionPlanResource::collection($plans)
            ], 200);
        } catch (\Exception $e) {
            Log::error('Error fetching subscription plans: ' . $e->getMessage());

            return response()->json([
                'message' => 'Something went wrong while fetching subscription plans.'
            ], 500);
        }
    }

    public function show(\Illuminate\Http\Request $request, $id)
    {
        try {
            $user = $request->authenticated_user;

            $plan = $user->subscriptionPlans()->with('items')->findOrFail($id);

            return new SubscriptionPlanResource($plan);
        } catch (\Exception $e) {
            Log::error('Error fetching subscription plan: ' . $e->getMessage());

            return response()->json([
                'message' => 'Failed to fetch subscription plan.'
            ], 500);
        }
    }

    public function store(StoreSubscriptionPlanRequest $request)
    {
        try {
            $user = $request->authenticated_user;
            $validated = $request->validated();

            $plan = $user->subscriptionPlans()->create($validated);

            if ($validated['plan_type'] === 'custom' && isset($validated['items'])) {
                foreach ($validated['items'] as $item) {
                    $plan->items()->create($item);
                }
            }

            return response()->json([
                'message' => 'Subscription plan created successfully.',
                'plan' => new SubscriptionPlanResource($plan->load('items'))
            ], 201);
        } catch (\Exception $e) {
            Log::error('Error creating subscription plan: ' . $e->getMessage());

            return response()->json([
                'message' => 'Failed to create subscription plan.'
            ], 500);
        }
    }

    public function update(UpdateSubscriptionPlanRequest $request, $id)
    {
        try {
            $user = $request->authenticated_user;
            $plan = $user->subscriptionPlans()->findOrFail($id);

            $validated = $request->validated();
            $plan->update($validated);

            if ($plan->plan_type === 'custom' && isset($validated['items'])) {
                $plan->items()->delete();
                foreach ($validated['items'] as $item) {
                    $plan->items()->create($item);
                }
            }

            return response()->json([
                'message' => 'Subscription plan updated successfully.',
                'plan' => new SubscriptionPlanResource($plan->load('items'))
            ], 200);
        } catch (\Exception $e) {
            Log::error('Error updating subscription plan: ' . $e->getMessage());

            return response()->json([
                'message' => 'Failed to update subscription plan.'
            ], 500);
        }
    }

    public function destroy(\Illuminate\Http\Request $request, $id)
    {
        try {
            $user = $request->authenticated_user;

            $plan = $user->subscriptionPlans()->findOrFail($id);
            $plan->delete();

            return response()->json([
                'message' => 'Subscription plan deleted successfully.'
            ], 200);
        } catch (\Exception $e) {
            Log::error('Error deleting subscription plan: ' . $e->getMessage());

            return response()->json([
                'message' => 'Failed to delete subscription plan.'
            ], 500);
        }
    }

        public function availableTemplates()
        {
            return SubscriptionPlanTemplate::all();
        }

        public function attachTemplateToFarmer(Request $request)
        {
            $farmer = $request->farmer;

            $request->validate([
                'template_id' => 'required|exists:subscription_plan_templates,id'
            ]);

            $farmer->subscriptionPlans()->create([
                'subscription_plan_template_id' => $request->template_id,
                'is_active' => true,
            ]);

            return response()->json(['message' => 'Plan added to farmer.']);
        }

}