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
        Schema::create('proyecto_opndesarrollo', function (Blueprint $table) {
            //$table->id();
            $table->unsignedBigInteger('proyecto_id');
            $table->unsignedBigInteger('opndesarrollo_id');
            $table->primary(['proyecto_id', 'opndesarrollo_id']);

            // Definir relaciones foráneas
            $table->foreign('proyecto_id')->references('id')->on('proyectos')->onDelete('cascade');
            $table->foreign('opndesarrollo_id')->references('id')->on('opndesarrollos')->onDelete('cascade');

            // Añadir índices
            $table->index('proyecto_id');
            $table->index('opndesarrollo_id');

            // $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proyecto_opndesarrollo');
    }
};
