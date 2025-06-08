<?php

namespace App\Admin\Controllers;

use OpenAdmin\Admin\Controllers\AdminController;
use OpenAdmin\Admin\Form;
use OpenAdmin\Admin\Grid;
use OpenAdmin\Admin\Show;
use App\Models\EventCalendar;

class EventCalendarController extends AdminController
{
    protected $title = 'Calendário de Eventos';

    protected function grid()
    {
        $grid = new Grid(new EventCalendar);

        $grid->column('id', __('ID'))->sortable();
        $grid->column('name', 'Nome');
        $grid->column('date', 'Data')->display(function ($value) {
            return \Carbon\Carbon::parse($value)->format('d/m/Y');
        });
        $grid->column('month', 'Mês');
        // $grid->column('pax', 'PAX');
        $grid->column('contact', 'Contato');
        $grid->column('organization', 'Organização');
        $grid->column('location', 'Local');
        $grid->column('website', 'Site')->link();
        $grid->column('link', 'Link')->link(); // Adicionado
        $grid->column('image', 'Imagem')->image();
        $grid->column('created_at', __('Criado em'))->display(function ($value) {
            return \Carbon\Carbon::parse($value)->format('d/m/Y H:i:s');
        });

        return $grid;
    }

    protected function detail($id)
    {
        $show = new Show(EventCalendar::findOrFail($id));

        $show->field('id', __('ID'));
        $show->field('name', 'Nome');
        $show->field('date', 'Data')->as(function ($value) {
            return \Carbon\Carbon::parse($value)->format('d/m/Y');
        });
        $show->field('month', 'Mês');
        $show->field('pax', 'PAX');
        $show->field('contact', 'Contato');
        $show->field('organization', 'Organização');
        $show->field('location', 'Local');
        $show->field('website', 'Site')->link();
        $show->field('link', 'Link')->link(); // Adicionado
        $show->field('content', 'Conteúdo')->unescape(); // Adicionado
        $show->field('image', 'Imagem')->image();
        $show->field('created_at', __('Criado em'))->as(function ($value) {
            return \Carbon\Carbon::parse($value)->format('d/m/Y H:i:s');
        });

        return $show;
    }

    protected function form()
    {
        $form = new Form(new EventCalendar);

        $form->display('id', __('ID'));
        $form->text('name', 'Nome')->rules('required');
        $form->date('date', 'Data')->rules('required');
        $form->text('month', 'Mês')->rules('required');
        $form->number('pax', 'Participantes')->rules('required');
        $form->text('contact', 'Contato');
        $form->text('organization', 'Organização');
        $form->text('location', 'Local')->rules('required');
        $form->url('website', 'Site');
        $form->url('link', 'Link')->rules('nullable|url'); // Adicionado
        $form->textarea('content', 'Conteúdo')->rules('nullable'); // Adicionado
        $form->image('image', 'Imagem')->uniqueName()->removable();


        return $form;
    }
}