<?php

declare(strict_types=1);

namespace App\Observers;

use Spatie\Activitylog\Models\Activity;

class ActivityLogObserver
{
    /**
     * Handle the activity "created" event.
     */
    public function creating(Activity &$activity): void
    {
        $activity->properties = collect($activity->properties)
            ->put('meta', [
                'ip' => request()->ip(),
                'user_agent' => request()->userAgent(),
                'url' => request()->fullUrl(),
                'method' => request()->method(),
                'referer' => request()->headers->get('referer'),
            ]);
    }
}
