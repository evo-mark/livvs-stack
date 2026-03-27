<?php

namespace App\Traits;

use Spatie\Activitylog\Models\Concerns\LogsActivity;
use Spatie\Activitylog\Support\LogOptions;

trait LogsModelActivity
{
    use LogsActivity;

    public function getActivitylogOptions(): LogOptions
    {
        $hasFillable = ! empty($this->getFillable());

        return $hasFillable ?
            LogOptions::defaults()->logFillable()->logOnlyDirty()->logExcept(['password', 'token']) :
            LogOptions::defaults()->logUnguarded()->logOnlyDirty()->logExcept(['password', 'token']);
    }
}
