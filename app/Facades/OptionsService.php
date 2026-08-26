<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @method static bool seed(string $field, mixed $defaultValue, bool $isPublic = false, ?string $type = null, ?Illuminate\Database\Eloquent\Model $optionable = null, ?string $description = null, ?array $inputOptions = null)
 * @method static mixed get(string $field, mixed $defaultValue = null, ?Illuminate\Database\Eloquent\Model $optionable = null)
 * @method static \Illuminate\Support\Collection loadPublicOptions()
 *
 * @see \App\Services\OptionsService
 */
class OptionsService extends Facade
{
    protected static function getFacadeAccessor()
    {
        return \App\Services\OptionsService::class;
    }
}
