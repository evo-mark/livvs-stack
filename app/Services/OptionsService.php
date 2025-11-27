<?php

namespace App\Services;

use App\Models\Option;
use Carbon\CarbonInterval;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Eloquent\Model;

class OptionsService
{
    public Collection $cache;

    public function __construct()
    {
        $this->cache = collect();
    }

    public function seed(
        string $field,
        mixed $defaultValue,
        bool $isPublic = false,
        ?string $type = null,
        ?Model $optionable = null,
        ?string $description = null,
        ?array $inputOptions = null
    ): bool {
        $additional = [];
        if (! empty($optionable)) {
            $additional['optionable_type'] = $optionable->getMorphClass();
            $additional['optionable_id'] = $optionable->getKey();
        } else {
            $additional['optionable_type'] = null;
            $additional['optionable_id'] = null;
        }
        if (empty($type)) {
            $type = gettype($defaultValue);
        }

        /** @var Option $option */
        $option = Option::updateOrCreate([
            'field' => $field,
            ...$additional,
        ], [
            'is_public' => $isPublic ?? false,
            'type' => $type,
            'description' => $description,
            'input_options' => $inputOptions,
        ]);

        if ($option->wasRecentlyCreated) {
            $option->value = $defaultValue;
            $option->save();
        }

        return true;
    }

    public function get(string $field, mixed $defaultValue = null, ?Model $optionable = null): mixed
    {
        if ($this->cache->has($field)) {
            return $this->cache->get($field, $defaultValue);
        }

        if (! empty($optionable)) {
            $key = $optionable->getMorphClass() . '_' . $optionable->id . '_' . $field;
            $model = $optionable->options()->firstWhere('field', $field);
        } else {
            $key = 'global_' . $field;
            $model = Option::global()->firstWhere('field', $field);
        }

        $this->cache->put($key, $model->value);

        return $model->value;
    }

    public function loadPublicOptions(): Collection
    {
        $hasOptionsTable = Cache::remember('has_options_table', CarbonInterval::week(), function () {
            return Schema::hasTable('options');
        });

        if ($hasOptionsTable) {
            $globals = Cache::remember('global_options', CarbonInterval::hour(), function () {
                return Option::whereNull('optionable_type')->get()->pluck('value', 'field');
            });
        } else {
            $globals = collect();
        }
        return $globals;
    }
}
