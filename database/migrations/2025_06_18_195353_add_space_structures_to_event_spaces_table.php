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
            $table->json('space_structures')->nullable()->after('type');
        });
    }

    public function down()
    {
        Schema::table('event_spaces', function (Blueprint $table) {
            $table->dropColumn('space_structures');
        });
    }
};
