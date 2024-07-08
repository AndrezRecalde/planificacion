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
        Schema::create('actividad_partidapresupuestaria', function (Blueprint $table) {
            $table->unsignedBigInteger('actividad_id');
            $table->unsignedBigInteger('partidapresupuestaria_id');
            $table->primary(['actividad_id', 'partidapresupuestaria_id']);

            // Definir relaciones foráneas
            $table->foreign('actividad_id')->references('id')->on('actividades')->onDelete('cascade');
            $table->foreign('partidapresupuestaria_id')->references('id')->on('partidapresupuestarias')->onDelete('cascade');

            // Añadir índices
            $table->index('actividad_id');
            $table->index('partidapresupuestaria_id');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('actividad_partidapresupuestaria');
    }
};
