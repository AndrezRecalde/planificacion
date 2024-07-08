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
        //Avance de Actividades fisicas
        Schema::create('actividadf_trimestre', function (Blueprint $table) {
            $table->unsignedBigInteger('actividad_id');
            $table->unsignedBigInteger('trimestre_id');
            $table->decimal('programado', 15, 2)->default(0.0); // Uso de decimal con precisión y escala
            $table->decimal('avance', 15, 2)->default(0.0); // Uso de decimal con precisión y escala
            $table->timestamps();

            // Definir la clave primaria compuesta
            $table->primary(['actividad_id', 'trimestre_id']);

            // Añadir relaciones foráneas
            $table->foreign('actividad_id')->references('id')->on('actividades')->onDelete('cascade');
            $table->foreign('trimestre_id')->references('id')->on('trimestres')->onDelete('cascade');

            // Añadir índices explícitos para mejorar rendimiento de consultas
            $table->index('actividad_id');
            $table->index('trimestre_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('actividadf_trimestre');
    }
};
