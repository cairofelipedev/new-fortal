<?php

namespace App\Admin\Controllers;

use OpenAdmin\Admin\Controllers\AdminController;
use OpenAdmin\Admin\Form;
use OpenAdmin\Admin\Grid;
use App\Models\AssociadoCategoria;

class AssociadoCategoriaController extends AdminController
{
    protected $title = 'Categorias de Associados';

    protected function grid()
    {
        $grid = new Grid(new AssociadoCategoria);

        $grid->column('id', 'ID');
        $grid->column('nome', 'Nome');
        $grid->column('slug', 'Slug');

        return $grid;
    }

    protected function form()
    {
        $form = new Form(new AssociadoCategoria);

        $form->text('nome', 'Nome')->required();
        $form->text('slug', 'Slug')->required();

        return $form;
    }
}
