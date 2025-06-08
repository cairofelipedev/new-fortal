<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddLinkAndContentToEventCalendarTable extends Migration
{
    public function up()
    {
        Schema::table('event_calendar', function (Blueprint $table) {
            $table->string('link')->nullable()->after('website');
            $table->longText('content')->nullable()->after('link');
        });
    }

    public function down()
    {
        Schema::table('event_calendar', function (Blueprint $table) {
            $table->dropColumn(['link', 'content']);
        });
    }
}
