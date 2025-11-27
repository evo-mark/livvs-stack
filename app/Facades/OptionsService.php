<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @method static bool seed(string $field, mixed $defaultValue, bool $isPublic, ?string $type, ?Illuminate\Database\Eloquent\Model $optionable, ?string $description, ?array $inputOptions)
 * @method static mixed get(string $field, mixed $defaultValue, ?Illuminate\Database\Eloquent\Model $optionable)
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
