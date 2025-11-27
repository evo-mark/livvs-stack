<?php

declare(strict_types=1);

namespace App\Data;

use MatanYadaev\EloquentSpatial\Objects\Point;

class PointData extends Point
{
    /**
     * @return array{type: string, coordinates: array<mixed>}
     */
    public function toArray(): array
    {
        return [
            'type' => class_basename(static::class),
            'coordinates' => [
                'latitude' => $this->latitude,
                'longitude' => $this->longitude,
            ],
        ];
    }
}
