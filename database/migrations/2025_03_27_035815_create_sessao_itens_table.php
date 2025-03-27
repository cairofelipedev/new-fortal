<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sessao_itens', function (Blueprint $table) {
            $table->id();
            $table->foreignId('sessao_id')->constrained('sessoes')->onDelete('cascade');
            $table->string('titulo');
            $table->enum('tipo', ['imagem', 'video']);
            $table->string('arquivo'); // Caminho para imagem ou URL do vídeo
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sessao_itens');
    }
};
