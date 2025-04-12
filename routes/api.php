<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| None protected routes
|--------------------------------------------------------------------------
*/


Route::post('/register', 'User\UserController@register');
Route::post('/register/confirmEmail', 'User\UserController@confirmEmail');
Route::post('/login', 'User\UserController@login');


Route::middleware(['userAuth'])->group(function () {
    //farmer
    Route::get('/farmers', 'Farmer\FarmerController@index');
    Route::post('/farmers', 'Farmer\FarmerController@create');
    Route::get('/farmers/{id}', 'Farmer\FarmerController@show');
    Route::get('/farmers/search', 'Farmer\FarmerController@search');
    // GET /api/farmers/search?location=Nairobi&product=Tomatoes&certification=Organic&available_in=July


    //produce
    Route::get('/produce', 'Produce\ProduceController@index');
    Route::get('/produce/{id}', 'Produce\ProduceController@show');

    //produce farmer only access
    Route::middleware(['farmerAuth'])->group(function () {
        Route::post('/farmer/produce/create', 'Produce\ProduceController@create');
        Route::delete('/farmer/produce/delete/{id}', 'Produce\ProduceController@delete');
        Route::get('/farmer/produce', 'Produce\ProduceController@getFarmerProduce');

        Route::put('/farmers/{id}', 'Farmer\FarmerController@update');
        Route::get('/farmers/me', 'Farmer\FarmerController@myProfile');
        Route::get('/farmers/me/check-auth', 'Farmer\FarmerController@checkFarmerAuth');

        Route::get('/farmers/orders', 'Farmer\DashboardController@orders');
        Route::get('/farmers/earnings', 'Farmer\DashboardController@earnings');
        Route::get('/farmers/inventory', 'Farmer\DashboardController@inventory');
    });

    Route::get('/cart', 'Cart\CartController@viewCart');
    Route::get('/cart/items', 'Cart\CartController@index');
    Route::post('/cart/add', 'Cart\CartController@addToCart');
    Route::put('/cart/update/{cartItemId}', 'Cart\CartController@updateCartItem');
    Route::delete('/cart/remove/{cartItemId}', 'Cart\CartController@removeCartItem');
    Route::delete('/cart/clear', 'Cart\CartController@clearCart');

    Route::post('/orders', 'Order\OrderController@placeOrder');
    Route::get('/orders', 'Order\OrderController@orderHistory');
    Route::get('/orders/{id}', 'Order\OrderController@getOrder');
    Route::patch('/orders/{id}/status', 'Order\OrderController@updateOrderStatus');

    Route::get('/users/farmers/nearby', 'User\UserController@findNearbyFarmers');
    Route::post('/users/farmers/review', 'User\UserController@submitFarmerReview');
});
