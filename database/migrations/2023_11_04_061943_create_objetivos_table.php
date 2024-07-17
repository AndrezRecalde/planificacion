<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    /* Objetivos Estrategicos del PDOT */
    public function up(): void
    {
        Schema::create('objetivos', function (Blueprint $table) {
            $table->id();
            $table->string('nombre_objetivo');
            $table->unsignedBigInteger('lestrategiapdot_id');
            $table->unsignedBigInteger('competenciapdot_id'); //COMPETENCIAS DEL PDOT
            $table->unsignedBigInteger('earticulacion_id');  //ESTRATEGIAS DE ARTICULACION
            $table->unsignedBigInteger('metapdot_id');      // METAS DEL PDOT
            $table->unsignedBigInteger('competencia_id'); // COMPETENCIAS DEL GAD
            $table->unsignedBigInteger('rmedicion_id'); // GESTION RESPONSABLE DE MEDICION: FORÁNEA DE DEPARTAMENTOS
            $table->year('anio_cumplimiento');
            $table->string('linea_base');
            $table->year('anio_lbase');
            $table->boolean('activo')->default(true);
            $table->timestamps();

            // Definir relaciones foráneas
            $table->foreign('lestrategiapdot_id')->references('id')->on('lestrategiapdots')->onDelete('cascade');
            $table->foreign('competenciapdot_id')->references('id')->on('competenciapdots')->onDelete('cascade');
            $table->foreign('earticulacion_id')->references('id')->on('earticulaciones')->onDelete('cascade');
            $table->foreign('metapdot_id')->references('id')->on('metapdots')->onDelete('cascade');
            $table->foreign('competencia_id')->references('id')->on('competencias')->onDelete('cascade');
            $table->foreign('rmedicion_id')->references('id')->on('departamentos')->onDelete('cascade');


            // Añadir índices para mejorar el rendimiento de consultas
            $table->index('lestrategiapdot_id');
            $table->index('competenciapdot_id');
            $table->index('earticulacion_id');
            $table->index('metapdot_id');
            $table->index('competencia_id');
            $table->index('rmedicion_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('objetivos');
    }
};
