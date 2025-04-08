<?php

namespace App\Admin\Controllers;

use App\Models\Testimonial;
use OpenAdmin\Admin\Controllers\AdminController;
use OpenAdmin\Admin\Form;
use OpenAdmin\Admin\Grid;
use OpenAdmin\Admin\Show;

class TestimonialController extends AdminController
{
    protected $title = 'Depoimentos';

    protected function grid()
    {
        $grid = new Grid(new Testimonial());

        $grid->column('id', 'ID')->sortable();
        $grid->column('nome', 'Nome');
        $grid->column('cargo', 'Cargo');
        $grid->column('mensagem', 'Mensagem')->limit(100);

        return $grid;
    }

    protected function detail($id)
    {
        $show = new Show(Testimonial::findOrFail($id));

        $show->field('id', 'ID');
        $show->field('nome', 'Nome');
        $show->field('cargo', 'Cargo');
        $show->field('mensagem', 'Mensagem');

        return $show;
    }

    protected function form()
    {
        $form = new Form(new Testimonial());

        $form->text('nome', 'Nome')->rules('required');
        $form->text('cargo', 'Cargo')->rules('required');
        $form->textarea('mensagem', 'Mensagem')->rules('required');

        return $form;
    }
}
