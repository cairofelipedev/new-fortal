<?php

namespace App\Admin\Controllers;

use OpenAdmin\Admin\Controllers\AdminController;
use OpenAdmin\Admin\Form;
use OpenAdmin\Admin\Grid;
use OpenAdmin\Admin\Show;
use App\Models\Post;

class PostController extends AdminController
{
    protected $title = 'Posts do Blog';

    /**
     * Grid de exibição dos posts.
     */
    protected function grid()
    {
        $grid = new Grid(new Post);

        $grid->column('id', __('ID'))->sortable();
        $grid->column('title', 'Título');
        $grid->column('author', 'Autor');
        $grid->column('slug', 'Slug');
        $grid->column('published', 'Publicado')->bool(); // Exibição como booleano
        $grid->column('published_at', 'Publicado em')->display(function ($value) {
            return $value ? \Carbon\Carbon::parse($value)->format('d/m/Y H:i:s') : '-';
        });
        $grid->column('created_at', 'Criado em')->display(function ($value) {
            return \Carbon\Carbon::parse($value)->format('d/m/Y H:i:s');
        });

        return $grid;
    }

    /**
     * Detalhes do post.
     */
    protected function detail($id)
    {
        $show = new Show(Post::findOrFail($id));

        $show->field('id', __('ID'));
        $show->field('title', 'Título');
        $show->field('content', 'Conteúdo')->unescape();
        $show->field('author', 'Autor');
        $show->field('image', 'Imagem')->image();
        $show->field('published', 'Publicado')->as(function ($value) {
            return $value ? 'Sim' : 'Não';
        });
        $show->field('published_at', 'Publicado em')->as(function ($value) {
            return $value ? \Carbon\Carbon::parse($value)->format('d/m/Y H:i:s') : '-';
        });
        $show->field('created_at', 'Criado em')->as(function ($value) {
            return \Carbon\Carbon::parse($value)->format('d/m/Y H:i:s');
        });
        $show->field('updated_at', 'Atualizado em')->as(function ($value) {
            return \Carbon\Carbon::parse($value)->format('d/m/Y H:i:s');
        });

        return $show;
    }

    /**
     * Formulário de criação/edição do post.
     */
    protected function form()
    {
        $form = new Form(new Post);

        $form->display('id', __('ID'));
        $form->text('title', 'Título')->rules('required|min:3|max:255');
        $form->textarea('content', 'Conteúdo')->rules('required');
        $form->text('author', 'Autor')->rules('nullable|max:100');
        $form->image('image', 'Imagem')->uniqueName()->removable();
        $form->switch('published', 'Publicado')->default(false);
        $form->datetime('published_at', 'Publicado em')->rules('nullable|date');

        $form->datetime('created_at', 'Criado em')->default(now())->readonly();
        $form->datetime('updated_at', 'Atualizado em')->default(now())->readonly();

        return $form;
    }
}
