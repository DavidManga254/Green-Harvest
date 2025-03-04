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


    //produce
    Route::get('/produce', 'Produce\ProduceController@index');
    Route::get('/produce/{id}', 'Produce\ProduceController@show');

    //produce farmer only access
    Route::middleware(['farmerAuth'])->group(function () {
        Route::post('/produce', 'Produce\ProduceController@create');
        Route::delete('/produce/{id}', 'Produce\ProduceController@delete');
    });

    Route::get('/cart', 'Cart\CartController@viewCart');
    Route::get('/cart/items', 'Cart\CartController@index');
    Route::post('/cart/add', 'Cart\CartController@addToCart');
    // Route::put('/cart/update/{cartItemId}', [CartController::class, 'updateCartItem']);
    Route::delete('/cart/remove/{cartItemId}', 'Cart\CartController@removeCartItem');
    Route::delete('/cart/clear', 'Cart\CartController@clearCart');
});
