<?php

namespace App\Admin\Controllers;

use OpenAdmin\Admin\Controllers\AdminController;
use OpenAdmin\Admin\Form;
use OpenAdmin\Admin\Grid;
use OpenAdmin\Admin\Show;
use App\Models\Company;

class CompanyController extends AdminController
{
    protected $title = 'Companies';

    protected function grid()
    {
        $grid = new Grid(new Company);

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

    protected function detail($id)
    {
        $show = new Show(Company::findOrFail($id));

        $show->field('id', __('ID'));
        $show->field('name', __('Name'));
        $show->field('email', __('Email'));
        $show->field('created_at', __('Created at'))->as(function ($value) {
            return \Carbon\Carbon::parse($value)->format('d/m/Y H:i:s');
        });

        return $show;
    }

    protected function form()
    {
        $form = new Form(new Company);

        $form->display('id', __('ID'));
        $form->text('name', 'Name')->rules('required|min:3|max:100');
        $form->email('email', 'Email');
        $form->text('phone', 'Phone')->rules('required');
        $form->text('address', 'Address')->rules('required');
        $form->text('city', 'City')->rules('required');
        $form->text('state', 'State')->rules('required');
        $form->text('zip_code', 'ZIP Code');
        $form->text('website', 'Website');
        $form->switch('publish', 'Publish')->default(false);

        return $form;
    }
}
