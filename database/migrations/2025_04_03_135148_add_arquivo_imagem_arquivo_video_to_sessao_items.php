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
        Schema::table('sessao_itens', function (Blueprint $table) {
            $table->string('arquivo_imagem')->nullable()->after('tipo');
            $table->string('arquivo_video')->nullable()->after('arquivo_imagem');
        });
    }

    public function down()
    {
        Schema::table('sessao_itens', function (Blueprint $table) {
            $table->dropColumn(['arquivo_imagem', 'arquivo_video']);
        });
    }
};
