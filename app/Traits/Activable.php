<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Builder;

trait Activable
{
    /**
     *  Fired after the inheriting model has been initialised
     */
    public function initializeActivable()
    {
        $this->mergeFillable(['is_active']);
        // Add is_active to the model's casts

        $this->mergeCasts([
            'is_active' => 'boolean',
        ]);
    }

    /**
     * Scope a query to only include active items.
     */
    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope a query to only include inactive items.
     */
    public function scopeInactive(Builder $query): Builder
    {
        return $query->where('is_active', false);
    }
}
