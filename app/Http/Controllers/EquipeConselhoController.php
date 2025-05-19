<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\EquipeConselho;

class EquipeConselhoController extends Controller
{
    /**
     * Retorna todos os registros da tabela equipe_conselho.
     */
    public function index()
    {
        $dados = EquipeConselho::select('id', 'nome', 'cargo', 'imagem', 'tipo')->get();

        return response()->json($dados);
    }
}
