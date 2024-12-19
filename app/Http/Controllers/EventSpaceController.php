<?php

namespace App\Http\Controllers;

use App\Models\EventSpace;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use App\Imports\EventSpacesImport;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Facades\Excel;

class EventSpaceController extends Controller
{
    public function index(Request $request)
    {
        $query = EventSpace::query();

        // Adicione os filtros dinâmicos
        if ($request->filled('name')) {
            $query->where('name', 'like', "%{$request->name}%");
        }

        if ($request->filled('city')) {
            $query->where('city', 'like', "%{$request->city}%");
        }

        if ($request->filled('state')) {
            $query->where('state', 'like', "%{$request->state}%");
        }

        if ($request->filled('zip_codes')) {
            $query->where('zip_codes', 'like', "%{$request->zip_codes}%");
        }

        if ($request->filled('address')) {
            $query->where('address', 'like', "%{$request->address}%");
        }

        // Filtro para capacidade
        if ($request->filled('capacity')) {
            $query->where('capacity', '>=', $request->capacity);
        }

        if ($request->filled('phone')) {
            $query->where('phone', 'like', "%{$request->phone}%");
        }

        if ($request->filled('type')) {
            $query->where('type', 'like', "%{$request->type}%");
        }

        // Execute a consulta
        $eventSpaces = $query->get();

        // Retorne os resultados
        return response()->json([
            'results' => $eventSpaces,
        ]);
    }

    public function search(Request $request)
    {
        $query = EventSpace::query();

        // Adicione os filtros dinâmicos
        if ($request->filled('name')) {
            $query->where('name', 'like', "%{$request->name}%");
        }

        if ($request->filled('city')) {
            $query->where('city', 'like', "%{$request->city}%");
        }

        if ($request->filled('state')) {
            $query->where('state', 'like', "%{$request->state}%");
        }

        if ($request->filled('zip_codes')) {
            $query->where('zip_codes', 'like', "%{$request->zip_codes}%");
        }

        if ($request->filled('address')) {
            $query->where('address', 'like', "%{$request->address}%");
        }

        // Filtro para capacidade
        if ($request->filled('capacity')) {
            $query->where('capacity', '>=', $request->capacity);
        }

        if ($request->filled('phone')) {
            $query->where('phone', 'like', "%{$request->phone}%");
        }

        if ($request->filled('type')) {
            $query->where('type', 'like', "%{$request->type}%");
        }

        $results = $query->get();

        return Inertia::render('Search/SearchResults', [
            'results' => $results,
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'company_id' => 'required|exists:companies,id',
            'name' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'state' => 'required|string|max:2',
            'zip_code' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'capacity' => 'required|integer|min:1',
            'phone' => 'required|string|max:15',
            'type' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'images' => 'nullable|array',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation errors',
                'errors' => $validator->errors(),
            ], 422);
        }

        $eventSpace = new EventSpace();
        $eventSpace->company_id = $request->company_id;
        $eventSpace->name = $request->name;
        $eventSpace->slug = Str::slug($request->name, '-');
        $eventSpace->city = $request->city;
        $eventSpace->state = $request->state;
        $eventSpace->zip_code = $request->zip_code;
        $eventSpace->address = $request->address;
        $eventSpace->capacity = $request->capacity;
        $eventSpace->phone = $request->phone;
        $eventSpace->type = $request->type;
        $eventSpace->description = $request->description;

        if ($request->hasFile('image')) {
            $eventSpace->image = $request->file('image')->storePublicly('', 'public');
        }

        if ($request->hasFile('images')) {
            $paths = [];
            foreach ($request->file('images') as $image) {
                $paths[] = $image->storePublicly('', 'public');
            }
            $eventSpace->images = json_encode($paths);
        }

        $eventSpace->status = 'active';
        $eventSpace->publish = false;

        $eventSpace->save();

        return response()->json([
            'success' => true,
            'message' => 'Event space created successfully',
            'data' => $eventSpace,
        ]);
    }

    /**
     * Retorna um espaço de evento com base no slug.
     */

    public function show(string $slug)
    {
        $eventSpace = EventSpace::where('slug', $slug)->firstOrFail();

        return response()->json([
            'success' => true,
            'data' => $eventSpace,
        ]);
    }

    public function eventSpace($slug)
    {
        return Inertia::render('EventSpace/Index', [
            'slug' => $slug,
        ]);
    }

    public function import(Request $request)
    {
        $request->validate([
            'file' => 'required|mimes:xlsx,csv'
        ]);

        Excel::import(new EventSpacesImport, $request->file('file'));

        return response()->json(['message' => 'Dados importados com sucesso!']);
    }

    public function importFromStoredFile()
    {
        // Define o caminho do arquivo armazenado
        $filePath = public_path('fortal_consolidado.xlsx');

        // Verifica se o arquivo existe
        if (!file_exists($filePath)) {
            return response()->json(['error' => 'Arquivo não encontrado!'], 404);
        }

        // Executa a importação
        Excel::import(new EventSpacesImport, $filePath);

        return response()->json(['message' => 'Importação concluída com sucesso!']);
    }

    public function list()
    {
        try {
            // Busca todos os contatos no banco de dados
            $spaces = EventSpace::all();

            // Retorna a lista de contatos em formato JSON
            return response()->json($spaces, 200);
        } catch (\Exception $e) {
            // Em caso de erro, registra no log e retorna uma resposta de erro
            Log::error('Erro ao listar contatos: ' . $e->getMessage());
            return response()->json(['error' => 'Erro ao listar os contatos.'], 500);
        }
    }

    public function showSpace($id)
    {
        $space = EventSpace::find($id);

        return Inertia::render('Dashboard/EventSpace/Show', [
            'space' => $space
        ]);
    }
}
