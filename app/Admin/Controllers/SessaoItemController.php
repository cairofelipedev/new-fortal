<?php

namespace App\Admin\Controllers;

use OpenAdmin\Admin\Controllers\AdminController;
use OpenAdmin\Admin\Form;
use OpenAdmin\Admin\Grid;
use OpenAdmin\Admin\Show;
use App\Models\Sessao;
use App\Models\SessaoItem;

class SessaoItemController extends AdminController
{
    protected $title = 'Itens da Sessão';

    /**
     * Grid de exibição dos itens.
     */
    protected function grid()
    {
        $grid = new Grid(new SessaoItem);

        $grid->column('id', __('ID'))->sortable();
        $grid->column('sessao.titulo', 'Sessão')->sortable();
        $grid->column('titulo', 'Título')->sortable();
        $grid->column('tipo', 'Tipo')->sortable();

        // Exibe corretamente imagem ou link de vídeo
        $grid->column('arquivo', 'Arquivo')->display(function () {
            if ($this->tipo === 'imagem' && $this->arquivo_imagem) {
                return "<img src='" . asset("uploads/{$this->arquivo_imagem}") . "' width='50' />";
            }
            if ($this->tipo === 'video' && $this->arquivo_video) {
                return "<a href='{$this->arquivo_video}' target='_blank'>Ver Vídeo</a>";
            }
            return '-';
        });

        return $grid;
    }

    /**
     * Detalhes do item da sessão.
     */
    protected function detail($id)
    {
        $show = new Show(SessaoItem::findOrFail($id));

        $show->field('id', __('ID'));
        $show->field('sessao.titulo', 'Sessão');
        $show->field('titulo', 'Título');
        $show->field('tipo', 'Tipo');

        // Exibe corretamente imagem ou link de vídeo
        $show->field('arquivo', 'Arquivo')->as(function () {
            if ($this->tipo === 'imagem' && $this->arquivo_imagem) {
                return "<img src='" . asset("uploads/{$this->arquivo_imagem}") . "' width='100' />";
            }
            if ($this->tipo === 'video' && $this->arquivo_video) {
                return "<a href='{$this->arquivo_video}' target='_blank'>Ver Vídeo</a>";
            }
            return '-';
        });

        return $show;
    }

    /**
     * Formulário de criação/edição do item da sessão.
     */
    protected function form()
    {
        $form = new Form(new SessaoItem);

        $form->select('sessao_id', 'Sessão')
            ->options(Sessao::pluck('titulo', 'id'))
            ->rules('required');

        $form->text('titulo', 'Título')->rules('required');

        $form->radio('tipo', 'Tipo')
            ->options(['imagem' => 'Imagem', 'video' => 'Vídeo'])
            ->default('imagem');

        // Campo para vídeos (não obrigatório)
        $form->text('arquivo_video', 'URL do Vídeo')
            ->rules('nullable|url')
            ->help('Se for um vídeo, informe a URL.');

        // Campo para imagens (não obrigatório)
        $form->image('arquivo_imagem', 'Imagem')
            ->uniqueName()
            ->removable()
            ->rules('nullable')
            ->help('Se for uma imagem, envie o arquivo.');

        return $form;
    }
}
