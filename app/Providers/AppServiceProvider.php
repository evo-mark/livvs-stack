<?php

namespace App\Providers;

use App\Data\PointData;
use App\Models\Address;
use App\Models\User;
use App\Observers\ActivityLogObserver;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Foundation\DevCommands;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Schedule;
use Illuminate\Support\ServiceProvider;
use MatanYadaev\EloquentSpatial\EloquentSpatial;
use Spatie\Activitylog\Models\Activity;

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
        DevCommands::except('server');
        JsonResource::withoutWrapping();

        Activity::observe(ActivityLogObserver::class);
    }

    private function scheduleTasks()
    {
        Schedule::command('auth:clear-resets')->everyFifteenMinutes();
    }

    private function createMorphMap(): void
    {
        Relation::enforceMorphMap([
            'address' => get_class(app(Address::class)),
            'user' => get_class(app(User::class)),
        ]);
    }

    private function changePasswordResetRoute()
    {
        ResetPassword::createUrlUsing(function ($notifiable, $token) {
            return url(route('auth.reset-password', [
                'token' => $token,
                'email' => $notifiable->getEmailForPasswordReset(),
            ], false));
        });
    }
}
