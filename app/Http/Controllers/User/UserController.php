<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\ConfirmEmail;
use App\Http\Requests\User\login;
use Illuminate\Http\Request;
use App\Http\Requests\User\Register;
use App\Mail\Register\Register as SignUpRegister;
use App\Models\User\User;
use Carbon\Carbon;
use Firebase\JWT\JWT;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Symfony\Component\Console\Input\Input;

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

    public function confirmEmail(ConfirmEmail $request)
    {


        $email = $request->input('email');
        $token = $request->input('token');

        //user to confirm email
        $user = User::where('email', $email)->first();

        if ($user->token == $token) {
            $user->email_verified_at = Carbon::now();
            $user->token = null;
            $user->save();


            $now = Carbon::now();
            $expirationTime = $now->copy()->addDays(30)->timestamp;
            $userPayload = [
                "iat" => Carbon::now()->copy()->timestamp,
                "exp" => $expirationTime,
                "id" => $user->id,
                "name" => $user->name,
                "email" => $user->email
            ];
            $jwt = JWT::encode($userPayload, env('JWT_KEY'), 'HS256');

            $cookie = $this->createCookie($jwt);

            return response()->json([
                'message' => 'email confirmed',
            ], 201)->withCookie($cookie);
        } else {
            return response()->json([
                'message' => 'invalid token',
            ], 404);
        }
    }

    public function login(login $request)
    {
        $userEmail = $request->input('email');
        $password = $request->input('password');

        //user to login
        $user = User::where('email', $userEmail)->first();

        if ($user !== null) {
            if (Hash::check($password, $user->password)) {
                $now = Carbon::now();
                $expirationTime = $now->copy()->addDays(30)->timestamp;
                $userPayload = [
                    "iat" => Carbon::now()->copy()->timestamp,
                    "exp" => $expirationTime,
                    "id" => $user->id,
                    "name" => $user->name,
                    "email" => $user->email
                ];

                $jwt = JWT::encode($userPayload, env('JWT_KEY'), 'HS256');

                $cookie = $this->createCookie($jwt);

                return response()->json([
                    'message' => 'Logged In',
                ], 200)->withCookie($cookie);
            } else {
                return response()->json([
                    'message' => 'invalid credentials',
                ], 404);
            }
        } else {
            return response()->json([
                'message' => 'invalid credentials',
            ], 404);
        }
    }

    private function createCookie($jwt)
    {
        return  cookie(
            env('APP_COOKIE_NAME'),
            $jwt,
            config('constants.cookie_lifetime'),
            null,
            env('APP_DEV_ENVIRONMENT') ? "" : env('SESSION_DOMAIN'),
            env('APP_ENV') === 'production',
            true,
            false,
            env('APP_DEV_ENVIRONMENT') ? "none" : 'strict'
        );
    }
}
