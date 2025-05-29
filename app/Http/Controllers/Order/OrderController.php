<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use App\Http\Requests\Order\PlaceOrderRequest;
use App\Http\Resources\Order\OrderResource;
use App\Models\Order\Order;
use App\Models\Order\OrderItem;
use App\Models\Order\OrderStatus;
use App\Models\Order\UserOrder;
use App\Models\Produce\Produce;
use App\Models\User\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function placeOrder(PlaceOrderRequest $request)
    {
        $authenticatedUser = $request->input('authenticated_user');

        $user = User::where('email', $authenticatedUser->email)->firstOrFail();

        $items = $request->get_item('items');

        DB::beginTransaction();

        try {
            // Calculate total price
            $total_price = 0;
            foreach ($items as $item) {
                $produce = Produce::findOrFail($item['produce_id']);
                $total_price += $produce->price_per_unit * $item['quantity'];
            }

            // Apply discount safely
            $discount = $request->input('discount', 0);
            if ($discount > 100 || $discount < 0) {
                return response()->json(['error' => 'Invalid discount value'], 400);
            }
            $total_price -= ($total_price * ($discount / 100));

            // Create order
            $order = Order::create([
                'user_id' => $user->id,
                'total_price' => max($total_price, 0),
                'payment_method' => $request->input('payment_method'),
                'status' => 'order_received',
            ]);

            // Insert items
            foreach ($items as $item) {
                OrderItem::create([
                    'order_id' => $order->id,
                    'produce_id' => $item['produce_id'],
                    'quantity' => $item['quantity'],
                    'price' => Produce::findOrFail($item['produce_id'])->price_per_unit,
                ]);
            }

            // Add status record
            OrderStatus::create([
                'order_id' => $order->id,
                'status' => 'order_received',
            ]);

            DB::commit();

            return response()->json(['message' => 'Order placed successfully!', 'order_id' => $order->id], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => 'Failed to place order', 'details' => $e->getMessage()], 500);
        }
    }

    /**
     * Retrieve order history.
     */
    public function orderHistory(Request $request)
    {
        $authenticatedUser = $request->get('authenticated_user');

        $user = User::where('email', $authenticatedUser->email)->firstOrFail();

        $orders = $user->orders()
                    ->with('items.produce.images')
                    ->orderBy('created_at', 'desc')
                    ->paginate($request->input('data_per_page', 10));

        if ($orders->isEmpty()) {
            return response()->json(['message' => 'No orders found'], 404);
        }

        return response()->json([
            'data' => OrderResource::collection($orders),
            'pagination' => [
                'current_page' => $orders->currentPage(),
                'last_page' => $orders->lastPage(),
                'total' => $orders->total(),
                'per_page' => $orders->perPage(),
            ],
        ], 200);
    }

    /**
     * Get order details.
     */
    public function getOrder(Request $request, $id)
    {
        $authenticatedUser = $request->get('authenticated_user');

        $order = UserOrder::where('id', $id)
            ->where('user_id', $authenticatedUser->id)
            ->with([
                'items.produce.images',
                'statuses' => fn($q) => $q->orderBy('updated_at') ,// 👈 load status history
                'user',
                'billingAddress'
            ])
            ->first();

        if (!$order) {
            return response()->json(['error' => 'Order not found or unauthorized'], 404);
        }

        return response()->json([
            'order_details' => new OrderResource($order)
        ], 200);
    }


    // /**
    //  * Update order status.
    //  */
    public function updateOrderStatus(Request $request, $id)
    {
        $authenticatedUser = $request->get('authenticated_user');

        $order = Order::where('id', $id)
            ->where('user_id', $authenticatedUser->id)
            ->firstOrFail();

        if ($order->status === $request->status) {
            return response()->json(['message' => 'Order is already in this status'], 200);
        }

        $order->update(['status' => $request->status]);

        OrderStatus::create([
            'order_id' => $id,
            'status' => $request->status
        ]);

        return response()->json(['message' => 'Order status updated successfully!'], 200);
    }

    public function getFarmerOrders(Request $request)
    {
        $farmer = $request->get('farmer');

        // Base query with relationships
        $query = UserOrder::where('farmer_id', $farmer->id)
            ->with([
                'user',
                'items.produce',
                'statuses',
                'billingAddress'
            ]);

        // Handle Refine filters
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

        // Handle Refine sorters
        $sorters = $request->input('sorters', []);
        foreach ($sorters as $sort) {
            $query->orderBy($sort['field'], $sort['order'] ?? 'asc');
        }

        // Handle pagination
        $page = (int) $request->input('page', 1);
        $perPage = (int) $request->input('perPage', 10);
        $paginator = $query->paginate($perPage, ['*'], 'page', $page);

        // Return response in Refine-compatible format
        return response()->json([
            'data' => $paginator->items(),
            'total' => $paginator->total(),
            'current' => $paginator->currentPage(),
            'pageSize' => $paginator->perPage(),
        ]);

    }

    public function update(Request $request, $id)
    {
        $order = UserOrder::findOrFail($id);
        $order->status = $request->input('status');
        $order->save();

        return response()->json(['data' => $order]);
    }



    public function showFarmerOrder(Request $request, $id)
    {
        $farmer = $request->farmer;

        $order = UserOrder::with([
            'user:id,name,email,phone',
            'billingAddress',
            'items.produce.images',
            'statuses' => fn($q) => $q->orderBy('created_at'),
        ])
            ->where('farmer_id', $farmer->id)
            ->where('id', $id)
            ->first();

        if (!$order) {
            return response()->json(['error' => 'Order not found or access denied'], 404);
        }

        return response()->json([
            'data' => $order,
        ]);
    }




}
