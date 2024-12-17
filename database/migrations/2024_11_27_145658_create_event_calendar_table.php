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
        Schema::create('event_calendar', function (Blueprint $table) {
            $table->id(); // Chave primária
            $table->string('name'); // Nome do evento
            $table->date('date'); // Data do evento
            $table->string('month'); // Mês do evento
            $table->integer('pax'); // Número de participantes (PAX)
            $table->string('contact'); // Contato
            $table->string('organization'); // Organização responsável
            $table->string('location'); // Localização do evento
            $table->string('website')->nullable(); // Site do evento (opcional)
            $table->string('image'); // Imagem do evento
            $table->timestamps(); // Campos created_at e updated_at
        });
    }

    public function down()
    {
        Schema::dropIfExists('event_calendar'); // Remove a tabela se for necessário reverter
    }
};
