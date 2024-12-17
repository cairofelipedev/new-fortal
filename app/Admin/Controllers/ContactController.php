<?php

namespace App\Admin\Controllers;

use OpenAdmin\Admin\Controllers\AdminController;
use OpenAdmin\Admin\Form;
use OpenAdmin\Admin\Grid;
use OpenAdmin\Admin\Show;
use App\Models\Contact;
use App\Models\Company;

class ContactController extends AdminController
{
    protected $title = 'Lista de Contatos';

    /**
     * Grid de exibição dos contatos.
     */
    protected function grid()
    {
        $grid = new Grid(new Contact);

        $grid->column('id', __('ID'))->sortable();
        $grid->column('name', 'Nome');
        $grid->column('email', 'E-mail');
        $grid->column('job_title', 'Cargo');
        $grid->column('city', 'Cidade');
        $grid->column('state', 'Estado');
        $grid->column('country', 'País');
        $grid->column('id_company', 'Empresa')->display(function ($idCompany) {
            return $this->company->name ?? 'N/A';
        });
        $grid->column('created_at', 'Criado em')->display(function ($value) {
            return \Carbon\Carbon::parse($value)->format('d/m/Y H:i:s');
        });

        return $grid;
    }

    /**
     * Detalhes do contato.
     */
    protected function detail($id)
    {
        $show = new Show(Contact::findOrFail($id));

        $show->field('id', __('ID'));
        $show->field('name', 'Nome');
        $show->field('email', 'E-mail');
        $show->field('job_title', 'Cargo');
        $show->field('birthdate', 'Data de Nascimento');
        $show->field('bio', 'Biografia');
        $show->field('website', 'Website');
        $show->field('personal_phone', 'Telefone Pessoal');
        $show->field('mobile_phone', 'Telefone Celular');
        $show->field('city', 'Cidade');
        $show->field('state', 'Estado');
        $show->field('country', 'País');
        $show->field('twitter', 'Twitter');
        $show->field('facebook', 'Facebook');
        $show->field('linkedin', 'LinkedIn');
        $show->field('tags', 'Tags')->as(function ($tags) {
            return json_encode($tags);
        });
        $show->field('company.name', 'Empresa');
        $show->field('created_at', 'Criado em')->as(function ($value) {
            return \Carbon\Carbon::parse($value)->format('d/m/Y H:i:s');
        });
        $show->field('updated_at', 'Atualizado em')->as(function ($value) {
            return \Carbon\Carbon::parse($value)->format('d/m/Y H:i:s');
        });

        return $show;
    }

    /**
     * Formulário de criação/edição do contato.
     */
    protected function form()
    {
        $form = new Form(new Contact);

        $form->display('id', __('ID'));
        $form->text('name', 'Nome')->rules('required|min:3|max:255');
        $form->email('email', 'E-mail')->rules('required|email');
        $form->text('job_title', 'Cargo');
        $form->date('birthdate', 'Data de Nascimento')->rules('nullable|date');
        $form->textarea('bio', 'Biografia')->rows(5);
        $form->url('website', 'Website')->rules('nullable|url');
        $form->text('personal_phone', 'Telefone Pessoal');
        $form->text('mobile_phone', 'Telefone Celular');
        $form->text('city', 'Cidade');
        $form->text('state', 'Estado');
        $form->text('country', 'País');
        $form->text('twitter', 'Twitter');
        $form->text('facebook', 'Facebook');
        $form->text('linkedin', 'LinkedIn');
        $form->tags('tags', 'Tags');
        $form->select('id_company', 'Empresa')
            ->options(Company::pluck('name', 'id'))
            ->rules('nullable|exists:companies,id');

        $form->datetime('created_at', 'Criado em')->default(now())->readonly();
        $form->datetime('updated_at', 'Atualizado em')->default(now())->readonly();

        return $form;
    }
}
