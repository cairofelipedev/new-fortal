<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('associados', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->string('categoria');
            $table->string('imagem');
            $table->timestamps();
        });

        // Inserindo os dados diretamente na migration
        DB::table('associados')->insert([
            ['nome' => 'CHANGE TURISMO', 'categoria' => 'agencia-de-viagem', 'imagem' => 'CHANGE TURISMO.jpg'],
            ['nome' => 'NAJA TURISMO', 'categoria' => 'agencia-de-viagem', 'imagem' => 'NAJA TURISMO.png'],
            ['nome' => 'CAPUCHINO PRESS', 'categoria' => 'assessoria-de-imprensa', 'imagem' => 'CAPUCHINO.png'],
            ['nome' => 'CS7 MKT DIGITAL', 'categoria' => 'agencia-de-marketing-digital', 'imagem' => 'CS7MKT.png'],
            ['nome' => 'AGÊNCIA ZEAL', 'categoria' => 'agencia-de-marketing-digital', 'imagem' => 'AGENCIA ZEAL.png'],
            ['nome' => 'LA MAISON', 'categoria' => 'buffet', 'imagem' => 'LA MAISON.png'],
            ['nome' => 'ILMAR GOURMET', 'categoria' => 'buffet', 'imagem' => 'ILMAR GOURMET.png'],
            ['nome' => 'MILENA GADELHA', 'categoria' => 'mestre-de-cerimonia', 'imagem' => 'logo_milena_preta - Milena Gadelha Voz.png'],
            ['nome' => 'A&M PRODUÇÕES ARTÍSTICAS', 'categoria' => 'montagem', 'imagem' => 'A&M.jpg'],
            ['nome' => 'ARTE PRODUÇÕES', 'categoria' => 'montagem', 'imagem' => 'ARTE PRODUÇÕES.jpeg'],
            ['nome' => 'BRILHANTE EVENTOS', 'categoria' => 'montagem', 'imagem' => 'BRILHANTE EVENTOS.jpg'],
            ['nome' => 'MONTADORA EXPO PRODUÇÕES', 'categoria' => 'montagem', 'imagem' => 'MONTADORAEXPO.png'],
            ['nome' => 'LUMINART', 'categoria' => 'montagem', 'imagem' => 'LUMINART.png'],
            ['nome' => 'PHOENIX SOLUÇÕES', 'categoria' => 'montagem', 'imagem' => 'PHOENIX.png'],
            ['nome' => 'FIRMA PRODUÇÕES', 'categoria' => 'montagem', 'imagem' => 'FIRMA.png'],
            ['nome' => 'ITI - INSTITUTO DE TRADUÇÃO E INTERPRETAÇÃO', 'categoria' => 'traducao-simultanea', 'imagem' => 'I.T.I..jpeg'],
            ['nome' => 'GRUPO PERES', 'categoria' => 'seguranca-para-eventos', 'imagem' => 'PEREZ.jpg'],
            ['nome' => 'COLOSSO FORTALEZA', 'categoria' => 'restaurantes', 'imagem' => 'logo-colosso FORTALEZA.png'],
            ['nome' => 'CERVEJARIA TURATTI', 'categoria' => 'restaurantes', 'imagem' => 'TURATTI.png'],
            ['nome' => 'ILLA MARE', 'categoria' => 'restaurantes', 'imagem' => 'ILLA MARE.png'],
            ['nome' => 'BOTECO DO ILLA', 'categoria' => 'restaurantes', 'imagem' => 'BOTECO DO ILLA.png'],
            ['nome' => 'BOTECO DONA MARIA', 'categoria' => 'restaurantes', 'imagem' => 'BOTECO DONA MARIA.png'],
            ['nome' => 'COMPLEXO CROCOBEACH', 'categoria' => 'restaurantes', 'imagem' => 'CROCOBEACH.png'],
            ['nome' => 'GUARDERIA BRASIL', 'categoria' => 'restaurantes', 'imagem' => 'GUARDERIA BRASIL.jpeg'],
            ['nome' => 'CHICO DO CARANGUEJO PRAIA DO FUTURO', 'categoria' => 'restaurantes', 'imagem' => 'chico.png'],
        ]);
    }


    public function down()
    {
        Schema::dropIfExists('associados');
    }
};
