<?php

declare(strict_types=1);

namespace App\Models;

use App\Data\PointData;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Rinvex\Country\Country;
use App\Traits\LogsModelActivity;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use MatanYadaev\EloquentSpatial\Traits\HasSpatial;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Address extends Model
{
    use HasFactory, HasSpatial, LogsModelActivity;

    protected $guarded = [];

    protected function casts(): array
    {
        return [
            'location' => PointData::class,
        ];
    }

    public function addressable(): MorphTo
    {
        return $this->morphTo('addressable');
    }

    public function country(): Attribute
    {
        return Attribute::make(
            get: function ($value, array $attributes) {
                $code = Str::lower($attributes['country_code']);

                try {
                    return country($code);
                } catch (\Exception) {
                    return null;
                }
            },
            set: function (string|array|Country $value) {
                if ($value instanceof Country) {
                    $code = $value->getIsoAlpha2() ?? null;
                } elseif (Arr::isAssoc($value)) {
                    $code = $value['iso_3166_1_alpha2'] ?? null;
                } else {
                    $code = $value;
                }
                $code = Str::lower($value);

                return [
                    'country_code' => $code,
                ];
            }
        );
    }
}
