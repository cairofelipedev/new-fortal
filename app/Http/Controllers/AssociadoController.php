<?php

namespace App\Http\Controllers;

use App\Models\Associado;

class AssociadoController extends Controller
{
    public function index()
    {
        return response()->json(Associado::all());
    }
}
