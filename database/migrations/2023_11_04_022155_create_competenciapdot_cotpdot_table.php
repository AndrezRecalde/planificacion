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
        Schema::create('competenciapdot_cotpdot', function (Blueprint $table) {
            $table->unsignedBigInteger('competenciapdot_id')->constrained()->cascadeOnDelete();
            $table->unsignedBigInteger('cotpdot_id')->constrained()->cascadeOnDelete();

            $table->primary(['competenciapdot_id', 'cotpdot_id']); // Clave primaria compuesta

            // Definir relaciones foráneas
            $table->foreign('competenciapdot_id')->references('id')->on('competenciapdots')->onDelete('cascade');
            $table->foreign('cotpdot_id')->references('id')->on('cotpdots')->onDelete('cascade');


            // Añadir índices
            $table->index('competenciapdot_id');
            $table->index('cotpdot_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('competenciapdot_cotpdot');
    }
};
