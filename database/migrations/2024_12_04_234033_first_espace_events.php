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
        DB::table('event_spaces')->insert([
            'company_id' => 1, // Ajuste conforme a empresa existente
            'name' => 'Beach Park Event Hall',
            'slug' => 'beach-park-event-hall',
            'city' => 'Aquiraz',
            'state' => 'CE',
            'zip_code' => '61700-000',
            'address' => 'Rua Porto das Dunas, 2734',
            'capacity' => 1000,
            'phone' => '(85) 4012-3000',
            'type' => 'Resort',
            'description' => 'Espaço de eventos com capacidade para 1000 pessoas, ideal para grandes celebrações e conferências.',
            'image' => 'https://beachpark.com.br/app/uploads/2024/06/Acqua-1-1180x445.webp',
            'images' => json_encode([
                'https://beachpark.com.br/app/uploads/2024/06/Acqua-3-1180x445.webp',
                'https://beachpark.com.br/app/uploads/2024/06/Acqua-4-1180x445.webp',
                'https://beachpark.com.br/app/uploads/2024/06/Acqua-5-1180x445.webp',
            ]),
            'floor_plan' => 'https://www.diasdesousa.com.br/wp-content/uploads/2024/05/TOP_-scaled.jpg',
            'status' => 'active',
            'publish' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::table('event_spaces')->where('slug', 'beach-park-event-hall')->delete();
    }
};
