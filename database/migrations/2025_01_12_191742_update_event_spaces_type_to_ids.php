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
    public function up()
    {
        // Atualiza os valores da coluna `type` para armazenar os IDs de event_types
        DB::table('event_spaces')->get()->each(function ($eventSpace) {
            $eventType = DB::table('event_types')->where('name', $eventSpace->type)->first();

            if ($eventType) {
                DB::table('event_spaces')
                    ->where('id', $eventSpace->id)
                    ->update(['type' => $eventType->id]);
            }
        });
    }

    public function down()
    {
        // Reverte os valores da coluna `type` para os nomes originais
        DB::table('event_spaces')->get()->each(function ($eventSpace) {
            $eventType = DB::table('event_types')->where('id', $eventSpace->type)->first();

            if ($eventType) {
                DB::table('event_spaces')
                    ->where('id', $eventSpace->id)
                    ->update(['type' => $eventType->name]);
            }
        });
    }
};
