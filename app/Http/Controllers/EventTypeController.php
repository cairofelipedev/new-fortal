<?php

namespace App\Http\Controllers;

use App\Models\EventType;
use Illuminate\Http\Request;

class EventTypeController extends Controller
{
    /**
     * Exibe uma lista de todos os tipos de eventos.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        // Busca todos os tipos de eventos do banco de dados
        $eventTypes = EventType::all();

        // Retorna os dados como JSON
        return response()->json($eventTypes);
    }
}
