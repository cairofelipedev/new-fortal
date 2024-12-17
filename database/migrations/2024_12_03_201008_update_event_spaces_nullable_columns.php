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
            // Tornar as colunas existentes nulas
            $table->string('city', 255)->nullable()->change();
            $table->string('state', 255)->nullable()->change();
            $table->string('zip_code', 255)->nullable()->change();
            $table->string('address', 255)->nullable()->change();
            $table->integer('capacity')->nullable()->change();
            $table->string('phone', 255)->nullable()->change();
            $table->string('type', 255)->nullable()->change();
            // Tornar company_id nulo
            $table->unsignedBigInteger('company_id')->nullable()->change();
        });
    }

    public function down()
    {
        Schema::table('event_spaces', function (Blueprint $table) {
            // Reverter colunas para NOT NULL
            $table->string('city', 255)->nullable(false)->change();
            $table->string('state', 255)->nullable(false)->change();
            $table->string('zip_code', 255)->nullable(false)->change();
            $table->string('address', 255)->nullable(false)->change();
            $table->integer('capacity')->nullable(false)->change();
            $table->string('phone', 255)->nullable(false)->change();
            $table->string('type', 255)->nullable(false)->change();
            // Reverter company_id para NOT NULL
            $table->unsignedBigInteger('company_id')->nullable(false)->change();
        });
    }
};
