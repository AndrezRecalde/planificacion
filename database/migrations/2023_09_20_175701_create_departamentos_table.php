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
        Schema::create('departamentos', function (Blueprint $table) {
            $table->id();
            $table->string('nombre_departamento');
            $table->string('siglas', 10)->unique();
            $table->string('extension', 60);
            $table->unsignedBigInteger('institucion_id');
            $table->unsignedBigInteger('acronimo_id');
            $table->boolean('activo')->default(false);
            $table->timestamps();

            // Definir relaciones foráneas
            $table->foreign('institucion_id')->references('id')->on('instituciones')->onDelete('cascade');
            $table->foreign('acronimo_id')->references('id')->on('acronimos')->onDelete('cascade');

            // Añadir índices
            $table->index('institucion_id');
            $table->index('acronimo_id');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('departamentos');
    }
};
