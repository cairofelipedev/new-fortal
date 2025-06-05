<?php

namespace App\Http\Controllers;

use App\Models\Associado;
use Inertia\Inertia;

class AssociadoController extends Controller
{
    public function index()
    {
        return response()->json(
            Associado::orderBy('nome', 'asc')->get()
        );
    }

    public function show($slug)
    {
        $post = Associado::where('slug', $slug)
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
