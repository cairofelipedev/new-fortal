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
        $grid->column('created_at', 'Criado em')->display(function ($value) {
            return \Carbon\Carbon::parse($value)->format('d/m/Y H:i:s');
        });

        return $grid;
    }

    /**
     * Detalhes do banner.
     */
    protected function detail($id)
    {
        $show = new Show(Banner::findOrFail($id));

        $show->field('id', __('ID'));
        $show->field('name', 'Nome');
        $show->field('image_desktop', 'Imagem Desktop')->image();
        $show->field('image_mobile', 'Imagem Mobile')->image();
        $show->field('page', 'Página');
        $show->field('created_at', 'Criado em')->as(function ($value) {
            return \Carbon\Carbon::parse($value)->format('d/m/Y H:i:s');
        });
        $show->field('updated_at', 'Atualizado em')->as(function ($value) {
            return \Carbon\Carbon::parse($value)->format('d/m/Y H:i:s');
        });

        return $show;
    }

    /**
     * Formulário de criação/edição do banner.
     */
    protected function form()
    {
        $form = new Form(new Banner);

        $form->display('id', __('ID'));
        $form->text('name', 'Nome')->rules('required|min:3|max:255');
        $form->image('image_desktop', 'Imagem Desktop')->uniqueName()->removable();
        $form->image('image_mobile', 'Imagem Mobile')->uniqueName()->removable();
        $form->select('page', 'Página')
            ->options([
                'HOME' => 'HOME',
                'PORQUEFORTALEZA' => 'PORQUEFORTALEZA',
                'SOBREFORTALEZA' => 'SOBREFORTALEZA',
                'ORGANIZADORAS' => 'ORGANIZADORAS',
            ])
            ->rules('required');
        $form->datetime('created_at', 'Criado em')->default(now())->readonly();
        $form->datetime('updated_at', 'Atualizado em')->default(now())->readonly();

        return $form;
    }
}
