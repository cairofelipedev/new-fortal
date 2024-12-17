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
        Schema::create('event_spaces', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained('companies')->onDelete('cascade');
            $table->string('name');
            $table->string('city');
            $table->string('state');
            $table->string('zip_code');
            $table->string('address');
            $table->integer('capacity');
            $table->string('phone');
            $table->string('type');
            $table->text('description')->nullable();
            $table->string('image')->nullable();
            $table->json('images')->nullable();
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->boolean('publish')->default(false); // Controle de publicação
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('event_spaces');
    }
};
