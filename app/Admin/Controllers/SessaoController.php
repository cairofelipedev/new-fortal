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
     * Tabela de listagem das sessões.
     */
    protected function grid()
    {
        $grid = new Grid(new Sessao);

        $grid->column('id', 'ID')->sortable();
        $grid->column('titulo', 'Título')->sortable();
        $grid->column('subtitulo', 'Subtítulo');
        $grid->column('botao_texto', 'Texto do Botão');
        $grid->column('botao_url', 'URL do Botão');
        $grid->column('pagina', 'Página');
        $grid->column('posicao', 'Posição')->display(function ($value) {
            return match ($value) {
                1 => 'Primeira',
                2 => 'Segunda',
                3 => 'Terceira',
                4 => 'Quarta',
                5 => 'Quinta',
                default => '-',
            };
        });
        $grid->column('created_at', 'Criado em')->display(fn($value) => $value ? \Carbon\Carbon::parse($value)->format('d/m/Y H:i:s') : '-');

        // Adiciona o botão "Itens" na coluna de ações
        $grid->column('acoes', 'Ações')->display(function () {
            $url = admin_url("sessaoitem?sessao_id={$this->id}");
            return "<a href='{$url}' class='btn btn-sm btn-primary'>Itens</a>";
        });

        return $grid;
    }

    /**
     * Detalhamento da sessão.
     */
    protected function detail($id)
    {
        $show = new Show(Sessao::findOrFail($id));

        $show->field('id', 'ID');
        $show->field('titulo', 'Título');
        $show->field('subtitulo', 'Subtítulo');
        $show->field('botao_texto', 'Texto do botão');
        $show->field('botao_url', 'URL do botão');
        $show->field('pagina', 'Página');
        $show->field('posicao', 'Posição')->as(function ($valor) {
            return match ($valor) {
                1 => 'Primeira',
                2 => 'Segunda',
                3 => 'Terceira',
                4 => 'Quarta',
                5 => 'Quinta',
                default => '-',
            };
        });
        $show->field('created_at', 'Criado em')->as(fn($valor) => $valor ? \Carbon\Carbon::parse($valor)->format('d/m/Y H:i:s') : '-');

        return $show;
    }

    /**
     * Formulário para criar ou editar uma sessão.
     */
    protected function form()
    {
        $form = new Form(new Sessao);

        $form->display('id', 'ID');
        $form->text('titulo', 'Título')->rules('required');
        $form->text('subtitulo', 'Subtítulo')->rules('nullable');
        $form->text('botao_texto', 'Texto do botão')->rules('nullable');
        $form->url('botao_url', 'URL do botão')->rules('nullable|url');
        $form->select('pagina', 'Página')
            ->options([
                'HOME' => 'HOME',
                'PORQUEFORTALEZA' => 'PORQUEFORTALEZA',
            ])
            ->rules('required');
        $form->select('posicao', 'Posição')
            ->options([
                1 => 'Primeira',
                2 => 'Segunda',
                3 => 'Terceira',
                4 => 'Quarta',
                5 => 'Quinta',
            ])
            ->rules('required|integer|between:1,5');

        return $form;
    }
}
