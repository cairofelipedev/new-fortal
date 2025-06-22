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
        Schema::table('banners', function (Blueprint $table) {
            $table->string('link', 512)->nullable()->after('page');
            $table->boolean('titulo_visivel')->default(true)->after('link');
        });
    }

    public function down()
    {
        Schema::table('banners', function (Blueprint $table) {
            $table->dropColumn(['link', 'titulo_visivel']);
        });
    }
};
