<?php

namespace App\Admin\Controllers;

use App\Models\WhatsAppButton;
use OpenAdmin\Admin\Controllers\AdminController;
use OpenAdmin\Admin\Form;
use OpenAdmin\Admin\Grid;
use OpenAdmin\Admin\Show;

class WhatsAppButtonController extends AdminController
{
    protected $title = 'Botão WhatsApp';

    protected function grid()
    {
        $grid = new Grid(new WhatsAppButton);

        $grid->column('id', 'ID')->sortable();
        $grid->column('image_url', 'Imagem')->image('', 60, 60);
        $grid->column('whatsapp_link', 'Link')->display(function ($value) {
            return $value ? "<a href='{$value}' target='_blank'>Abrir</a>" : '-';
        });
        $grid->column('created_at', 'Criado em')->display(function ($value) {
            return \Carbon\Carbon::parse($value)->format('d/m/Y H:i');
        });

        return $grid;
    }

    protected function detail($id)
    {
        $show = new Show(WhatsAppButton::findOrFail($id));

        $show->field('id', 'ID');
        $show->field('image_url', 'Imagem')->image();
        $show->field('whatsapp_link', 'Link')->link();
        $show->field('created_at', 'Criado em')->as(function ($value) {
            return \Carbon\Carbon::parse($value)->format('d/m/Y H:i');
        });
        $show->field('updated_at', 'Atualizado em')->as(function ($value) {
            return \Carbon\Carbon::parse($value)->format('d/m/Y H:i');
        });

        return $show;
    }

    protected function form()
    {
        $form = new Form(new WhatsAppButton);

        $form->display('id', 'ID');

        $form->image('image_url', 'Imagem do Botão')
            ->uniqueName()
            ->removable()
            ->move('uploads/whatsapp')
            ->help('Tamanho recomendado: 60x60 pixels.');

        $form->url('whatsapp_link', 'Link do WhatsApp')
            ->rules('required|url')
            ->help('Ex: https://wa.me/558899999999');

        $form->datetime('created_at', 'Criado em')->default(now())->readonly();
        $form->datetime('updated_at', 'Atualizado em')->default(now())->readonly();

        return $form;
    }
}
