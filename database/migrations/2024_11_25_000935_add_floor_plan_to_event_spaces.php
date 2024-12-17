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
        Schema::table('event_spaces', function (Blueprint $table) {
            $table->string('floor_plan')->nullable()->after('images'); // Adiciona após a coluna 'images'
        });
    }

    public function down()
    {
        Schema::table('event_spaces', function (Blueprint $table) {
            $table->dropColumn('floor_plan');
        });
    }
};
