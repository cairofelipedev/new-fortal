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
        Schema::table('associados', function (Blueprint $table) {
            $table->string('link')->nullable()->after('content');
            $table->string('whatsapp')->nullable()->after('link');
            $table->string('instagram')->nullable()->after('whatsapp');
        });
    }

    public function down()
    {
        Schema::table('associados', function (Blueprint $table) {
            $table->dropColumn(['link', 'whatsapp', 'instagram']);
        });
    }
};
