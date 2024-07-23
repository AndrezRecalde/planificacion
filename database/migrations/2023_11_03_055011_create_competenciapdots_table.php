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
        Schema::create('competenciapdots', function (Blueprint $table) {
            $table->id();
            $table->string('nombre_competencia');
            $table->boolean('activo')->default(false);
            $table->unsignedBigInteger('lestrategiapdot_id');
            $table->timestamps();

            // Definir relaciones foráneas
            $table->foreign('lestrategiapdot_id')->references('id')->on('lestrategiapdots')->onDelete('cascade');


            // Añadir índices
            $table->index('lestrategiapdot_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('competenciapdots');
    }
};
