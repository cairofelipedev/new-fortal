<?php

namespace App\Admin\Controllers;

use OpenAdmin\Admin\Controllers\AdminController;
use OpenAdmin\Admin\Form;
use OpenAdmin\Admin\Grid;
use OpenAdmin\Admin\Show;
use App\Models\Contact;

class ContactController extends AdminController
{
    protected $title = 'Contacts';

    // Grid view configuration
    protected function grid()
    {
        $grid = new Grid(new Contact);

        $grid->column('id', __('ID'))->sortable();
        $grid->column('name', 'Name');
        $grid->column('email', 'Email');
        $grid->column('phone', 'Phone');
        $grid->column('city', 'City');
        $grid->column('state', 'State');
        $grid->column('created_at', __('Created at'))->display(function ($value) {
            return \Carbon\Carbon::parse($value)->format('d/m/Y H:i:s');
        });

        return $grid;
    }

    // Detail view configuration
    protected function detail($id)
    {
        $show = new Show(Contact::findOrFail($id));

        $show->field('id', __('ID'));
        $show->field('name', __('Name'));
        $show->field('email', __('Email'));
        $show->field('phone', __('Phone'));
        $show->field('city', __('City'));
        $show->field('state', __('State'));
        $show->field('created_at', __('Created at'))->as(function ($value) {
            return \Carbon\Carbon::parse($value)->format('d/m/Y H:i:s');
        });

        return $show;
    }

    // Form view configuration
    protected function form()
    {
        $form = new Form(new Contact);

        $form->display('id', __('ID'));
        $form->text('name', 'Name')->rules('required|min:3|max:100');
        $form->email('email', 'Email')->rules('required|email|unique:contacts,email');
        $form->text('personal_phone', 'Personal Phone')->rules('nullable');
        $form->text('mobile_phone', 'Mobile Phone')->rules('required');
        $form->text('city', 'City')->rules('required');
        $form->text('state', 'State')->rules('required');
        $form->text('country', 'Country')->rules('required');
        $form->url('website', 'Website')->rules('nullable|url');
        $form->textarea('bio', 'Bio')->rules('nullable|max:500');
        $form->text('twitter', 'Twitter')->rules('nullable|url');
        $form->text('linkedin', 'LinkedIn')->rules('nullable|url');
        $form->switch('publish', 'Publish')->default(false);

        return $form;
    }
}
