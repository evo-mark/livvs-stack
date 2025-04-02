<?php

namespace App\Traits;

use App\Models\Option;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

trait HasOptions
{
    public function options(): MorphMany
    {
        return $this->morphMany(Option::class, 'optionable');
    }

    public function getOption(string $option, mixed $defaultValue = ''): mixed
    {
        $option = $this->options()->firstOrCreate([
            'field' => $option,
        ], [
            'type' => gettype($defaultValue),
        ]);
        if ($option->wasRecentlyCreated) {
            $option->value = $defaultValue;
            $option->save();
        }

        return $option->value;
    }

    /**
     * Set the value of an option. If unknown, the type of the value will be used
     */
    public function setOption(string $option, mixed $value): Option
    {
        $option = $this->options()->firstOrNew([
            'field' => $option,
        ], [
            'value' => null,
        ]);

        if (! $option->exists) {
            $option->type = gettype($value);
            $option->save();
        }

        $option->value = $value;

        $option->save();

        return $option;
    }

    public function setOptionDefaults(array|Collection $options)
    {
        return DB::transaction(function () use ($options) {
            foreach ($options as $field => $value) {
                $this->getOption($field, $value, gettype($value));
            }
        });
    }
}
