<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\EventCalendar;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventCalendarController extends Controller
{
    public function index(Request $request)
    {
        $month = $request->query('month');

        $query = EventCalendar::query();

        if ($month) {
            $query->where('month', $month);
        }

        return $query->orderBy('date')->get([
            'id',
            'name',
            'date',
            'location',
            'link',
            'image',
            'slug'
        ]);
    }

    public function show($slug)
    {
        $calendarios = EventCalendar::where('slug', $slug)
            ->firstOrFail();

        return response()->json($calendarios);
    }

    public function showNextEvent($slug)
    {
        return Inertia::render('NextEvents/Show', [
            'slug' => $slug,
        ]);
    }
}
