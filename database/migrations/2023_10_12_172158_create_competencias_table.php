<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations. COMPETENCIAS GAD
     */
    public function up(): void
    {
        Schema::create('competencias', function (Blueprint $table) {
            $table->id();
            $table->string('nombre_competencia');
            $table->unsignedBigInteger('institucion_id');
            $table->boolean('activo')->default(true);
            $table->timestamps();

            // Definir relaciones foráneas
            $table->foreign('institucion_id')->references('id')->on('instituciones')->onDelete('cascade');


            // Añadir índices
            $table->index('institucion_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('competencias');
    }
};
