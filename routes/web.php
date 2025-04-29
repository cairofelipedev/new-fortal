<?php

use App\Http\Controllers\AssociadoController;
use App\Http\Controllers\EventSpaceController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

Route::get('/planejador-de-eventos', function () {
    return Inertia::render('Search');
});

Route::get('/resultado-busca', function () {
    return Inertia::render('SearchResults/Index');
});
Route::get('/imprensa', function () {
    return Inertia::render('Imprensa');
});

// Route::get('/event-spaces', [EventSpaceController::class, 'search'])->name('event-spaces');

Route::get('/resultado-buscar-evento/search', [EventSpaceController::class, 'search']);

Route::get('/espaco-para-seu-evento/{slug}', [EventSpaceController::class, 'eventSpace']);

Route::get('/espaco-para-seu-evento', function () {
    return Inertia::render('Space/index');
});

Route::get('/calendario-eventos', function () {
    return Inertia::render('CalendarEvents/index');
});

Route::get('/inspecao', function () {
    return Inertia::render('inspecao');
});

Route::get('/porque-fortaleza', function () {
    return Inertia::render('About/Index');
});

// Route::get('/associados', function () {
//     return Inertia::render('Associates');
// });

Route::get('/blog', function () {
    return Inertia::render('Post/Index');
});

Route::get('/post/{slug}', [PostController::class, 'showPost']);

Route::get('/associados/{slug}', [AssociadoController::class, 'showAssociate']);


Route::get('/sobre-fortaleza', function () {
    return Inertia::render('About/AboutFortaleza');
});


Route::middleware(['auth', 'verified'])->group(function () {
    Route::prefix('dashboard')->group(function () {
        Route::get(
            '/',
            function () {
                return Inertia::render('Dashboard');
            }
        )->name('dashboard');
        Route::get(
            '/espacos-de-eventos',
            function () {
                return Inertia::render('Dashboard/EventSpace/Index');
            }
        )->name('dashboard/espacos-de-eventos');
        Route::get(
            '/espacos-de-eventos/{id}',
            [EventSpaceController::class, 'showSpace']
        );
        Route::get(
            '/leads',
            function () {
                return Inertia::render('Dashboard/Leads/Index');
            }
        )->name('dashboard/leads');
    });
});

Route::get('/espaco-para-eventos', [EventSpaceController::class, 'searchSpaceEvent']);

// Route::get('/espaco-para-eventos', function () {
//     return Inertia::render('SpaceForEvents');
// });

Route::get('/servicos', function () {
    return Inertia::render('Associates');
});

Route::get('/organizadoras', function () {
    return Inertia::render('Organizations');
});

Route::get('/quem-somos', function () {
    return Inertia::render('About/AboutUs');
});

Route::get('/associe-se', function () {
    return Inertia::render('IndexAssociete');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

