<?php
namespace App\Admin\Controllers;

use App\Models\Apoiador;
use OpenAdmin\Admin\Controllers\AdminController;
use OpenAdmin\Admin\Form;
use OpenAdmin\Admin\Grid;
use OpenAdmin\Admin\Show;

class ApoiadoresController extends AdminController
{
    protected $title = 'Apoiadores';

    protected function grid()
    {
        $grid = new Grid(new Apoiador());

        $grid->column('id', 'ID')->sortable();
        $grid->column('name', 'Nome');
        $grid->column('img', 'Imagem')->image();

        return $grid;
    }

    protected function detail($id)
    {
        $show = new Show(Apoiador::findOrFail($id));

        $show->field('id', 'ID');
        $show->field('name', 'Nome');
        $show->field('img', 'Imagem')->image();

        return $show;
    }

    protected function form()
    {
        $form = new Form(new Apoiador());

        $form->display('id', 'ID');
        $form->text('name', 'Nome')->rules('required|min:3|max:100');
        $form->image('img', 'Imagem')->uniqueName();

        return $form;
    }
}

