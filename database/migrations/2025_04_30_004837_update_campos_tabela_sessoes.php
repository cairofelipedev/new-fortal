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
            $table->longText('titulo')->change();
            $table->longText('subtitulo')->nullable()->change();
            $table->longText('conteudo')->nullable(); // novo campo
        });
    }

    public function down()
    {
        Schema::table('sessoes', function (Blueprint $table) {
            $table->string('titulo')->change();
            $table->string('subtitulo')->nullable()->change();
            $table->dropColumn('conteudo');
        });
    }
};
