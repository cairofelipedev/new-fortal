<?php

namespace App\Services;

use App\Models\RDToken;

class RDStationService
{
    public function getAccessToken(): string
    {
        $rdToken = RDToken::first();

        if (!$rdToken || !$rdToken->access_token) {
            throw new \Exception('Access token não encontrado. Atualize o token primeiro.');
        }

        return $rdToken->access_token;
    }

    public function makeRequest(string $endpoint, array $body = [], string $method = 'GET')
    {
        $accessToken = $this->getAccessToken();

        $response = \Illuminate\Support\Facades\Http::withToken($accessToken)
            ->acceptJson()
            ->{$method}("https://api.rd.services{$endpoint}", $body);

        if ($response->failed()) {
            throw new \Exception('Erro na requisição: ' . $response->body());
        }

        return $response->json();
    }
}
