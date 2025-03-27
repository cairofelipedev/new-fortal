<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up()
    {
        DB::table('associados')->update([
            'imagem' => DB::raw("CONCAT('images/', imagem)")
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        DB::table('associados')->update([
            'imagem' => DB::raw("REPLACE(imagem, 'images/', '')")
        ]);
    }
};
