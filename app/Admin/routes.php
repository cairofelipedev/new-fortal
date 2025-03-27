<?php

use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;
use OpenAdmin\Admin\Facades\Admin;

Admin::routes();

Route::group([
    'prefix'        => config('admin.route.prefix'),
    'namespace'     => config('admin.route.namespace'),
    'middleware'    => config('admin.route.middleware'),
    'as'            => config('admin.route.prefix') . '.',
], function (Router $router) {

    $router->get('/', 'HomeController@index')->name('home');
    $router->resource('empresas', 'CompanyController');
    $router->resource('eventos', 'EventSpaceController');
    $router->resource('calendario-eventos', 'EventCalendarController');
    $router->resource('tipo-eventos', 'EventTypeController');
    $router->resource('leads', 'ContactController');
    $router->resource('blog', 'PostController');
    $router->resource('associados', 'AssociadoController');
});
