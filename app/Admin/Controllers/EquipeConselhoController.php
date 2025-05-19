<?php

namespace App\Admin\Controllers;


use App\Models\EquipeConselho;
use OpenAdmin\Admin\Controllers\AdminController;
use OpenAdmin\Admin\Form;
use OpenAdmin\Admin\Grid;
use OpenAdmin\Admin\Show;

class EquipeConselhoController extends AdminController
{
    protected $title = 'Equipe e Conselhos';

    protected function grid()
    {
        $grid = new Grid(new EquipeConselho());

        $grid->column('id', 'ID')->sortable();
        $grid->column('nome', 'Nome')->sortable();
        $grid->column('cargo', 'Cargo')->sortable();
        $grid->column('tipo', 'Tipo')->using([
            'equipe' => 'Equipe',
            'conselho' => 'Conselho'
        ])->label([
            'equipe' => 'success',
            'conselho' => 'info'
        ]);
        $grid->column('imagem', 'Imagem')->image('', 100, 100);
        $grid->column('created_at', 'Criado em')->display(function ($value) {
            return \Carbon\Carbon::parse($value)->format('d/m/Y H:i:s');
        });

        return $grid;
    }

    protected function detail($id)
    {
        $show = new Show(EquipeConselho::findOrFail($id));

        $show->field('id', 'ID');
        $show->field('nome', 'Nome');
        $show->field('cargo', 'Cargo');
        $show->field('tipo', 'Tipo');
        $show->field('imagem', 'Imagem')->image();
        $show->field('created_at', 'Criado em')->as(function ($value) {
            return \Carbon\Carbon::parse($value)->format('d/m/Y H:i:s');
        });
        $show->field('updated_at', 'Atualizado em')->as(function ($value) {
            return \Carbon\Carbon::parse($value)->format('d/m/Y H:i:s');
        });

        return $show;
    }

    protected function form()
    {
        $form = new Form(new EquipeConselho());

        $form->display('id', 'ID');
        $form->text('nome', 'Nome')->rules('required|min:3|max:255');
        $form->text('cargo', 'Cargo')->rules('nullable|max:255');
        $form->select('tipo', 'Tipo')->options([
            'equipe' => 'Equipe',
            'conselho' => 'Conselho',
        ])->rules('required');
        $form->image('imagem', 'Imagem')->uniqueName()->removable();

        $form->datetime('created_at', 'Criado em')->default(now())->readonly();
        $form->datetime('updated_at', 'Atualizado em')->default(now())->readonly();

        return $form;
    }
}