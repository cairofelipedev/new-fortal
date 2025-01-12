<?php

namespace App\Admin\Controllers;

use OpenAdmin\Admin\Controllers\AdminController;
use OpenAdmin\Admin\Form;
use OpenAdmin\Admin\Grid;
use OpenAdmin\Admin\Show;
use App\Models\EventSpace;
use App\Models\EventType;

class EventSpaceController extends AdminController
{
    protected $title = 'Lista de Espaços de Eventos';

    protected function grid()
    {
        $grid = new Grid(new EventSpace);

        $grid->column('id', __('ID'))->sortable();
        $grid->column('company.name', 'Empresa');
        $grid->column('name', 'Nome');
        $grid->column('city', 'Cidade');
        $grid->column('state', 'Estado');
        $grid->column('capacity', 'Capacidade');
        $grid->column('status', 'Status')->display(function ($status) {
            return $status === 'active' ? 'Ativo' : 'Inativo';
        });
        $grid->column('created_at', __('Criado em'))->display(function ($value) {
            return \Carbon\Carbon::parse($value)->format('d/m/Y H:i:s');
        });

        return $grid;
    }

    protected function detail($id)
    {
        $show = new Show(EventSpace::findOrFail($id));

        $show->field('id', __('ID'));
        $show->field('company.name', 'Empresa');
        $show->field('name', 'Nome');
        $show->field('slug', 'Slug');
        $show->field('city', 'Cidade');
        $show->field('state', 'Estado');
        $show->field('zip_code', 'CEP');
        $show->field('address', 'Endereço');
        $show->field('capacity', 'Capacidade');
        $show->field('phone', 'Telefone');
        $show->field('type', 'Tipo');
        $show->field('description', 'Descrição');
        $show->field('image', 'Imagem Principal')->image();
        $show->field('images', 'Imagens')->json();
        $show->field('floor_plan', 'Planta Baixa')->image();
        $show->field('status', 'Status')->using(['active' => 'Ativo', 'inactive' => 'Inativo']);
        $show->field('publish', 'Publicado')->as(function ($publish) {
            return $publish ? 'Sim' : 'Não';
        });
        $show->field('linkedin', 'LinkedIn');
        $show->field('instagram', 'Instagram');
        $show->field('facebook', 'Facebook');
        $show->field('tiktok', 'TikTok');
        $show->field('pinterest', 'Pinterest');
        $show->field('flickr', 'Flickr');
        $show->field('youtube', 'YouTube');
        $show->field('email', 'E-mail');
        $show->field('whatsapp', 'WhatsApp');
        $show->field('tourist_region', 'Região Turística');
        $show->field('room_count', 'Número de Quartos');
        $show->field('bed_count', 'Número de Camas');
        $show->field('distance_to_sea', 'Distância ao Mar');
        $show->field('dining_facilities', 'Instalações para Refeições');
        $show->field('other_facilities', 'Outras Instalações');
        $show->field('services', 'Serviços');
        $show->field('accessible_rooms', 'Quartos Acessíveis');
        $show->field('accessible_type', 'Tipo de Acessibilidade');
        $show->field('total_event_area', 'Área Total para Eventos');
        $show->field('largest_room_area', 'Maior Sala - Área');
        $show->field('largest_room_ceiling_height', 'Maior Sala - Altura do Teto');
        $show->field('pavilion_ceiling_height', 'Altura do Teto do Pavilhão');
        $show->field('smallest_event_room_area', 'Menor Sala para Eventos');
        $show->field('total_rentable_event_rooms', 'Total de Salas Alugáveis');
        $show->field('direct_event_services', 'Serviços Diretos para Eventos');
        $show->field('other_rentable_spaces', 'Outros Espaços Alugáveis');
        $show->field('parking_capacity', 'Capacidade de Estacionamento');
        $show->field('top_5_events', 'Top 5 Eventos');
        $show->field('accessibility_comments', 'Comentários sobre Acessibilidade');
        $show->field('sustainable_practices', 'Práticas Sustentáveis');
        $show->field('pet_friendly', 'Aceita Animais');
        $show->field('pet_friendly_policy', 'Política de Animais');

        return $show;
    }

    protected function form()
    {
        $form = new Form(new EventSpace);

        $form->display('id', __('ID'));
        $form->select('company_id', 'Empresa')
            ->options(\App\Models\Company::pluck('name', 'id'))
            ->rules('required');
        $form->text('name', 'Nome')->rules('required|min:3|max:255');
        $form->text('slug', 'Slug')->rules('required|min:3|max:255');
        $form->text('city', 'Cidade')->rules('required');
        $form->text('state', 'Estado');
        $form->text('zip_code', 'CEP');
        $form->text('address', 'Endereço')->rules('required|min:3|max:255');
        $form->number('capacity', 'Capacidade')->rules('integer|min:1');
        $form->text('phone', 'Telefone');
        $form->select('type', 'Tipo')->options(EventType::pluck('name', 'id'));
        $form->textarea('description', 'Descrição')->rows(10)->rules('nullable');
        $form->image('image', 'Imagem Principal')->uniqueName()->removable()->downloadable();
        $form->multipleImage('images', 'Imagens')->uniqueName()->removable()->downloadable();
        $form->image('floor_plan', 'Planta Baixa')->uniqueName()->removable()->downloadable();
        $form->select('status', 'Status')
            ->options(['active' => 'Ativo', 'inactive' => 'Inativo'])
            ->default('active')
            ->rules('required');
        $form->switch('publish', 'Publicado')->default(false);
        $form->text('linkedin', 'LinkedIn');
        $form->text('instagram', 'Instagram');
        $form->text('facebook', 'Facebook');
        $form->text('tiktok', 'TikTok');
        $form->text('pinterest', 'Pinterest');
        $form->text('flickr', 'Flickr');
        $form->text('youtube', 'YouTube');
        $form->text('email', 'E-mail');
        $form->text('whatsapp', 'WhatsApp');
        $form->text('tourist_region', 'Região Turística');
        $form->text('room_count', 'Número de Quartos');
        $form->text('bed_count', 'Número de Camas');
        $form->text('distance_to_sea', 'Distância ao Mar');
        $form->text('dining_facilities', 'Instalações para Refeições');
        $form->text('other_facilities', 'Outras Instalações');
        $form->text('services', 'Serviços');
        $form->text('accessible_rooms', 'Quartos Acessíveis');
        $form->text('accessible_type', 'Tipo de Acessibilidade');
        $form->text('total_event_area', 'Área Total para Eventos');
        $form->text('largest_room_area', 'Maior Sala - Área');
        $form->text('largest_room_ceiling_height', 'Maior Sala - Altura do Teto');
        $form->text('pavilion_ceiling_height', 'Altura do Teto do Pavilhão');
        $form->text('smallest_event_room_area', 'Menor Sala para Eventos');
        $form->text('total_rentable_event_rooms', 'Total de Salas Alugáveis');
        $form->text('direct_event_services', 'Serviços Diretos para Eventos');
        $form->text('other_rentable_spaces', 'Outros Espaços Alugáveis');
        $form->text('parking_capacity', 'Capacidade de Estacionamento');
        $form->textarea('top_5_events', 'Top 5 Eventos');
        $form->textarea('accessibility_comments', 'Comentários sobre Acessibilidade');
        $form->textarea('sustainable_practices', 'Práticas Sustentáveis');
        $form->text('pet_friendly', 'Aceita Animais');
        $form->textarea('pet_friendly_policy', 'Política de Animais');

        return $form;
    }
}
