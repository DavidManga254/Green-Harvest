<?php

namespace App\Http\Controllers\Cart;

use App\Http\Controllers\Controller;
use App\Http\Requests\Cart\CartRequest;
use App\Http\Requests\Cart\CartUpdate;
use App\Http\Resources\Cart\CartResource;
use App\Models\cart\Cart;
use App\Models\cart\CartItem;
use App\Models\Produce\Produce;
use App\Models\User\User;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function index(Request $request)
    {
        $authenticatedUser = $request->get('authenticated_user');

        $userCart = Cart::where('user_id', $authenticatedUser->id)->with('cartItems.produce.images')->first();

        $cartItems = $userCart->cartItems;

        return response()->json([
            'cart_items' => CartResource::collection($cartItems)
        ], 200);
    }


    public function viewCart(Request $request)
    {
        $authenticatedUser = $request->get('authenticated_user');

        $userCart = Cart::where('user_id', $authenticatedUser->id)->with('cartItems.produce')->first();

        $totalItems = $userCart->cartItems->sum('quantity');
        $totalPrice = $userCart->cartItems->sum(function ($item) {
            return $item->quantity * $item->price;
        });

        return response()->json([
            'total_items' => $totalItems,
            'total_price' => number_format($totalPrice, 2),
        ], 200);
    }

    public function addToCart(CartRequest $request)
    {
        $authenticatedUser = $request->get('authenticated_user');
        $cart =  Cart::where('user_id', $authenticatedUser->id)->first();

        $produce = Produce::where('id', $request->produceId)->first();
        $cartItem = $cart->cartItems()->where('produce_id', $produce->id)->first();

        if ($cartItem) {
            $cartItem->quantity += $request->quantity;
            $cartItem->save();
        } else {
            CartItem::create([
                'cart_id' => $cart->id,
                'produce_id' => $produce->id,
                'quantity' => $request->quantity,
                'price' => $produce->price_per_unit,
            ]);
        }

        return response()->json(['message' => 'Item added to cart successfully'], 200);
    }

    public function removeCartItem(Request $request, $cartItemId)
    {
        $authenticatedUser = $request->get('authenticated_user');
        $cart =  Cart::where('user_id', $authenticatedUser->id)->first();

        $userCartItem = CartItem::where('cart_id', $cart->id)->where('id', $cartItemId)->first();

        if (!$userCartItem) {
            return response()->json([
                'message' => 'item does not exist'
            ], 404);
        }

        $userCartItem->delete();

        return response()->json(['message' => 'Item removed from cart']);
    }

    public function clearCart(Request $request)
    {
        $authenticatedUser = $request->get('authenticated_user');
        $cart =  Cart::where('user_id', $authenticatedUser->id)->first();

        if (!$cart) {
            return response()->json(['message' => 'Cart does not exist'], 404);
        }

        $cart->cartItems()->delete();

        return response()->json(['message' => 'Cart cleared successfully'], 200);
    }

    public function updateCartItem(CartUpdate $request, $id)
    {
        $authenticatedUser = $request->get('authenticated_user');

        $cart =  Cart::where('user_id', $authenticatedUser->id)->first();

        $cartItem = CartItem::where('cart_id', $cart->id)->where('id', $id)->first();

        if ($request->get('quantity') == 0) {
            $cartItem->delete();
            return response()->json(['message' => 'Item removed from cart']);
        }

        $cartItem->quantity = $request->quantity;
        $cartItem->save();

        return response()->json(['message' => 'Cart updated successfully', 'cart_item' => $cartItem]);
    }
}
