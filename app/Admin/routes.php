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
    $router->resource('formato-de-espacos', 'SpaceStructureController');
    $router->resource('leads', 'ContactController');
    $router->resource('blog', 'PostController');
    $router->resource('associados-organizadoras-escolas', 'AssociadoController');
    $router->resource('sessao', 'SessaoController');
    $router->resource('sessaoitem', 'SessaoItemController');
    $router->resource('depoimentos', 'TestimonialController');
    $router->resource('banners', 'BannerController');
    $router->resource('time', 'EquipeConselhoController');
    $router->resource('apoiadores', 'ApoiadoresController');
});
