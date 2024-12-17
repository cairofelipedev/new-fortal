<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        DB::table('admin_users')->insert([
            'username'       => 'fortalezameetings',
            'password'       => Hash::make('@Fortal2030#'), // Hash usando bcrypt
            'name'           => 'Administrador',
            'avatar'         => null,
            'remember_token' => null,
            'created_at'     => now(),
            'updated_at'     => now(),
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::table('admin_users')->where('username', 'fortalezameetings')->delete();
    }
};
