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
            $table->string('respondent_full_name')->nullable()->after('description');
            $table->string('respondent_whatsapp')->nullable()->after('respondent_full_name');
            $table->string('pavilion_ceiling_height_value')->nullable()->after('pavilion_ceiling_height');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('event_spaces', function (Blueprint $table) {
            $table->dropColumn('respondent_full_name');
            $table->dropColumn('respondent_whatsapp');
            $table->dropColumn('pavilion_ceiling_height_value');
        });
    }
};
