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
        Schema::table('sessao_itens', function (Blueprint $table) {
            $table->dropColumn('arquivo'); // Remove a coluna antiga
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('sessao_itens', function (Blueprint $table) {
            $table->string('arquivo')->nullable();
        });
    }
};
