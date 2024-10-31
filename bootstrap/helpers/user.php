<?php

use App\Models\User;
use Illuminate\Support\Facades\Auth;

if (! function_exists('user')) {
    function user(string $guard = 'web'): ?User
    {
        return Auth::guard($guard)->check() ?
            Auth::guard($guard)->user() :
            null;
    }
}

if (! function_exists('isLoggedIn')) {
    function isLoggedIn(string $guard = 'web'): bool
    {
        return ! empty(user($guard));
    }
}

if (! function_exists('userId')) {
    function userId(string $guard = 'web'): ?int
    {
        $user = user($guard);

        return ! empty($user) ? $user->id : null;
    }
}
