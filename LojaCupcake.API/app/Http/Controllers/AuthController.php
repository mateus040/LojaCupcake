<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\Auth\{
    LoginRequest,
    RegisterRequest,
};
use App\Http\Resources\User\Auth\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\{
    Auth,
    Hash,
};

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $validated = $request->validated();

        User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => $validated['password'],
        ]);

        return response()->json([
            'message' => 'User created successfully!',
        ], 201);
    }

    public function login(LoginRequest $request)
    {
        $validated = $request->validated();

        $user = User::where('email', $validated['email'])->first();

        $isValidLogin = $user && Hash::check($validated['password'], $user->password);

        if (!$isValidLogin) {
            return response()->json([
                'message' => 'Invalid credentials.'
            ], 401);
        }


        $token = $user->createToken('api')->plainTextToken;

        return response()->json([
            'token' => $token
        ], 200);
    }

    public function me()
    {
        $user = Auth::user();

        return new UserResource($user);
    }

    // TODO: update (com os campos de endereço)
}
