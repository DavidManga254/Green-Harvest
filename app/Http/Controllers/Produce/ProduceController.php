<?php

namespace App\Http\Controllers\Produce;

use App\Http\Controllers\Controller;
use App\Http\Requests\Produce\ProduceCreate;
use App\Http\Requests\Produce\ProduceUpdate;
use App\Http\Resources\Produce\ProduceDetailResource;
use App\Http\Resources\Produce\ProduceResource;
use App\Http\Resources\Product\ProductReviewResource;
use App\Models\Produce\Produce;
use App\Models\Review\Review;
use Illuminate\Http\Request;

class ProduceController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->input('data_per_page', 20);
        $page = $request->input('page', 1);


        $produce = Produce::with('images')->with('farmer:id')->paginate($perPage, ['*'], 'page', $page);


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

    public function create(ProduceCreate $request)
    {
        $farmer = $request->get('farmer');

        $validated = $request->validated();

        $produce = Produce::create([
            'farmer_id' => $farmer->id,
            'name' => $validated['name'],
            'description' => $validated['description'],
            'price_per_unit' => $validated['price_per_unit'],
            'quantity' => $validated['quantity'],
            'is_on_sale' => $validated['is_on_sale'] ?? false,
            'discount' => $validated['discount'] ?? 0,
            'out_of_stock' => $validated['out_of_stock'] ?? false,
            'available_from' => $validated['available_from'],
            'available_to' => $validated['available_to'],
            'category_id' => $validated['category_id'],
        ]);

        if (!empty($validated['tags'])) {
            $produce->tags()->sync([]); // If you're saving tags in a pivot
            // Otherwise, it's already stored as JSON
        }

        if (!empty($validated['images']) && is_array($validated['images'])) {
    foreach ($validated['images'] as $url) {
        $produce->images()->create([
            'image_path' => $url,
        ]);
    }
}


        // if ($request->hasFile('images')) {
        //     foreach ($request->file('images') as $image) {
        //         $path = $image->store('produce_images', 'public');

        //         $produce->images()->create([
        //             'image_path' => $path,
        //         ]);
        //     }
        // }

        return response()->json([
            'message' => 'Produce created successfully!',
            'data' => new ProduceDetailResource($produce->load(['images', 'tags', 'category']))
        ], 201);
    }


    public function show($id)
    {
        $produce = Produce::where('id', $id)->with('images')->with('tags')->with(['farmer'])->with('category')->first();

        if (!$produce) {
            return response()->json([
                'message' => 'Product not found',
            ], 404);
        }

        return response()->json([
            'data' => new ProduceDetailResource($produce),
        ], 200);
    }

    public function getProductReviews(Request $request, $produceId)
    {
        $perPage = $request->query('per_page', 5);

        $reviews = Review::with('user')
            ->where('produce_id', $produceId)
            ->latest()
            ->paginate($perPage);

        return ProductReviewResource::collection($reviews);
    }


    public function delete(Request $request, $id)
    {
        $user = $request->input('user');

        $produce = Produce::where('farmer_id', $user->id)->where('id', $id)->first();

        if (!$produce) {
            return response()->json([
                'message' => 'Product not found or you do not have permission to delete it',
            ], 404);
        }

        $produce->delete();

        $produce->save();

        return response()->json([
            'message' => 'Product deleted',
        ], 200);
    }

    public function update(ProduceUpdate $request, $id)
    {
        $farmer = $request->get('farmer');
        $produce = Produce::where('farmer_id', $farmer->id)->where('id', $id)->first();

        if (!$produce) {
            return response()->json([
                'message' => 'Product not found or unauthorized',
            ], 404);
        }

        $validated = $request->validated();

        $produce->update($validated);

        return response()->json([
            'message' => 'Produce updated successfully!',
            'data' => new ProduceDetailResource($produce->load(['images', 'tags', 'category']))
        ]);
    }

    public function search(Request $request)
    {
        $query = $request->input('query') ?? $request->input('name');
        $perPage = $request->input('per_page') ?? $request->input('data_per_page', 10);
        $page = $request->input('page', 1);



        $produce = Produce::query()
            ->when($query, function ($q) use ($query) {
                $q->where('name', 'like', "%{$query}%")
                ->orWhere('description', 'like', "%{$query}%")
                ->orWhere('markdown_description', 'like', "%{$query}%");
            })
            ->with(['images', 'category', 'farmer.user'])
            ->orderBy('created_at', 'desc')
            ->paginate($perPage, ['*'], 'page', $page);

        return response()->json([
            'data' => ProduceResource::collection($produce->items())->resolve(),
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

    public function getFarmerProduce(Request $request)
    {
        $farmer = $request->get('farmer');

        $query = Produce::where('farmer_id', $farmer->id)->with('images', 'category', 'tags');

        // Filters
        $filters = $request->input('filters', []);
        foreach ($filters as $filter) {
            if (isset($filter['field'], $filter['operator'], $filter['value'])) {
                switch ($filter['operator']) {
                    case 'eq':
                        $query->where($filter['field'], $filter['value']);
                        break;
                    case 'ne':
                        $query->where($filter['field'], '!=', $filter['value']);
                        break;
                    case 'contains':
                        $query->where($filter['field'], 'like', '%' . $filter['value'] . '%');
                        break;
                    case 'gte':
                        $query->where($filter['field'], '>=', $filter['value']);
                        break;
                    case 'lte':
                        $query->where($filter['field'], '<=', $filter['value']);
                        break;
                }
            }
        }

        // Sorting
        $sorters = $request->input('sorters', []);
        foreach ($sorters as $sort) {
            $query->orderBy($sort['field'], $sort['order'] ?? 'asc');
        }

        // Pagination
        $page = (int) $request->input('page', 1);
        $perPage = (int) $request->input('perPage', 10);
        $paginator = $query->paginate($perPage, ['*'], 'page', $page);

        return response()->json([
            'data' => $paginator->items(),
            'total' => $paginator->total(),
        ]);
    }
}


// Core Farmer Module Features
// Farmer Registration & Profile

// Create and update farmer profile

// Upload/display profile picture

// Store farm location (latitude/longitude)

// Produce Management

// Add/edit/delete listed produce

// Stock levels and availability

// Images and categories

// Farmer Dashboard

// View orders received

// Earnings summary

// Active products and inventory alerts

// Order Fulfillment

// View orders placed by consumers

// Change status: "received", "processing", "on the way", "delivered"

// Map Integration (optional but powerful)

// Show farmer's location to consumers

// Show nearby delivery areas

// Public Profile

// Viewable by consumers, showing:

// Farmer name

// Profile image

// Listed produce

// Reviews or ratings (if applicable)
