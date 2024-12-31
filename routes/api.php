<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| None protected routes
|--------------------------------------------------------------------------
*/


Route::post('/register', 'User\UserController@register');