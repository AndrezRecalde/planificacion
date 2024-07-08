<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations. PLANIFICACION ESTRATEGICA INSTITUCIONAL - PEI
     */
    public function up(): void
    {
        Schema::create('oepeis', function (Blueprint $table) {
            $table->id();
            $table->string('objetivo_pei');
            $table->boolean('activo')->default(true);
            $table->unsignedBigInteger('institucion_id');
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
        Schema::dropIfExists('oepeis');
    }
};
