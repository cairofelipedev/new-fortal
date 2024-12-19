<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title'); // Título do post
            $table->text('content'); // Conteúdo do post
            $table->string('author')->nullable(); // Autor do post
            $table->string('image')->nullable(); // Caminho da imagem
            $table->string('slug')->unique(); // Slug único para URL amigável
            $table->boolean('published')->default(false); // Status de publicação
            $table->timestamp('published_at')->nullable(); // Data de publicação
            $table->timestamps(); // Campos created_at e updated_at
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
};
