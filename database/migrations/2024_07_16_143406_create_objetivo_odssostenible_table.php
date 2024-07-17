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
        Schema::create('objetivo_odssostenible', function (Blueprint $table) {
            $table->unsignedBigInteger('objetivo_id');
            $table->unsignedBigInteger('odssostenible_id');
            $table->primary(['objetivo_id', 'odssostenible_id']);

            // Definir relaciones foráneas
            $table->foreign('objetivo_id')->references('id')->on('objetivos')->onDelete('cascade');
            $table->foreign('odssostenible_id')->references('id')->on('odssostenibles')->onDelete('cascade');

            // Añadir índices
            $table->index('objetivo_id');
            $table->index('odssostenible_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('objetivo_odssostenible');
    }
};
