<?php

namespace App\Services;

use App\Data\PointData;
use Carbon\CarbonInterval;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;
use App\Http\Resources\AddressResultResource;

class AddressSearchService
{
    protected string $token;

    public function __construct()
    {
        $this->token = config('services.get_address.token');
    }

    public function get(string $postcode)
    {
        if (empty($this->token)) {
            throw new \Exception("No token found for the getAddress service");
        }

        $postcode = str($postcode)->replace(' ', '')->trim()->upper()->value;
        $response = Cache::remember('address_search_' . $postcode, CarbonInterval::week(1), function () use ($postcode) {
            return $this->findAddress($postcode);
        });

        if (! isset($response['addresses']) || count($response['addresses']) <= 0) {
            return response()->json([
                'postcode' => $postcode,
                'message' => $response['Message'] ?? 'No addresses found',
            ], status: 404);
        }

        return [
            'postcode' => $postcode,
            'point' => new PointData(latitude: $response['latitude'], longitude: $response['longitude']),
            'count' => count($response['addresses']) ?? 0,
            'addresses' => AddressResultResource::collection(collect($response['addresses'])->sort(fn($a, $b) => strnatcmp($a['line_1'], $b['line_1']))),
        ];
    }

    private function findAddress(string $postcode)
    {
        $url = sprintf('https://api.getAddress.io/find/%s?api-key=%s&expand=true', $postcode, $this->token);

        return Http::get($url)->json();
    }
}
