<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up()
    {
        $categorias = DB::table('associados_categorias')
            ->pluck('id', 'slug');

        DB::table('associados')
            ->whereNotNull('categoria')
            ->orderBy('id')
            ->chunk(100, function ($associados) use ($categorias) {

                foreach ($associados as $associado) {

                    $slug = $associado->categoria;

                    if (isset($categorias[$slug])) {
                        DB::table('associados')
                            ->where('id', $associado->id)
                            ->update([
                                'categoria_id' => $categorias[$slug]
                            ]);
                    }
                }
            });
    }

    public function down()
    {
        DB::table('associados')->update(['categoria_id' => null]);
    }
};
