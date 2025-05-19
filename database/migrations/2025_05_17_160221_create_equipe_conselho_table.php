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
        Schema::create('equipe_conselho', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->string('cargo')->nullable(); // Conselho pode não ter cargo
            $table->enum('tipo', ['equipe', 'conselho']);
            $table->string('imagem')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('equipe_conselho');
    }
};
