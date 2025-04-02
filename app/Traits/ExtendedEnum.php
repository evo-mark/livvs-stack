<?php

namespace App\Traits;

use ReflectionClassConstant;

trait ExtendedEnum
{
    public static function getAttributes(self $enum): array
    {
        $ref = new ReflectionClassConstant(self::class, $enum->name);
        $attributes = $ref->getAttributes();

        return collect($attributes)->mapWithKeys(function ($attr) {
            return [str($attr->getName())->afterLast('\\')->lower()->value => collect($attr->getArguments())->first()];
        })->toArray();
    }

    public static function names(): array
    {
        return collect(self::cases())->pluck('name')->map(fn($str) => str($str)->title()->replace('_', ' '))->toArray();
    }

    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }

    public static function toArray(): array
    {
        return array_map(function ($key, $value) {
            $instance = self::from($value);

            return [
                'value' => $value,
                'title' => $key,
                ...static::getAttributes($instance),
            ];
        }, self::names(), self::values());
    }
}
