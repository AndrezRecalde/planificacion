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
        Schema::create('mtrimestres', function (Blueprint $table) {
            $table->id();
            $table->double('programado');
            $table->double('devengado');
            $table->double('pagado');
            $table->unsignedBigInteger('actividad_id');
            $table->timestamps();

            // Definir relaciones foráneas
            $table->foreign('actividad_id')->references('id')->on('actividades')->onDelete('cascade');

            // Añadir índices
            $table->index('actividad_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mtrimestres');
    }
};
