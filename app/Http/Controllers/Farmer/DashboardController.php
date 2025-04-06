<?php

namespace App\Http\Controllers\Farmer;

use App\Http\Controllers\Controller;
use App\Http\Resources\Order\OrderResource;
use App\Http\Resources\Produce\ProduceResource;
use App\Models\Farmer\Farmer;
use App\Models\Order\Order;
use App\Models\Order\OrderItem;
use App\Models\Produce\Produce;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class DashboardController extends Controller
{
    public function orders(Request $request)
    {
        $user = $request->get('farmer');
        $farmer = Farmer::where('user_id', $user->id)->firstOrFail();

        $orders = Order::whereHas('items.produce', function ($query) use ($farmer) {
            $query->where('farmer_id', $farmer->id);
        })->with(['items.produce', 'user'])->latest()->get();

        return response()->json([
            'orders' => OrderResource::collection($orders)
        ]);
    }

    public function earnings(Request $request)
    {
        $user = $request->get('farmer');
        $farmer = Farmer::where('user_id', $user->id)->firstOrFail();

        $totalEarnings = OrderItem::whereHas('produce', function ($q) use ($farmer) {
            $q->where('farmer_id', $farmer->id);
        })->whereHas('order', fn($q) => $q->where('status', 'delivered'))
            ->sum(DB::raw('price * quantity'));

        return response()->json([
            'earnings' => $totalEarnings
        ]);
    }

    public function inventory(Request $request)
    {
        $user = $request->get('authenticated_user');
        $farmer = Farmer::where('user_id', $user->id)->firstOrFail();

        $products = Produce::where('farmer_id', $farmer->id)->get();

        $lowStock = $products->filter(fn($p) => $p->quantity <= 5);

        return response()->json([
            'products' => ProduceResource::collection($products),
            'alerts' => [
                'low_stock_count' => $lowStock->count(),
                'low_stock_items' => ProduceResource::collection($lowStock),
            ]
        ]);
    }
}
