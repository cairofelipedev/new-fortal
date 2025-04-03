<?php

namespace App\Http\Controllers;

use App\Models\Sessao;
use Illuminate\Http\Request;

class SessaoController extends Controller
{
    public function listarPorPagina(Request $request)
    {
        $pagina = $request->query('pagina', 'HOME'); // Padrão: HOME
        $sessoes = Sessao::where('pagina', $pagina)
            ->with('itens') // Relacionamento com os itens da Sessão
            ->get();

        return response()->json($sessoes);
    }
}
