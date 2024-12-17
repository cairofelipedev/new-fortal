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
        // Buscar o ID do usuário com base no username
        $userId = DB::table('admin_users')
            ->where('username', 'fortalezameetings')
            ->value('id');

        // Inserir na tabela admin_role_users
        if ($userId) {
            DB::table('admin_role_users')->insert([
                'role_id'    => 1,       // ID da role
                'user_id'    => $userId, // ID do usuário buscado
                'created_at' => null,
                'updated_at' => null,
            ]);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Buscar o ID do usuário com base no username
        $userId = DB::table('admin_users')
            ->where('username', 'fortalezameetings')
            ->value('id');

        // Remover a entrada da tabela admin_role_users
        if ($userId) {
            DB::table('admin_role_users')
                ->where('user_id', $userId)
                ->where('role_id', 1)
                ->delete();
        }
    }
};
