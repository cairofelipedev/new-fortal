<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use App\Models\RDToken;

class UpdateRDToken extends Command
{
    protected $signature = 'rdstation:update-token';
    protected $description = 'Atualiza o access_token da RD Station a cada 12 horas';

    public function handle()
    {
        $rdToken = RDToken::first();

        if (!$rdToken) {
            $this->error('Nenhum registro de token encontrado.');
            return Command::FAILURE;
        }

        // Requisição para o endpoint da RD Station
        $response = Http::post('https://api.rd.services/auth/token', [
            'client_id' => '439e0d28-2b02-40e0-8603-db7af2925d2f',
            'client_secret' => 'd45ab07e80e449a89173542a6d15d853',
            'refresh_token' => 'ld45fNYsr8uZbph613R5WhlrCUHFZp4ZPdkNlExaxJw',
        ]);

        if ($response->successful()) {
            $data = $response->json();

            // Atualiza o token no banco de dados
            $rdToken->update([
                'access_token' => $data['access_token'],
                'updated_at' => now(),
            ]);

            $this->info('Token atualizado com sucesso!');
            return Command::SUCCESS;
        }

        $this->error('Erro ao atualizar o token: ' . $response->body());
        return Command::FAILURE;
    }
}
