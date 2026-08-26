<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @method static void send(string $text, ?string $title = null, ?string $type = 'success')
 * @method static void success(string $text, ?string $title = null)
 * @method static void warning(string $text, ?string $title = null)
 * @method static void info(string $text, ?string $title = null)
 * @method static void error(string $text, ?string $title = null)
 *
 * @see \App\Services\FlashService
 */
class FlashService extends Facade
{
    /**
     * Get the registered name of the component.
     */
    protected static function getFacadeAccessor(): string
    {
        return \App\Services\FlashService::class;
    }
}
