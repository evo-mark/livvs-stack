<?php

namespace App\Http\Middleware;

use Inertia\Inertia;
use App\Models\Option;
use Inertia\Middleware;
use App\Facades\MetaService;
use Illuminate\Http\Request;
use App\Facades\OptionsService;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'app' => [
                'name' => fn() => config('app.name'),
                'env' => fn() => config('app.env'),
                'debug' => fn() => config('app.debug'),
                'url' => fn() => config('app.url'),
                'timezone' => fn() => config('app.timezone')
            ],
            'countries' => Inertia::lazy(function () {
                $countries = collect(countries());

                return $countries->map(function ($value, $key) {
                    return [
                        'value' => $key,
                        'title' => $value['name'],
                        'flag' => $value['emoji'],
                    ];
                })->sortBy(function ($item) {
                    return $item['value'] === 'gb' ? 0 : 1;
                })->values();
            }),
            'flash' => Inertia::always([
                'success' => fn() => $request->session()->get('success'),
                'error' => fn() => $request->session()->get('error'),
                'warning' => fn() => $request->session()->get('warning'),
                'info' => fn() => $request->session()->get('info'),
            ]),
            'meta' => [
                'title' => fn() => MetaService::getTitle(),
            ],
            'options' => OptionsService::loadPublicOptions(),
            'ws' => [
                'key' => config('broadcasting.connections.pusher.key'),
                'host' => config('broadcasting.connections.pusher.options.host'),
                'port' => config('broadcasting.connections.pusher.options.port'),
            ],
        ]);
    }
}
