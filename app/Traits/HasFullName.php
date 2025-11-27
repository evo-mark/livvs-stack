<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Casts\Attribute;

trait HasFullName
{
    public function fullName(): Attribute
    {
        return Attribute::make(
            get: function () {
                return trim($this->first_name . ' ' . $this->last_name);
            }
        );
    }

    public function initializeHasFullName(): void
    {
        $this->append('full_name');
    }
}
