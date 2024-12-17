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
        Schema::create('rd_tokens', function (Blueprint $table) {
            $table->id();
            $table->string('access_token', 4096);
            $table->timestamp('updated_at');
        });
    }

    public function down()
    {
        Schema::dropIfExists('rd_tokens');
    }
};
