<?php

namespace App\Admin\Controllers;

use OpenAdmin\Admin\Controllers\AdminController;
use OpenAdmin\Admin\Form;
use OpenAdmin\Admin\Grid;
use OpenAdmin\Admin\Show;
use App\Models\Associado;

class AssociadoController extends AdminController
{
    protected $title = 'Associados, Organizadoras e Escolas Náuticas';

    protected function grid()
    {
        $grid = new Grid(new Associado);

        $grid->column('id', __('ID'))->sortable();
        $grid->column('nome', 'Nome')->sortable();
        $grid->column('categoria', 'Categoria')->sortable();
        $grid->column('type', 'Tipo')->sortable();
        $grid->column('imagem', 'Imagem')->image('', 100, 100);
        $grid->column('link', 'Link')->display(function ($value) {
            return $value ? "<a href='{$value}' target='_blank'>Abrir</a>" : '-';
        })->sortable()->style('max-width: 150px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;');

        $grid->column('whatsapp', 'WhatsApp')->sortable();
        $grid->column('instagram', 'Instagram')->sortable();

        $grid->column('created_at', 'Criado em')->display(function ($value) {
            return \Carbon\Carbon::parse($value)->format('d/m/Y H:i:s');
        });

        $grid->filter(function ($filter) {
            $filter->disableIdFilter();
            $filter->like('nome', 'Nome');
            $filter->equal('type', 'Tipo')->select([
                'associado' => 'Associado',
                'organizador' => 'Organizador',
                'escolas' => 'Escolas Náuticas',
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
        $show->field('type', 'Tipo');
        $show->field('imagem', 'Imagem')->image();
        $show->field('content', 'Conteúdo')->unescape()->as(function ($content) {
            return $content;
        });

        $show->field('link', 'Link')->as(function ($value) {
            return $value ? "<a href='{$value}' target='_blank'>{$value}</a>" : '-';
        })->unescape();

        $show->field('whatsapp', 'WhatsApp');
        $show->field('instagram', 'Instagram');

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
            // ✅ Novas categorias
            'praia-de-meireles' => 'Praia de Meireles',
            'praia-do-mucuripe' => 'Praia do Mucuripe',
            'praia-de-iracema' => 'Praia de Iracema',
        ])->rules('required');

        $form->select('type', 'Tipo')->options([
            'associado' => 'Associado',
            'organizador' => 'Organizador',
            'escolas' => 'Escolas Náuticas',
        ])->default('associado')->rules('required');

        $form->image('imagem', 'Imagem')
            ->uniqueName()
            ->rules(function ($form) {
                return $form->isCreating() ? 'required|image' : 'nullable|image';
            })
            ->customFormat(function ($value) {
                return $value;
            })
            ->help('Selecione uma imagem válida. Este campo é obrigatório ao cadastrar.');

        $form->ckeditor('content', 'Conteúdo')->rules('nullable');

        $form->url('link', 'Link do site')->rules('nullable|url');
        $form->text('whatsapp', 'WhatsApp')->rules('nullable|string|max:255');
        $form->text('instagram', 'Instagram')->rules('nullable|string|max:255');

        $form->datetime('created_at', 'Criado em')->default(now())->readonly();
        $form->datetime('updated_at', 'Atualizado em')->default(now())->readonly();

        return $form;
    }
}
