<?php

declare(strict_types=1);

namespace App\Services;

use App\Data\PointData;
use App\Http\Resources\AddressResultResource;
use Carbon\CarbonInterval;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

class AddressSearchService
{
    protected string $token;

    public function __construct()
    {
        $this->token = config('services.pinpoint.token', '');
    }

    public function get(string $postcode)
    {
        if (empty($this->token)) {
            throw new \Exception('No token found for the Pinpoint service');
        }

        $postcode = str($postcode)->replace(' ', '')->trim()->upper()->value;
        $response = Cache::remember('address_search_' . $postcode, CarbonInterval::week(1), function () use ($postcode) {
            return $this->findAddress($postcode);
        });

        if (! isset($response['data']) || ! isset($response['data']['addresses']) || count($response['data']['addresses']) <= 0) {
            return response()->json([
                'postcode' => $postcode,
                'message' => $response['Message'] ?? 'No addresses found',
            ], status: 404);
        }

        $data = $response['data'];

        return [
            'postcode' => $postcode,
            'point' => new PointData(latitude: $data['latitude'], longitude: $data['longitude']),
            'count' => count($data['addresses']) ?? 0,
            'addresses' => AddressResultResource::collection(collect($data['addresses'])->sort(fn($a, $b) => strnatcmp($a['address'], $b['address']))),
        ];
    }

    private function findAddress(string $postcode)
    {
        $url = sprintf('https://pinpoint.evomark.co.uk/api/v1/postcode/%s', $postcode);

        return Http::withToken($this->token)->get($url)->json();
    }
}
