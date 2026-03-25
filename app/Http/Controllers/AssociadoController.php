<?php

namespace App\Http\Controllers;

use App\Models\Associado;
use App\Models\AssociadoCategoria;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AssociadoController extends Controller
{
    public function index(Request $request)
    {
        $query = Associado::with('categoria') // 🔥 AQUI É O AJUSTE
            ->orderBy('nome', 'asc');

        if ($request->has('type')) {
            $query->where('type', $request->input('type'));
        }

        return response()->json($query->get());
    }

    public function categorias()
    {
        return response()->json(
            AssociadoCategoria::orderBy('nome', 'asc')->get()
        );
    }

    public function show($slug)
    {
        $post = Associado::with('categoria') // 🔥 mantém padrão
            ->where('slug', $slug)
            ->firstOrFail();

        return response()->json($post);
    }

    public function showAssociate($slug)
    {
        return Inertia::render('ShowAssociate', [
            'slug' => $slug,
        ]);
    }
}
