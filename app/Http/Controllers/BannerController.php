<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Banner;

class BannerController extends Controller
{
    /**
     * Retorna a lista de banners, podendo filtrar pela página.
     */
    public function index(Request $request)
    {
        $page = $request->query('page');

        $query = Banner::query();

        if ($page) {
            $query->where('page', $page);
        }

        $banners = $query->get();

        return response()->json($banners);
    }
}
