<?php

namespace App\Admin\Controllers;

use OpenAdmin\Admin\Controllers\AdminController;
use OpenAdmin\Admin\Form;
use OpenAdmin\Admin\Grid;
use OpenAdmin\Admin\Show;
use App\Models\Associado;

class AssociadoController extends AdminController
{
    protected $title = 'Associados e Organizadoras';

    protected function grid()
    {
        $grid = new Grid(new Associado);

        $grid->column('id', __('ID'))->sortable();
        $grid->column('nome', 'Nome')->sortable();
        $grid->column('categoria', 'Categoria')->sortable();
        $grid->column('type', 'Tipo')->sortable(); // Novo campo
        $grid->column('imagem', 'Imagem')->image('', 100, 100);
        $grid->column('created_at', 'Criado em')->display(function ($value) {
            return \Carbon\Carbon::parse($value)->format('d/m/Y H:i:s');
        });

        // Filtros personalizados
        $grid->filter(function ($filter) {
            // Remove o filtro por ID se quiser
            $filter->disableIdFilter();

            // Filtro por nome
            $filter->like('nome', 'Nome');

            // Filtro por tipo (associado ou organizador)
            $filter->equal('type', 'Tipo')->select([
                'associado' => 'Associado',
                'organizador' => 'Organizador',
            ]);
        });

        return $grid;
    }

    protected function detail($id)
    {
        $show = new Show(Associado::findOrFail($id));

        $show->field('id', __('ID'));
        $show->field('nome', 'Nome');
        $show->field('categoria', 'Categoria');
        $show->field('type', 'Tipo'); // Novo campo
        $show->field('imagem', 'Imagem')->image();
        $show->field('content', 'Conteúdo')->unescape()->as(function ($content) {
            return $content;
        });
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
        $form = new Form(new Associado);

        $form->display('id', __('ID'));
        $form->text('nome', 'Nome')->rules('required|min:3|max:255');

        $form->select('categoria', 'Categoria')->options([
            'agencia-de-viagem' => 'Agência de Viagem',
            'assessoria-de-imprensa' => 'Assessoria de Imprensa',
            'agencia-de-marketing-digital' => 'Agência de Marketing Digital',
            'buffet' => 'Buffet',
            'mestre-de-cerimonia' => 'Mestre de Cerimônia',
            'montagem' => 'Montagem',
            'traducao-simultanea' => 'Tradução Simultânea',
            'seguranca-para-eventos' => 'Segurança para Eventos',
            'restaurantes' => 'Restaurantes',
            'organizadora-de-eventos' => 'Organizadora de Eventos',
            'receptivo-e-transporte' => 'Receptivo e Transporte',
            'limpeza-geral' => 'Limpeza Geral',
            'equipamentos-para-eventos' => 'Equipamentos para Eventos',
        ])->rules('required');

        $form->select('type', 'Tipo')->options([
            'associado' => 'Associado',
            'organizador' => 'Organizador',
        ])->default('associado')->rules('required');

        $form->image('imagem', 'Imagem')->uniqueName()->removable();
        $form->ckeditor('content', 'Conteúdo')->rules('nullable');
        $form->datetime('created_at', 'Criado em')->default(now())->readonly();
        $form->datetime('updated_at', 'Atualizado em')->default(now())->readonly();

        return $form;
    }
}
