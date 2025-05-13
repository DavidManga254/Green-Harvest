<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Farmer\SubmitFarmerReview;
use App\Http\Requests\User\ConfirmEmail;
use App\Http\Requests\User\FindFarmerRequest;
use App\Http\Requests\User\login;
use Illuminate\Http\Request;
use App\Http\Requests\User\Register;
use App\Http\Requests\User\sendcontactMessage;
use App\Http\Requests\User\UserSubscribeRequest;
use App\Http\Resources\Farmer\FarmerMapMarkerResource;
use App\Http\Resources\Farmer\FarmerReviewResource;
use App\Http\Resources\FarmerSubscription\FarmerSubscriptionPlanDetailResource;
use App\Http\Resources\FarmerSubscription\FarmerSubscriptionPlanResource;
use App\Http\Resources\User\UserSubscriptionResource;
use App\Http\Resources\User\UserSubscriptionResourcee;
use App\Mail\ContactMessage;
use App\Mail\Register\Register as SignUpRegister;
use App\Models\cart\Cart;
use App\Models\Farmer\Farmer;
use App\Models\Farmer\FarmerReview;
use App\Models\Subscription\FarmerSubscriptionPlan;
use App\Models\Subscription\Subscription;
use App\Models\Subscription\SubscriptionPlan;
use App\Models\User\User;
use Carbon\Carbon;
use Firebase\JWT\JWT;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\DB;
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

                //create user cart if it does not exist
                $cart = Cart::where('user_id', $user->id)->first();

                if (!$cart) {
                    Cart::create([
                        'user_id' => $user->id
                    ]);
                }

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




    public function checkFarmerAuth() {}




    private function createCookie($jwt)
    {
        return  cookie(
            env('APP_COOKIE_NAME'),
            $jwt,
            config('constants.cookie_lifetime'),
            null,
            env('APP_DEV_ENVIRONMENT') ? "" : env('SESSION_DOMAIN'),
            // env('APP_ENV') === 'production',
            true,
            true,
            false,
            env('APP_DEV_ENVIRONMENT') ? "none" : 'strict'
        );
    }

    public function nearby(Request $request)
    {
        $lat = $request->query('latitude');
        $lng = $request->query('longitude');
        $radius = $request->query('radius', 50);

        DB::enableQueryLog();
        $farmers = $this->getFarmersWithinRadius($lat, $lng, $radius);

        // dd(DB::getQueryLog());
        // dd($farmers);

        return response()->json(FarmerMapMarkerResource::collection($farmers));
    }


    public function submitFarmerReview(SubmitFarmerReview $request)
    {
        $user = $request->get('authenticated_user');

        $review = FarmerReview::updateOrCreate(
            [
                'user_id' => $user->id,
                'farmer_id' => $request->farmer_id,
            ],
            [
                'rating' => $request->rating,
                'comment' => $request->comment,
            ]
        );

        return response()->json([
            'message' => 'Review submitted successfully!',
            'data' => new FarmerReviewResource($review)
        ], 201);
    }

    public function availablePlans($farmerId)
    {
        $query = FarmerSubscriptionPlan::with('template', 'produce', 'farmer.user')
            ->where('is_active', true);

        if ($farmerId) {
            $query->where('farmer_id', $farmerId);
        }

        $plans = $query->get();

        return response()->json([
            'plans' => FarmerSubscriptionPlanResource::collection($plans)
        ]);
    }

    public function show($id)
    {
        $plan = FarmerSubscriptionPlan::with([
            'template',
            'produce',
            'items',
            'farmer.user',
            'reviews.user',
        ])->findOrFail($id);

        return response()->json([
            'plan' => new FarmerSubscriptionPlanDetailResource($plan)
        ]);
    }

    public function getUserSubscriptions(Request $request)
    {
        $user = $request->authenticated_user;

        $subscriptions = SubscriptionPlan::with(['template.farmerSubscriptionPlans', 'farmer.user'])
            ->where('user_id', $user->id)
            ->orderByDesc('created_at')
            ->get();

        return response()->json([
            'subscriptions' => UserSubscriptionResourcee::collection($subscriptions),
        ]);
    }



    // public function subscribe(UserSubscribeRequest $request)
    // {
    //     $user = $request->get('user');

    //     $validated = $request->validated();

    //     $existing = Subscription::where([
    //         'user_id' => $user->id,
    //         'farmer_subscription_plan_id' => $validated['farmer_plan_id'],
    //         'is_active' => true
    //     ])->exists();

    //     if ($existing) {
    //         return response()->json(['message' => 'You are already subscribed to this plan.'], 409);
    //     }

    //     $subscription = Subscription::create([
    //         'user_id' => $user->id,
    //         'farmer_subscription_plan_id' => $validated['farmer_plan_id'],
    //         'payment_mode' => $validated['payment_mode'],
    //         'start_date' => $validated['start_date'],
    //         'next_billing_date' => $validated['payment_mode'] === 'recurring'
    //             ? now()->parse($validated['start_date'])->addMonth()
    //             : null,
    //         'is_active' => true
    //     ]);


    //     return response()->json([
    //         'message' => 'Subscription successful.',
    //         'data' => new UserSubscriptionResource($subscription->load('farmerSubscriptionPlan.template'))
    //     ], 201);
    // }

    public function sendContactMessage(sendcontactMessage $request)
    {
        $validated = $request->validated();

        Mail::to('mangadavid2@gmail.com')->send(new ContactMessage($validated));

        return response()->json(['message' => 'Message sent successfully!']);
    }

    private function getFarmersWithinRadius($lat, $lng, $radius = 50)
    {
        return Farmer::select('*')
            ->selectRaw("(
                6371 * acos(
                    cos(radians(?)) *
                    cos(radians(latitude)) *
                    cos(radians(longitude) - radians(?)) +
                    sin(radians(?)) *
                    sin(radians(latitude))
                )
            ) AS distance", [$lat, $lng, $lat])
            ->having("distance", "<=", $radius)
            ->orderBy("distance")
            ->get();
    }


}