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
        Schema::create('competenciapdot_componentepdot', function (Blueprint $table) {
            $table->unsignedBigInteger('competenciapdot_id');
            $table->unsignedBigInteger('componentepdot_id');

            $table->primary(['competenciapdot_id', 'componentepdot_id']); // Clave primaria compuesta

            // Definir relaciones foráneas
            $table->foreign('competenciapdot_id')->references('id')->on('competenciapdots')->onDelete('cascade');
            $table->foreign('componentepdot_id')->references('id')->on('componentepdots')->onDelete('cascade');


            // Añadir índices
            $table->index('competenciapdot_id');
            $table->index('componentepdot_id');


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('competenciapdot_componentepdot');
    }
};
