<?php

namespace App\Admin\Controllers;

use App\Models\Banner;
use OpenAdmin\Admin\Controllers\AdminController;
use OpenAdmin\Admin\Form;
use OpenAdmin\Admin\Grid;
use OpenAdmin\Admin\Show;

class BannerController extends AdminController
{
    protected $title = 'Banners';

    /**
     * Grid de exibição dos banners.
     */
    protected function grid()
    {
        $grid = new Grid(new Banner);

        $grid->column('id', __('ID'))->sortable();
        $grid->column('name', 'Nome');
        $grid->column('image_desktop', 'Imagem Desktop')->image('', 100, 50);
        $grid->column('image_mobile', 'Imagem Mobile')->image('', 100, 50);
        $grid->column('page', 'Página');
        $grid->column('link', 'Link')->display(function ($value) {
            return $value ? "<a href='{$value}' target='_blank'>Link</a>" : '-';
        });

        $grid->column('titulo_visivel', 'Título Visível')->bool();
        $grid->column('created_at', 'Criado em')->display(function ($value) {
            return \Carbon\Carbon::parse($value)->format('d/m/Y H:i:s');
        });

        return $grid;
    }

    protected function detail($id)
    {
        $show = new Show(Banner::findOrFail($id));

        $show->field('id', __('ID'));
        $show->field('name', 'Nome');
        $show->field('image_desktop', 'Imagem Desktop')->image();
        $show->field('image_mobile', 'Imagem Mobile')->image();
        $show->field('page', 'Página');
        $show->field('link', 'Link')->link();
        $show->field('titulo_visivel', 'Título Visível')->bool();
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
        $form = new Form(new Banner);

        $form->display('id', __('ID'));
        $form->text('name', 'Nome')->rules('required|min:3|max:255');
        $form->image('image_desktop', 'Imagem Desktop')
            ->uniqueName()
            ->removable()
            ->help('Tamanho recomendado: 600x1800 pixels.');

        $form->image('image_mobile', 'Imagem Mobile')
            ->uniqueName()
            ->removable()
            ->help('Tamanho recomendado: 500x500 pixels.');
        $form->select('page', 'Página')
            ->options([
                'HOME' => 'HOME',
                'PORQUEFORTALEZA' => 'PORQUE FORTALEZA',
                'SOBREFORTALEZA' => 'SOBRE FORTALEZA',
                'ORGANIZADORAS' => 'ORGANIZADORAS',
                'EVENTOS' => 'ESPAÇOS PARA EVENTOS',
                'ASSOCIESE ' => 'ASSOCIE-SE',
                'QUEMS0MOS ' => 'QUEM SOMOS',
                'SERVICOS ' => 'SERVIÇOS',
                'ESCOLAS ' => 'ESCOLAS',
            ])
            ->rules('required');

        $form->text('link', 'Link')->rules('nullable|url|max:512');
        $form->switch('titulo_visivel', 'Título Visível')->default(1);

        $form->datetime('created_at', 'Criado em')->default(now())->readonly();
        $form->datetime('updated_at', 'Atualizado em')->default(now())->readonly();

        return $form;
    }
}
