<?php

namespace App\Traits;

use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

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
