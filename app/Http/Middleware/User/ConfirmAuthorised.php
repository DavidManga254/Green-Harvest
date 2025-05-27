<?php

namespace App\Http\Middleware\User;

use App\Models\User\User;
use Closure;
use ErrorException;
use Firebase\JWT\JWT;
use Illuminate\Http\Request;
use Firebase\JWT\Key;
use Symfony\Component\HttpFoundation\Response;

use function PHPUnit\Framework\returnCallback;

class ConfirmAuthorised
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

//         return response()->json([
//     'method' => $request->method(),
//     'url' => $request->fullUrl(),
//     'headers' => $request->headers->all(),
//     'cookies' => $request->cookies->all(),
//     'query' => $request->query(),
//     'body' => $request->all(),
//     'ip' => $request->ip(),
//     'server' => $request->server(), // optional: raw server data ($_SERVER)
// ], 200);


        $token = null;


        try {
            $token = $_COOKIE[env('APP_COOKIE_NAME')];
        } catch (ErrorException $e) {
            return response()->json([
                'message' => 'token name not found',
            ], 401);
        }

        if (!$token && $request->hasHeader('Authorization')) {
            $authHeader = $request->header('Authorization');

            if (str_starts_with($authHeader, 'Bearer ')) {
                $token = substr($authHeader, 7); // Remove "Bearer " prefix
            }
        }



        if ($token === null) {
            return response()->json([
                'message' => 'unauthorised, no token',
            ], 401);
        }



        try {
            $decodedToken = (array) JWT::decode($token, new Key(env('JWT_KEY'), 'HS256'));


            $user = User::where('email', $decodedToken['email'])->first();



            if ($user === null) {
                return response()->json([
                    'message' => 'unauthorised user',
                ], 401);
            }



            if ($user->email === $decodedToken['email'] && $user->name === $decodedToken['name']) {

                $request->merge(['authenticated_user' => $user]);

                $request->setUserResolver(function () use ($user) {
                    return $user;
                });

                return $next($request);
            } else {

                return response()->json([
                    'message' => 'unauthorised invalid user',
                ], 401);
            }
        } catch (\Firebase\JWT\ExpiredException $e) {
            return response()->json([
                'message' => 'Something went wrong',
            ], 500);
        }
    }
}
