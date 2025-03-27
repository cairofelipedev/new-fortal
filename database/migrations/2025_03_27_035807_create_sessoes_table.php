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
        Schema::create('sessoes', function (Blueprint $table) {
            $table->id();
            $table->string('titulo');
            $table->string('subtitulo')->nullable();
            $table->string('botao_texto')->nullable();
            $table->string('botao_url')->nullable();
            $table->string('pagina')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sessoes');
    }
};
