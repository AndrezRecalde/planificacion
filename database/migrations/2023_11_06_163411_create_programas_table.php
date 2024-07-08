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
        Schema::create('programas', function (Blueprint $table) {
            $table->id();
            $table->string('nombre_programa');
            $table->string('codigo_programa')->nullable();
            $table->unsignedBigInteger('planificaciontipo_id');
            $table->unsignedBigInteger('objetivo_id');
            $table->boolean('activo')->default(true);
            $table->timestamps();

            // Definir relaciones foráneas
            $table->foreign('planificaciontipo_id')->references('id')->on('planificaciontipos')->onDelete('cascade');
            $table->foreign('objetivo_id')->references('id')->on('objetivos')->onDelete('cascade');

            // Añadir índices para mejorar el rendimiento de consultas
            $table->index('planificaciontipo_id');
            $table->index('objetivo_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('programas');
    }
};
