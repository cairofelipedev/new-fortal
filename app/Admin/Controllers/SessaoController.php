<?php

namespace App\Admin\Controllers;

use OpenAdmin\Admin\Controllers\AdminController;
use OpenAdmin\Admin\Form;
use OpenAdmin\Admin\Grid;
use OpenAdmin\Admin\Show;
use App\Models\Sessao;

class SessaoController extends AdminController
{
    protected $title = 'Sessões';

    /**
     * Grid de exibição das sessões.
     */
    protected function grid()
    {
        $grid = new Grid(new Sessao);

        $grid->column('id', __('ID'))->sortable();
        $grid->column('titulo', 'Título')->sortable();
        $grid->column('subtitulo', 'Subtítulo');
        $grid->column('botao_texto', 'Texto do Botão');
        $grid->column('botao_url', 'URL do Botão');
        $grid->column('pagina', 'Página');
        $grid->column('created_at', 'Criado em')->display(fn($value) => $value ? \Carbon\Carbon::parse($value)->format('d/m/Y H:i:s') : '-');

        return $grid;
    }

    /**
     * Detalhes da sessão.
     */
    protected function detail($id)
    {
        $show = new Show(Sessao::findOrFail($id));

        $show->field('id', __('ID'));
        $show->field('titulo', 'Título');
        $show->field('subtitulo', 'Subtítulo');
        $show->field('botao_texto', 'Texto do Botão');
        $show->field('botao_url', 'URL do Botão');
        $show->field('pagina', 'Página');
        $show->field('created_at', 'Criado em')->as(fn($value) => $value ? \Carbon\Carbon::parse($value)->format('d/m/Y H:i:s') : '-');

        return $show;
    }

    /**
     * Formulário de criação/edição da sessão.
     */
    protected function form()
    {
        $form = new Form(new Sessao);

        $form->display('id', __('ID'));
        $form->text('titulo', 'Título')->rules('required');
        $form->text('subtitulo', 'Subtítulo')->rules('nullable');
        $form->text('botao_texto', 'Texto do Botão')->rules('nullable');
        $form->url('botao_url', 'URL do Botão')->rules('nullable|url');
        $form->select('pagina', 'Página')
            ->options(['HOME' => 'HOME'])
            ->default('HOME')
            ->rules('required');

        return $form;
    }
}
