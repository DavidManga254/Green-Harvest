<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| None protected routes
|--------------------------------------------------------------------------
*/


Route::post('/register', 'User\UserController@register');
Route::post('/register/confirmEmail', 'User\UserController@confirmEmail');
Route::post('/login', 'User\UserController@login');


Route::middleware(['userAuth'])->group(function () {});
