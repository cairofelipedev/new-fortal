<?php

namespace App\Http\Controllers;

use App\Models\Associado;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AssociadoController extends Controller
{
    public function index(Request $request)
    {
        $query = Associado::query()->orderBy('nome', 'asc');

        if ($request->has('type')) {
            $query->where('type', $request->input('type'));
        }

        return response()->json($query->get());
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
