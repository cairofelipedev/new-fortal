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
        Schema::table('sessoes', function (Blueprint $table) {
            $table->unsignedTinyInteger('posicao')->nullable()->after('pagina'); // 1 a 5 para Primeira a Quinta
        });
    }

    public function down()
    {
        Schema::table('sessoes', function (Blueprint $table) {
            $table->dropColumn('posicao');
        });
    }
};
