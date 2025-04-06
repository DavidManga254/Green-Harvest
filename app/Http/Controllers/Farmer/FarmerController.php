<?php

namespace App\Http\Controllers\Farmer;

use App\Http\Controllers\Controller;
use App\Http\Requests\Farmer\RegisterFarmer;
use App\Http\Requests\Farmer\UpdateFarmerRequest;
use App\Http\Resources\Farmer\FarmerResource;
use App\Models\Farmer\Farmer;
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
        $farmer = Farmer::where('id', $id)->first();

        return response()->json([
            'data' => new FarmerResource($farmer),
        ], 200);
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
}
