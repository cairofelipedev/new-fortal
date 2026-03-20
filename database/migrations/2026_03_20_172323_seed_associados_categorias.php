<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up()
    {
        $categorias = [
            'agencia-de-viagem' => 'Agência de Viagem',
            'assessoria-de-imprensa' => 'Assessoria de Imprensa',
            'agencia-de-marketing-digital' => 'Agência de Marketing Digital',
            'buffet' => 'Buffet',
            'mestre-de-cerimonia' => 'Mestre de Cerimônia',
            'montagem' => 'Montagem',
            'traducao-simultanea' => 'Tradução Simultânea',
            'seguranca-para-eventos' => 'Segurança para Eventos',
            'restaurantes' => 'Restaurantes',
            'organizadora-de-eventos' => 'Organizadora de Eventos',
            'receptivo-e-transporte' => 'Receptivo e Transporte',
            'limpeza-geral' => 'Limpeza Geral',
            'equipamentos-para-eventos' => 'Equipamentos para Eventos',
            'praia-de-meireles' => 'Praia de Meireles',
            'praia-do-mucuripe' => 'Praia do Mucuripe',
            'praia-de-iracema' => 'Praia de Iracema',
        ];

        foreach ($categorias as $slug => $nome) {
            DB::table('associados_categorias')->updateOrInsert(
                ['slug' => $slug],
                [
                    'nome' => $nome,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]
            );
        }
    }

    public function down()
    {
        DB::table('associados_categorias')->truncate();
    }
};
