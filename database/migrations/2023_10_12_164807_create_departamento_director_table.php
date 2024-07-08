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
        Schema::create('departamento_director', function (Blueprint $table) {
            $table->unsignedBigInteger('departamento_id');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('administrativo_id');
            $table->string('referencia_documento', 150); //Se debe registrar el director por numero de MEMO DE LA MAXIMA AUTORIDAD
            $table->timestamps();

            // Definir relaciones foráneas
            $table->foreign('departamento_id')->references('id')->on('departamentos')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('administrativo_id')->references('id')->on('administrativos')->onDelete('cascade');


            // Añadir índices
            $table->index('departamento_id');
            $table->index('user_id');
            $table->index('administrativo_id');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('departamento_director');
    }
};
