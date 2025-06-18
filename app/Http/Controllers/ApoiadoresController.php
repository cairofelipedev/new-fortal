<?php

namespace App\Http\Controllers;

use App\Models\Apoiador;

class ApoiadoresController extends Controller
{
    public function index()
    {
        $apoiadores = Apoiador::all();

        return response()->json($apoiadores);
    }
}
