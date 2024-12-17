<?php

namespace App\Admin\Controllers;

use OpenAdmin\Admin\Controllers\AdminController;
use OpenAdmin\Admin\Form;
use OpenAdmin\Admin\Grid;
use OpenAdmin\Admin\Show;
use App\Models\EventType;

class EventTypeController extends AdminController
{
    protected $title = 'Tipos de Eventos';

    protected function grid()
    {
        $grid = new Grid(new EventType);

        $grid->column('id', __('ID'))->sortable();
        $grid->column('name', __('Name'));
        $grid->column('created_at', __('Created at'))->display(function ($value) {
            return \Carbon\Carbon::parse($value)->format('d/m/Y H:i:s');
        });

        return $grid;
    }

    protected function detail($id)
    {
        $show = new Show(EventType::findOrFail($id));

        $show->field('id', __('ID'));
        $show->field('name', __('Name'));
        $show->field('created_at', __('Created at'));

        return $show;
    }

    protected function form()
    {
        $form = new Form(new EventType);

        $form->text('name', __('Name'))->rules('required|min:3|max:50');

        return $form;
    }
}
