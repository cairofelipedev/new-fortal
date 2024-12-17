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
        DB::table('companies')->insert([
            [
                'name' => 'Centro de Eventos do Ceará',
                'phone' => '85988596000',
                'address' => 'Av Washington Soares 999',
                'website' => 'www.centrodeeventos.ce.com.br',
                'email' => 'comercial@centrodeeventos.ce.gov.br',
                'city' => 'Fortaleza',
                'state' => 'CE',
            ],
            [
                'name' => 'HOTEL VILLA MAYOR E VILLA SMART',
                'phone' => '85988143785',
                'address' => 'RUA VISCONDE DE MAUÁ 151',
                'website' => 'www.villamayor.com.br',
                'email' => 'reservas@villamayor.com.br',
                'city' => 'FORTALEZA',
                'state' => 'CE',
            ],
            [
                'name' => 'Gran Mareiro Hotel',
                'phone' => '8531047239',
                'address' => 'Rua Oswaldo Araújo, 100 Quadra 31 - Praia do Futuro I, CEP 60.182-395',
                'website' => 'https://granmareiro.com.br/',
                'email' => 'eventos@granmareiro.com.br',
                'city' => 'Fortaleza',
                'state' => 'CE',
            ],
            [
                'name' => 'holiday inn',
                'phone' => '85988276395',
                'address' => 'Av. Historiador Raimundo Girão, 800, Praia de Iracema, Fortaleza, CE, CEP: 60165-050',
                'website' => 'https://www.holidayfortaleza.com.br/',
                'email' => 'EVENTOS@HOLIDAYFORTALEZA.COM.BR',
                'city' => 'FORTALEZA',
                'state' => 'CE',
            ],
            [
                'name' => 'Mareiro Beira Mar',
                'phone' => '85991886646',
                'address' => 'Avenida Beira Mar, 2380 - Praia do Meireles',
                'website' => 'www.mareiro.com.br',
                'email' => 'eventos@mareiro.com.br',
                'city' => 'Fortaleza',
                'state' => 'CE',
            ],
            [
                'name' => 'HOTEL GRAN MARQUISE',
                'phone' => '85991726813',
                'address' => 'Av Beira Mar, 3980 – Mucuripe – Fortaleza – CE – Brasil, CEP: 60.165-121',
                'website' => 'https://www.granmarquise.com.br/',
                'email' => 'eventos@granmarquise.com.br',
                'city' => 'FORTALEZA',
                'state' => 'CE',
            ],
            [
                'name' => 'Vila Galé Fortaleza',
                'phone' => '85982080161',
                'address' => 'Av. Dioguinho 4189 - Praia do Futuro',
                'website' => 'vilagale.com',
                'email' => 'brasil.eventos@vilagale.com',
                'city' => 'Fortaleza',
                'state' => 'CE',
            ],
            [
                'name' => 'Hotel Praia Centro',
                'phone' => '85991559990',
                'address' => 'Av. Monsenhor Tabosa, 740, Praia de Iracema, CEP 60165-010',
                'website' => 'https://praiacentro.com.br/',
                'email' => 'eventos@praiacentro.com.br',
                'city' => 'Fortaleza',
                'state' => 'CE',
            ],
            [
                'name' => 'Blue Tree Towers Fortaleza',
                'phone' => 'alopes@bluetree.com.br',
                'address' => 'Av. Beira Mar 3470',
                'website' => 'www.bluetree.com.br',
                'email' => 'eventos.fortaleza@bluetree.com.br',
                'city' => 'Fortaleza',
                'state' => 'CE',
            ],
        ]);
    }

    public function down()
    {
        DB::table('companies')->whereIn('name', [
            'Centro de Eventos do Ceará',
            'HOTEL VILLA MAYOR E VILLA SMART',
            'Gran Mareiro Hotel',
            'holiday inn',
            'Mareiro Beira Mar',
            'HOTEL GRAN MARQUISE',
            'Vila Galé Fortaleza',
            'Hotel Praia Centro',
            'Blue Tree Towers Fortaleza',
        ])->delete();
    }
};
