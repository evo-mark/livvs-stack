<?php

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Timebox;

if (! function_exists('enum')) {
    function enum($maybeEnum): mixed
    {
        return $maybeEnum instanceof BackedEnum ? $maybeEnum->value : $maybeEnum;
    }
}

if (! function_exists('timebox')) {
    /**
     * Invoke the given callback within the specified timebox minimum.
     *
     * @template TCallReturnType
     *
     * @param  (callable($this): TCallReturnType)  $callback
     * @return TCallReturnType
     *
     * @throws \Throwable
     */
    function timebox(callable $callback, int $microseconds): mixed
    {
        $timebox = new Timebox;

        return $timebox->call($callback, $microseconds);
    }
}

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