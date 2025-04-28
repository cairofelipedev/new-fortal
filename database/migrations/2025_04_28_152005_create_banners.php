<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('banners', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255); // Nome do banner
            $table->string('image_desktop', 512)->nullable(); // Imagem para desktop
            $table->string('image_mobile', 512)->nullable(); // Imagem para mobile
            $table->string('page', 255)->nullable(); // Página onde o banner será exibido
            $table->timestamps(); // created_at e updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('banners');
    }
};
