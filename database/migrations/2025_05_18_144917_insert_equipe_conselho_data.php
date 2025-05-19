<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Inserção da equipe
        DB::table('equipe_conselho')->insert([
            ['nome' => 'Clarisse Linhares', 'cargo' => 'PRESIDENTE', 'tipo' => 'equipe', 'created_at' => now(), 'updated_at' => now()],
            ['nome' => 'Daniel Fiuza', 'cargo' => 'VICE-PRESIDENTE', 'tipo' => 'equipe', 'created_at' => now(), 'updated_at' => now()],
            ['nome' => 'Claudia Diniz', 'cargo' => 'DIRETORA SECRETÁRIA', 'tipo' => 'equipe', 'created_at' => now(), 'updated_at' => now()],
            ['nome' => 'Suemy Vasconcelos', 'cargo' => 'DIRETORA', 'tipo' => 'equipe', 'created_at' => now(), 'updated_at' => now()],
            ['nome' => 'Arlene Castelo Branco', 'cargo' => 'GERENTE DE CAPTAÇÃO', 'tipo' => 'equipe', 'created_at' => now(), 'updated_at' => now()],
            ['nome' => 'Williany Loren Gaia', 'cargo' => 'GERENTE DE RELACIONAMENTO', 'tipo' => 'equipe', 'created_at' => now(), 'updated_at' => now()],
            ['nome' => 'Andressa Liane', 'cargo' => 'GERENTE DE COMUNICAÇÃO', 'tipo' => 'equipe', 'created_at' => now(), 'updated_at' => now()],
        ]);

        // Inserção dos conselhos
        DB::table('equipe_conselho')->insert([
            ['nome' => 'ABAV-CE - ASSOCIAÇÃO BRASILEIRA DOS AGENTES DE VIAGENS', 'cargo' => null, 'tipo' => 'conselho', 'created_at' => now(), 'updated_at' => now()],
            ['nome' => 'ABBTUR-CE - ASSOCIAÇÃO BRASILEIRA DE TURISMÓLOGOS E PROFISSIONAIS EM TURISMO', 'cargo' => null, 'tipo' => 'conselho', 'created_at' => now(), 'updated_at' => now()],
            ['nome' => 'ABEOC-CE - ASSOCIAÇÃO BRASILEIRA DE EMPRESAS DE EVENTOS', 'cargo' => null, 'tipo' => 'conselho', 'created_at' => now(), 'updated_at' => now()],
            ['nome' => 'ABIH-CE - ASSOCIAÇÃO BRASILEIRA DA INDÚSTRIA DE HOTÉIS CEARÁ', 'cargo' => null, 'tipo' => 'conselho', 'created_at' => now(), 'updated_at' => now()],
            ['nome' => 'ABRAJET-CE - ASSOCIAÇÃO BRASILEIRA DE JORNALISTAS DE TURISMO', 'cargo' => null, 'tipo' => 'conselho', 'created_at' => now(), 'updated_at' => now()],
            ['nome' => 'ABRASEL-CE - ASSOCIAÇÃO BRASILEIRA DE BARES E RESTAURANTES DO CEARÁ', 'cargo' => null, 'tipo' => 'conselho', 'created_at' => now(), 'updated_at' => now()],
            ['nome' => 'ACLA - ASSOCIAÇÃO CEARENSE DAS LOCADORAS DE AUTOMÓVEIS', 'cargo' => null, 'tipo' => 'conselho', 'created_at' => now(), 'updated_at' => now()],
            ['nome' => 'ALMONT - ASSOCIAÇÃO DOS LOJISTAS DA AVENIDA MONSENHOR TABOSA', 'cargo' => null, 'tipo' => 'conselho', 'created_at' => now(), 'updated_at' => now()],
            ['nome' => 'ALSCI - ASSOCIAÇÃO DOS LOJISTAS DO SHOPPING CENTER IGUATEMI', 'cargo' => null, 'tipo' => 'conselho', 'created_at' => now(), 'updated_at' => now()],
            ['nome' => 'AMHT-CE - ASSOCIAÇÃO DOS MEIOS DE HOSPEDAGEM E TURISMO DO CEARÁ', 'cargo' => null, 'tipo' => 'conselho', 'created_at' => now(), 'updated_at' => now()],
            ['nome' => 'CDL - CÂMARA DE DIRIGENTES LOJISTAS DE FORTALEZA', 'cargo' => null, 'tipo' => 'conselho', 'created_at' => now(), 'updated_at' => now()],
            ['nome' => 'FECOMERCIO-CE - FEDERAÇÃO DO COMÉRCIO DE BENS, SERVIÇOS E TURISMO DO CEARÁ', 'cargo' => null, 'tipo' => 'conselho', 'created_at' => now(), 'updated_at' => now()],
            ['nome' => 'FIEC - FEDERAÇÃO DAS INDÚSTRIAS DO ESTADO DO CEARÁ', 'cargo' => null, 'tipo' => 'conselho', 'created_at' => now(), 'updated_at' => now()],
            ['nome' => 'SEBRAE-CE - SERVIÇO DE APOIO ÀS MICRO E PEQUENAS EMPRESAS DO ESTADO DO CEARÁ', 'cargo' => null, 'tipo' => 'conselho', 'created_at' => now(), 'updated_at' => now()],
            ['nome' => 'SETFOR - SECRETARIA MUNICIPAL DO TURISMO DE FORTALEZA', 'cargo' => null, 'tipo' => 'conselho', 'created_at' => now(), 'updated_at' => now()],
            ['nome' => 'SETUR-CE - SECRETARIA DO TURISMO DO ESTADO DO CEARÁ', 'cargo' => null, 'tipo' => 'conselho', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }

    public function down(): void
    {
        DB::table('equipe_conselho')->whereIn('tipo', ['equipe', 'conselho'])->delete();
    }

};
