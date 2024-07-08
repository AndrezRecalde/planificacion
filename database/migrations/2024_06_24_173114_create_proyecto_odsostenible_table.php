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
        Schema::create('proyecto_odsostenible', function (Blueprint $table) {
            $table->unsignedBigInteger('proyecto_id');
            $table->unsignedBigInteger('odssostenible_id');
            $table->primary(['proyecto_id', 'odssostenible_id']);

            // Definir relaciones foráneas
            $table->foreign('proyecto_id')->references('id')->on('proyectos')->onDelete('cascade');
            $table->foreign('odssostenible_id')->references('id')->on('odssostenibles')->onDelete('cascade');

            // Añadir índices
            $table->index('proyecto_id');
            $table->index('odssostenible_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proyecto_odsostenible');
    }
};
