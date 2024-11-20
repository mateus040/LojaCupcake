<?php

use App\Http\Controllers\{
    AuthController,
    CartController,
    CupcakeController,
};
use Illuminate\Support\Facades\Route;

Route::prefix('/auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);

    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/me', [AuthController::class, 'me']);
    });
});

Route::middleware('auth:sanctum')->group(function () {
    Route::prefix('/cupcakes')->group(function () {
        Route::get('/', [CupcakeController::class, 'index']);
        Route::post('/', [CupcakeController::class, 'store']);
        Route::get('/{cupcake}', [CupcakeController::class, 'show']);
        Route::put('/{cupcake}', [CupcakeController::class, 'update']);
        Route::delete('/{cupcake}', [CupcakeController::class, 'destroy']);

        Route::prefix('/{cupcake}/cart')->group(function () {
            Route::post('/', [CartController::class, 'addItemCart']);
            Route::delete('/', [CartController::class, 'removeFromCart']);
            Route::post('/increase', [CartController::class, 'increaseQuantity']);
            Route::post('/decrease', [CartController::class, 'decreaseQuantity']);
        });
    });

    Route::get('/cart', [CartController::class, 'index']);
});
