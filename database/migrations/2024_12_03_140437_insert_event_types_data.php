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
        DB::table('event_types')->insert([
            ['name' => 'CENTRO DE CONVENÇÕES E EXPOSIÇÕES INDEPENDENTES'],
            ['name' => 'LOCAIS SINGULARES PARA EVENTOS'],
            ['name' => 'HOTEL/RESORT COM CENTRO DE CONVENÇÕES/EXPOSIÇÕES'],
            ['name' => 'HOTEL COM SALAS PARA EVENTOS'],
        ]);
    }

    public function down()
    {
        DB::table('event_types')->whereIn('name', [
            'CENTRO DE CONVENÇÕES E EXPOSIÇÕES INDEPENDENTES',
            'LOCAIS SINGULARES PARA EVENTOS',
            'HOTEL/RESORT COM CENTRO DE CONVENÇÕES/EXPOSIÇÕES',
            'HOTEL COM SALAS PARA EVENTOS',
        ])->delete();
    }
};
