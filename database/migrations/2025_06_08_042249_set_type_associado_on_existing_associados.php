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
    public function up(): void
    {
        DB::table('associados')->whereNull('type')->update(['type' => 'associado']);
    }

    public function down(): void
    {
        // Opcional: desfaz a alteração se necessário
        DB::table('associados')->where('type', 'associado')->update(['type' => null]);
    }
};
