<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class RDStationController extends Controller
{
    /**
     * Handle the callback from RD Station.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function handleCallback(Request $request)
    {
        // Obtenha todos os dados enviados na requisição
        $data = $request->all();

        // Opcional: Registre os dados recebidos para debug
        Log::info('RD Station Callback Data:', $data);

        // Exemplo: Se houver campos específicos que você deseja capturar
        if (isset($data['event_type'])) {
            // Execute ações com base no tipo de evento ou outros dados fornecidos
            // Por exemplo: Armazenar informações no banco de dados
            // Eventualmente, você poderia utilizar modelos e serviços aqui.
        }

        // Retorne uma resposta para confirmar o recebimento
        return response()->json(['message' => 'Callback recebido com sucesso!']);
    }
}
