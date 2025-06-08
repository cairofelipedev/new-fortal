<?php

use App\Http\Controllers\AssociadoController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\EventSpaceController;
use App\Http\Controllers\RDStationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Services\RDStationService;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\EquipeConselhoController;
use App\Http\Controllers\EventCalendarController;
use App\Http\Controllers\EventTypeController;
use App\Http\Controllers\SessaoController;
use App\Models\Testimonial;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/rdstation/callback', [RDStationController::class, 'handleCallback']);

Route::get('/rd/test', function (RDStationService $service) {
    try {
        $data = $service->makeRequest('/platform/contacts');
        return response()->json($data);
    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }
});

Route::post('/rd/contacts', [ContactController::class, 'createContact']);

Route::get('/event-spaces', [EventSpaceController::class, 'index']);

// Route::get('/event-spaces/search', [EventSpaceController::class, 'search']);

Route::post('/event-spaces', [EventSpaceController::class, 'store']);

Route::get('/event-spaces/{slug}', [EventSpaceController::class, 'show']);

Route::get('import', [EventSpaceController::class, 'importFromStoredFile']);

Route::get('/leads', [ContactController::class, 'index']);

Route::get('/spaces', [EventSpaceController::class, 'list']);

Route::get('/event-types', [EventTypeController::class, 'index']);

Route::get('/associados', [AssociadoController::class, 'index']);

Route::get('/associados/{slug}', [AssociadoController::class, 'show']);

Route::get('/posts', [PostController::class, 'index']); // Listar posts

Route::get('/posts/{slug}', [PostController::class, 'show']); // Ver um post pelo slug

Route::get('/sessoes', [SessaoController::class, 'listarPorPagina']);

Route::get('/depoimentos', function () {
    return Testimonial::all();
});

Route::get('/banners', [BannerController::class, 'index']);

Route::get('/equipe-conselho', [EquipeConselhoController::class, 'index']);

Route::get('/events-calendar', [EventCalendarController::class, 'index']);

Route::get('/events-calendar/{slug}', [EventCalendarController::class, 'show']); // Ver um post pelo slug