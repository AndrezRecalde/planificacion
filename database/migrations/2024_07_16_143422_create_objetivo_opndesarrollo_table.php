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
        Schema::create('objetivo_opndesarrollo', function (Blueprint $table) {
            $table->unsignedBigInteger('objetivo_id');
            $table->unsignedBigInteger('opndesarrollo_id');
            $table->primary(['objetivo_id', 'opndesarrollo_id']);

            // Definir relaciones foráneas
            $table->foreign('objetivo_id')->references('id')->on('objetivos')->onDelete('cascade');
            $table->foreign('opndesarrollo_id')->references('id')->on('opndesarrollos')->onDelete('cascade');

            // Añadir índices
            $table->index('objetivo_id');
            $table->index('opndesarrollo_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('objetivo_opndesarrollo');
    }
};
