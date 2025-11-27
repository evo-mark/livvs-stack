<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @method static void get(string $postcode)
 * @method static void findAddress(string $postcode)
 *
 * @see \App\Services\AddressSearchService
 */
class AddressSearchService extends Facade
{
    /**
     * @return string
     */
    protected static function getFacadeAccessor(): string
    {
        return \App\Services\AddressSearchService::class;
    }
}
