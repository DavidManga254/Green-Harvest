<?php

namespace App\Http\Middleware;

use App\Models\User\User;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Firebase\JWT\Key;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class ChatAuthMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
//          return response()->json([
//     'method' => $request->method(),
//     'url' => $request->fullUrl(),
//     'headers' => $request->headers->all(),
//     'cookies' => $request->cookies->all(),
//     'query' => $request->query(),
//     'body' => $request->all(),
//     'ip' => $request->ip(),
//     'server' => $request->server(), // optional: raw server data ($_SERVER)
// ], 200);

        $token = $request->bearerToken(); // <== pulls from Authorization header

        if (!$token) {
            return response()->json(['message' => 'Unauthenticated.'], 401);
        }

        // Example JWT validation (you can swap this out)
        try {
            $payload = \Firebase\JWT\JWT::decode($token, new Key(env('JWT_KEY'), 'HS256'));


            $user = User::find($payload->id);


            if (!$user) {
                Log::warning('Token valid, but user not found', ['id_from_token' => $payload->id]);

                return response()->json(['message' => 'User not found.'], 401);
            }

            Auth::login($user);

            Log::info('Auth::login() success', ['user_id' => $user->id]);


        } catch (\Exception $e) {
            Log::error('JWT decode or login failed', ['error' => $e->getMessage()]);

            return response()->json(['message' => 'Invalid token.'], 401);
        }

        return $next($request);
    }
}
