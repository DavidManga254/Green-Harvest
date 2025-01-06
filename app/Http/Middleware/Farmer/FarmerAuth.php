<?php

namespace App\Http\Middleware\Farmer;

use App\Models\Farmer\Farmer;
use App\Models\User\User;
use Closure;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class FarmerAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        $token = $_COOKIE[env('APP_COOKIE_NAME')];

        $decodedToken = (array) JWT::decode($token, new Key(env('JWT_KEY'), 'HS256'));

        $user = User::where('email', $decodedToken['email'])->first();

        $farmer = Farmer::where('user_id', $user->id)->first();

        if ($farmer !== null) {
            $request->merge([
                'user' => $user
            ]);

            return $next($request);
        } else {
            return response()->json([
                'message' => 'unauthorised,not farmer',
            ], 401);
        }
    }
}
