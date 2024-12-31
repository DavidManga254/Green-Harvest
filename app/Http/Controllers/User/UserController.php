<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\User\Register;
use App\Mail\Register\Register as SignUpRegister;
use App\Models\User\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class UserController extends Controller
{
    //

    public function register(Register $request)
    {

        $password = Hash::make($request->input('password'));
        $userEmail = $request->input('email');
        $username = $request->input('name');
        $token = Str::random(40);

        User::create([
            'name' => $username,
            'email' => $request->input('email'),
            'password' => $password,
            'phone' => $request->input('phone'),
            'role' => $request->input('role'),
            'address' => $request->input('address'),
            'token' => $token
        ]);


        Mail::to($userEmail)->send(new SignUpRegister($token, $userEmail, $username));

        return response()->json([
            'message' => 'Confirm email address',
        ], 201);
    }
}