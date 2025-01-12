<?php

namespace App\Admin\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use App\Models\EventSpace;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use OpenAdmin\Admin\Admin;
use OpenAdmin\Admin\Controllers\Dashboard;
use OpenAdmin\Admin\Layout\Column;
use OpenAdmin\Admin\Layout\Content;
use OpenAdmin\Admin\Layout\Row;

class HomeController extends Controller
{
    public function index(Content $content)
    {
        // Dados para os gráficos
        $dailyLeads = $this->getDailyLeads();
        $eventTypeCounts = $this->getEventTypeCounts();

        return $content
            ->title('Dashboard de Eventos')
            ->description('Visão Geral dos Eventos')
            ->row(function (Row $row) use ($dailyLeads, $eventTypeCounts) {
                // Gráfico de leads por dia
                $row->column(3, view('admin.daily_leads', compact('dailyLeads')));

                // Gráfico de tipos de EventSpace
                $row->column(3, view('admin.event_types', compact('eventTypeCounts')));
            });
    }

    protected function getDailyLeads()
    {
        return Contact::select(
            DB::raw('DATE(created_at) as date'),
            DB::raw('COUNT(*) as total')
        )
            ->groupBy('date')
            ->orderBy('date', 'asc')
            ->get()
            ->map(function ($lead) {
                return [
                    'date' => Carbon::parse($lead->date)->format('Y-m-d'),
                    'total' => $lead->total,
                ];
            });
    }

    protected function getEventTypeCounts()
    {
        return EventSpace::join('event_types', 'event_spaces.type', '=', 'event_types.id')
            ->select('event_types.name', DB::raw('COUNT(event_spaces.id) as count'))
            ->groupBy('event_types.name')
            ->pluck('count', 'name');
    }
}
