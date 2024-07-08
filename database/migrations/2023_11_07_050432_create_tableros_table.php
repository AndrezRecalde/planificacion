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
        Schema::create('tableros', function (Blueprint $table) {
            $table->id();
            $table->string('nombre_tablero');
            $table->string('codigo_tablero')->unique(); // Añadir índice único para código_tablero si es único
            $table->text('descripcion')->nullable();
            $table->unsignedBigInteger('administrativo_id');
            $table->unsignedBigInteger('departamento_id');
            $table->timestamps();

            // Añadir índices para mejorar el rendimiento de consultas
            $table->index('administrativo_id');
            $table->index('departamento_id');

            // Definir relaciones foráneas
            $table->foreign('administrativo_id')->references('id')->on('administrativos')->onDelete('cascade');
            $table->foreign('departamento_id')->references('id')->on('departamentos')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tableros');
    }
};
