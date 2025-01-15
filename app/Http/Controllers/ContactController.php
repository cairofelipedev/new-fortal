<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Services\RDStationService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{
    protected $rdService;

    public function __construct(RDStationService $rdService)
    {
        $this->rdService = $rdService;
    }

    public function createContact(Request $request)
    {

        if ($request->filled('website')) {
            $request->merge([
                'website' => $this->addHttpsIfMissing($request->input('website'))
            ]);
        }

        $validated = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'job_title' => 'nullable|string',
            'birthdate' => 'nullable|date',
            'bio' => 'nullable|string',
            'website' => 'nullable|url',
            'personal_phone' => 'nullable|string',
            'mobile_phone' => 'nullable|string',
            'city' => 'nullable|string',
            'state' => 'nullable|string',
            'country' => 'nullable|string',
            'twitter' => 'nullable|url',
            'facebook' => 'nullable|url',
            'linkedin' => 'nullable|url',
            'tags' => 'nullable|array',
            'id_company' => 'nullable|integer',
        ]);

        // Remover o campo 'id_company' antes de enviar para o RD Station
        $rdStationData = $validated;
        unset($rdStationData['id_company']); // Remove o campo que não é aceito pela API

        try {
            // Salva o contato no banco de dados
            $contact = Contact::create($validated);
        } catch (\Exception $e) {
            // Se falhar ao salvar no banco, retorna 500
            Log::error('Erro ao salvar contato no banco: ' . $e->getMessage());
            return response()->json(['error' => 'Erro ao salvar o contato no banco.'], 500);
        }

        // Tenta enviar o contato para o serviço RD Station, sem o campo 'id_company'
        try {
            $this->rdService->makeRequest('/platform/contacts', $rdStationData, 'POST');
        } catch (\Exception $e) {
            // Registra o erro do serviço, mas não afeta a resposta
            Log::warning('Erro ao enviar contato para RD Station: ' . $e->getMessage());
        }

        // Retorna sucesso se salvou no banco
        return response()->json(['message' => 'Contato criado com sucesso!'], 200);
    }

    /**
     * Adiciona "https://" ao valor se estiver ausente
     *
     * @param string $url
     * @return string
     */
    private function addHttpsIfMissing(string $url): string
    {
        if (!preg_match('#^https?://#', $url)) {
            return 'https://' . ltrim($url, '/');
        }
        return $url;
    }

    public function index()
    {
        try {
            // Busca todos os contatos no banco de dados
            $contacts = Contact::all();

            // Retorna a lista de contatos em formato JSON
            return response()->json($contacts, 200);
        } catch (\Exception $e) {
            // Em caso de erro, registra no log e retorna uma resposta de erro
            Log::error('Erro ao listar contatos: ' . $e->getMessage());
            return response()->json(['error' => 'Erro ao listar os contatos.'], 500);
        }
    }
}
