<?php

namespace App\Http\Controllers\Farmer;

use App\Http\Controllers\Controller;
use App\Http\Requests\Farmer\FarmerAttachPlanRequest;
use App\Http\Requests\Farmer\RegisterFarmer;
use App\Http\Requests\Farmer\UpdateFarmerRequest;
use App\Http\Resources\Farmer\FarmerDetailReviewResource;
use App\Http\Resources\Farmer\FarmerPublicResource;
use App\Http\Resources\Farmer\FarmerResource;
use App\Http\Resources\Farmer\FarmerReviewResource;
use App\Http\Resources\Farmer\FarmerSubscriptionPlanResource;
use App\Http\Resources\Produce\ProduceResource;
use App\Models\Farmer\Farmer;
use App\Models\Farmer\FarmerReview;
use App\Models\Produce\Produce;
use App\Models\Subscription\FarmerSubscriptionPlan;
use App\Models\Subscription\SubscriptionPlan;
use App\Models\Subscription\SubscriptionPlanTemplate;
use App\Models\User\User;
use Illuminate\Http\Request;

class FarmerController extends Controller
{
    //
    public function index(Request $request)
    {
        $perPage = $request->input('data_per_page', 20);
        $page = $request->input('page', 1);

        $farmers = Farmer::paginate($perPage, ['*'], $page);


        return response()->json([
            'data' => FarmerResource::collection($farmers->items()),
            'pagination' => [
                'total' => $farmers->total(),
                'per_page' => $farmers->perPage(),
                'current_page' => $farmers->currentPage(),
                'last_page' => $farmers->lastPage(),
                'next_page_url' => $farmers->nextPageUrl(),
                'prev_page_url' => $farmers->previousPageUrl(),
            ]
        ], 200);
    }

    public function show(Request $request, $id)
    {
        $farmer = Farmer::with(['produce.images']) // eager-load relationships
            ->withCount('produce')->with(['reviews.user'])
            ->find($id);

        if (!$farmer) {
            return response()->json([
                'error' => 'Farmer not found',
            ], 404);
        }

        $perPage = $request->input('data_per_page', 10);
        $page = $request->input('page', 1);

        $reviews = $farmer->reviews()->with('user')->latest()->paginate($perPage, ['*'], 'page', $page);

        return response()->json([
            'data' => new FarmerPublicResource($farmer),
            'reviews' => [
                'data' => FarmerReviewResource::collection($reviews->items()),
                'pagination' => [
                    'total' => $reviews->total(),
                    'per_page' => $reviews->perPage(),
                    'current_page' => $reviews->currentPage(),
                    'last_page' => $reviews->lastPage(),
                    'next_page_url' => $reviews->nextPageUrl(),
                    'prev_page_url' => $reviews->previousPageUrl(),
                ]
            ]
        ]);
    }

    public function create(RegisterFarmer $request)
    {
        $user = User::where('email', $request->input('email'))->first();

        $profileImagePath = $request->file('profile_image')->store('profile_images', 'public');

        if (!$user) {
            return response()->json([
                'error' => 'User not found.'
            ], 404);
        }

        $farmer = Farmer::create([
            'user_id' => $user->id,
            'name' => $request->input('farm_name'),
            'location' => $request->input('farm_location'),
            'description' => $request->input('farm_description'),
            'practices' => $request->input('growing_practices'),
            'certifications' => json_encode($request->input('certifications')),
            'primary_products' => $request->input('primary_products') ?? null,
            'seasonal_availability' => $request->input('seasonal_availability') ?? null,
            'delivery_options' => $request->input('delivery_options') ?? null,
            'delivery_locations' => json_encode($request->input('delivery_locations')),
            'profile_image' => $profileImagePath,
            'social_links' => json_encode($request->input('social_links') ?? []),
            'notes' => $request->input('notes') ?? null,
        ]);

        return response()->json([
            'message' => 'Farmer created successfully!',
            'data' => new FarmerResource($farmer)
        ], 201);
    }

    public function update(UpdateFarmerRequest $request, $id)
    {
        $farmer = Farmer::findOrFail($id);

        if ($request->hasFile('profile_image')) {
            $profileImagePath = $request->file('profile_image')->store('profile_images', 'public');
            $farmer->profile_image = $profileImagePath;
        }

        $farmer->update([
            'name' => $request->input('farm_name', $farmer->name),
            'location' => $request->input('farm_location', $farmer->location),
            'description' => $request->input('farm_description', $farmer->description),
            'practices' => $request->input('growing_practices', $farmer->practices),
            'certifications' => json_encode($request->input('certifications', json_decode($farmer->certifications, true))),
            'primary_products' => $request->input('primary_products', $farmer->primary_products),
            'seasonal_availability' => $request->input('seasonal_availability', $farmer->seasonal_availability),
            'delivery_options' => $request->input('delivery_options', $farmer->delivery_options),
            'delivery_locations' => json_encode($request->input('delivery_locations', json_decode($farmer->delivery_locations, true))),
            'social_links' => json_encode($request->input('social_links', json_decode($farmer->social_links, true))),
            'notes' => $request->input('notes', $farmer->notes),
        ]);

        return response()->json([
            'message' => 'Farmer profile updated successfully.',
            'data' => new FarmerResource($farmer)
        ]);
    }

    public function myProfile(Request $request)
    {
        $user = $request->get('authenticated_user');
        $farmer = Farmer::where('user_id', $user->id)->first();

        if (!$farmer) {
            return response()->json(['error' => 'Farmer profile not found'], 404);
        }

        return response()->json([
            'data' => new FarmerResource($farmer),
        ], 200);
    }

    public function search(Request $request)
    {
        $query = Farmer::query();

        if ($request->filled('location')) {
            $query->where('location', 'LIKE', '%' . $request->input('location') . '%');
        }

        if ($request->filled('product')) {
            $query->where('primary_products', 'LIKE', '%' . $request->input('product') . '%');
        }

        if ($request->filled('certification')) {
            $query->whereJsonContains('certifications', $request->input('certification'));
        }

        if ($request->filled('available_in')) {
            $month = strtolower($request->input('available_in'));
            $query->where('seasonal_availability', 'LIKE', '%' . $month . '%');
        }

        // Optional pagination
        $perPage = $request->input('per_page', 20);
        $farmers = $query->with('produce.images')->paginate($perPage);

        return response()->json([
            'data' => FarmerPublicResource::collection($farmers->items()),
            'pagination' => [
                'total' => $farmers->total(),
                'per_page' => $farmers->perPage(),
                'current_page' => $farmers->currentPage(),
                'last_page' => $farmers->lastPage(),
                'next_page_url' => $farmers->nextPageUrl(),
                'prev_page_url' => $farmers->previousPageUrl(),
            ],
        ]);
    }

    public function checkFarmerAuth(Request $request)
    {
        return response()->json([
            'authenticated' => true,
            'role' => 'farmer',
        ], 200);
    }

    public function getFarmerProducts(Request $request, $farmerId)
    {
        $perPage = $request->input('data_per_page', 20);
        $page = $request->input('page', 1);


        $produce = Produce::where('farmer_id', $farmerId)->with('images')->paginate($perPage, ['*'], 'page', $page);


        return response()->json([
            'data' => ProduceResource::collection($produce->items()),
            'pagination' => [
                'total' => $produce->total(),
                'per_page' => $produce->perPage(),
                'current_page' => $produce->currentPage(),
                'last_page' => $produce->lastPage(),
                'next_page_url' => $produce->nextPageUrl(),
                'prev_page_url' => $produce->previousPageUrl(),
            ]
        ], 200);
    }

    public function getFarmerReviews(Request $request, $farmerId)
    {
        $perPage = $request->input('data_per_page', 10);
        $page = $request->input('page', 1);

        $reviews = FarmerReview::where('farmer_id', $farmerId)
            ->with('images') // assuming you have images relationship
            ->latest()
            ->paginate($perPage, ['*'], 'page', $page);

        return response()->json([
            'data' => FarmerDetailReviewResource::collection($reviews->items()),
            'pagination' => [
                'total' => $reviews->total(),
                'per_page' => $reviews->perPage(),
                'current_page' => $reviews->currentPage(),
                'last_page' => $reviews->lastPage(),
                'next_page_url' => $reviews->nextPageUrl(),
                'prev_page_url' => $reviews->previousPageUrl(),
            ],
        ], 200);
    }

    public function getFarmerDetails($id)
    {
        $farmer = Farmer::findOrFail($id);

        // Number of produces from farmer_subscription_plans
        $produceCount = Produce::where('farmer_id', $id)->count();

        // Number of unique users subscribed to this farmer
        $subscriberCount = SubscriptionPlan::where('farmer_id', $id)->distinct('user_id')->count('user_id');

        return response()->json([
            'id' => $farmer->id,
            'name' => $farmer->name,
            'description' => $farmer->description,
            'profile_image' => $farmer->profile_image,
            'produce_count' => $produceCount,
            'subscriber_count' => $subscriberCount,
            'latitude' => $farmer->latitude,
            'longitude' => $farmer->longitude,
        ]);
    }

    public function templates()
    {
        return response()->json([
            'templates' => SubscriptionPlanTemplate::all()
        ]);
    }

    public function attachTemplate(FarmerAttachPlanRequest $request)
    {
        $farmer = $request->get('farmer');
        $validated = $request->validated();

        if (isset($validated['produce_id']) && !$farmer->produce()->where('id', $validated['produce_id'])->exists()) {
            return response()->json(['message' => 'Invalid produce selection.'], 403);
        }

        $exists = FarmerSubscriptionPlan::where('farmer_id', $farmer->id)
            ->where('subscription_plan_template_id', $validated['template_id'])
            ->when($validated['produce_id'] ?? null, function ($query, $produceId) {
                return $query->where('produce_id', $produceId);
            })
            ->exists();

        if ($exists) {
            return response()->json(['message' => 'You already offer this plan for that produce.'], 409);
        }

        // ✅ Create plan
        $plan = FarmerSubscriptionPlan::create([
            'farmer_id' => $farmer->id,
            'subscription_plan_template_id' => $validated['template_id'],
            'produce_id' => $validated['produce_id'] ?? null,
            'is_active' => true
        ]);

        return response()->json([
            'message' => 'Plan attached successfully.',
            'data' => new FarmerSubscriptionPlanResource($plan->load(['template', 'produce']))
        ], 201);
    }

}
