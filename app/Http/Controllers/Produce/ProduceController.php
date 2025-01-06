<?php

namespace App\Http\Controllers\Produce;

use App\Http\Controllers\Controller;
use App\Http\Requests\Produce\ProduceCreate;
use App\Http\Resources\Produce\ProduceDetailResource;
use App\Http\Resources\Produce\ProduceResource;
use App\Models\Produce\Produce;
use Illuminate\Http\Request;

class ProduceController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->input('data_per_page', 20);
        $page = $request->input('page', 1);


        $produce = Produce::with('images')->paginate($perPage, ['*'], 'page', $page);


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

    public function create(ProduceCreate $request) {}

    public function show($id)
    {
        $produce = Produce::where('id', $id)->with('images')->with('tags')->with('reviews.user')->with('category')->first();

        if (!$produce) {
            return response()->json([
                'message' => 'Product not found',
            ], 404);
        }



        return response()->json([
            'data' => new ProduceDetailResource($produce),
        ], 200);
    }

    public function delete(Request $request, $id)
    {
        $user = $request->input('user');

        $produce = Produce::where('user_id', $user->id)->where('id', $id)->first();

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
}
