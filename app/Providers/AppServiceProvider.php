<?php

namespace App\Providers;

use App\Data\PointData;
use Carbon\CarbonInterval;
use Illuminate\Support\Facades\Cache;
use App\Observers\ActivityLogObserver;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use Spatie\Activitylog\Models\Activity;
use Illuminate\Support\Facades\Schedule;
use Illuminate\Http\Resources\Json\JsonResource;
use MatanYadaev\EloquentSpatial\EloquentSpatial;
use Illuminate\Database\Eloquent\Relations\Relation;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->changePasswordResetRoute();
        $this->scheduleTasks();
        $this->createMorphMap();
        JsonResource::withoutWrapping();

        EloquentSpatial::usePoint(PointData::class);
        Activity::observe(ActivityLogObserver::class);
    }

    private function scheduleTasks()
    {
        Schedule::command('auth:clear-resets')->everyFifteenMinutes();
    }

    private function createMorphMap(): void
    {
        Relation::enforceMorphMap([
            'address' => get_class(app(\App\Models\Address::class)),
            'user' => get_class(app(\App\Models\User::class)),
        ]);
    }

    private function changePasswordResetRoute()
    {
        \Illuminate\Auth\Notifications\ResetPassword::createUrlUsing(function ($notifiable, $token) {
            return url(route('auth.reset-password', [
                'token' => $token,
                'email' => $notifiable->getEmailForPasswordReset(),
            ], false));
        });
    }
}
