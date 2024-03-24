<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::inertia('/home', 'Home')->name('home');

Route::middleware('guest')->prefix('auth')->name('auth.')->group(function () {
    Route::get('login', [LoginController::class, 'show'])->name('login');
    Route::post('login', [LoginController::class, 'store'])->name('login.store');
    
    Route::get('forgot-password', [ForgotPasswordController::class, 'show'])->name('forgot-password');
    Route::post('forgot-password', [ForgotPasswordController::class, 'store'])->name('forgot-password.store');

    Route::get('reset-password', [ResetPasswordController::class, 'show'])->name('reset-password');
    Route::post('reset-password', [ResetPasswordController::class, 'store'])->name('reset-password.store');
});

Route::middleware('auth')->prefix('auth')->name('auth.')->group(function() {
    Route::delete('logout', LogoutController::class)->name('logout');
});