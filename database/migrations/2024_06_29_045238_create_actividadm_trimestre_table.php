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
        //avances de monto presupuestario
        Schema::create('actividadm_trimestre', function (Blueprint $table) {
            $table->unsignedBigInteger('actividad_id');
            $table->unsignedBigInteger('trimestre_id');
            $table->decimal('programado', 15, 2)->default(0.0); // Uso de decimal para precisión
            $table->decimal('devengado', 15, 2)->default(0.0); // Uso de decimal para precisión
            $table->decimal('pagado', 15, 2)->default(0.0); // Uso de decimal para precisión
            $table->timestamps();

            // Definir la clave primaria compuesta
            $table->primary(['actividad_id', 'trimestre_id']);

            // Definir relaciones foráneas
            $table->foreign('actividad_id')->references('id')->on('actividades')->onDelete('cascade');
            $table->foreign('trimestre_id')->references('id')->on('trimestres')->onDelete('cascade');

            // Añadir índices explícitos para mejorar el rendimiento de consultas
            $table->index('actividad_id');
            $table->index('trimestre_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('actividadm_trimestre');
    }
};
