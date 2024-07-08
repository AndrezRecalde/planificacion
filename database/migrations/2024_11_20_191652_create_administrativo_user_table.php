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
        Schema::create('administrativo_user', function (Blueprint $table) {
            $table->unsignedBigInteger('administrativo_id');
            $table->unsignedBigInteger('user_id');
            $table->timestamps();

            $table->primary(['administrativo_id', 'user_id']); // Definir clave primaria compuesta

            // Definir relaciones foráneas
            $table->foreign('administrativo_id')->references('id')->on('administrativos')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

            // Añadir índices
            $table->index('administrativo_id');
            $table->index('user_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('administrativo_user');
    }
};
