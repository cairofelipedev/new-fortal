<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        // Insere um registro inicial na tabela rd_tokens
        DB::table('rd_tokens')->insert([
            'access_token' => 'teste_token',
            'updated_at' => Carbon::now(),
        ]);
    }

    public function down()
    {
        // Remove o registro inserido, caso a migração seja revertida
        DB::table('rd_tokens')->where('access_token', 'teste_token')->delete();
    }
};
