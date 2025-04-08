<?php

namespace App\Http\Controllers;

use App\Models\Sessao;
use Illuminate\Http\Request;

class SessaoController extends Controller
{
    public function listarPorPagina(Request $request)
    {
        $request->validate([
            'pagina' => 'required|string',
            'posicao' => 'required|integer|between:1,5',
        ]);

        $sessoes = Sessao::where('pagina', $request->pagina)
            ->where('posicao', $request->posicao)
            ->with('itens')
            ->get();

        return response()->json($sessoes);
    }
}
