<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\VerifyEmailNoticeController;

Route::prefix(config('settings.prefix'))->group(function () {
    Route::middleware('guest')->name('auth.')->group(function () {
        Route::get('login', [LoginController::class, 'show'])->name('login');
        Route::post('login', [LoginController::class, 'store'])->name('login.store');

        Route::get('forgot-password', [ForgotPasswordController::class, 'show'])->name('forgot-password');
        Route::post('forgot-password', [ForgotPasswordController::class, 'store'])->name('forgot-password.store');

        Route::get('reset-password', [ResetPasswordController::class, 'show'])->name('reset-password');
        Route::post('reset-password', [ResetPasswordController::class, 'store'])->name('reset-password.store');
    });

    Route::middleware('auth')->group(function () {
        Route::get('/', DashboardController::class)->name('dashboard');


        Route::delete('logout', LogoutController::class)->name('auth.logout');
        Route::middleware('signed')->get('email-verification/{id}/{hash}', [VerifyEmailController::class, 'show'])->name('verification.verify');
        Route::post('email-verification', [VerifyEmailController::class, 'store'])->name('verification.send');
        Route::get('email-verification-required', VerifyEmailNoticeController::class)->name('verification.notice');
    });
});
