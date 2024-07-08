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
        Schema::create('objetivos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('lestrategiapdot_id');
            $table->unsignedBigInteger('competenciapdot_id');
            $table->unsignedBigInteger('componentepdot_id');
            $table->unsignedBigInteger('gestioncumplimiento_id'); //GESTION RESPONSABLE DEL CUMPLIMIENTO: FORANEA DE DEPARTAMENTOS
            $table->unsignedBigInteger('oepdot_id');
            $table->unsignedBigInteger('earticulacion_id');
            $table->unsignedBigInteger('metapdot_id');
            $table->string('indicadorpdot');
            $table->unsignedBigInteger('competencia_id'); // COMPETENCIAS DEL GAD
            $table->unsignedBigInteger('rmedicion_id'); // GESTION RESPONSABLE DE MEDICION: FORÁNEA DE DEPARTAMENTOS
            /* $table->unsignedBigInteger('gestionresponsable_id'); */ // GESTION RESPONSABLE DEL CUMPLIMIENTO OPERATIVO: FORÁNEA DE DEPARTAMENTOS
            $table->unsignedBigInteger('oepei_id')->nullable();
            $table->year('anio_cumplimiento');
            $table->string('linea_base');
            $table->year('anio_lbase');
            $table->boolean('activo')->default(true);
            $table->timestamps();

            // Definir relaciones foráneas
            $table->foreign('lestrategiapdot_id')->references('id')->on('lestrategiapdots')->onDelete('cascade');
            $table->foreign('competenciapdot_id')->references('id')->on('competenciapdots')->onDelete('cascade');
            $table->foreign('componentepdot_id')->references('id')->on('componentepdots')->onDelete('cascade');
            $table->foreign('gestioncumplimiento_id')->references('id')->on('departamentos')->onDelete('cascade');
            $table->foreign('oepdot_id')->references('id')->on('oepdots')->onDelete('cascade');
            $table->foreign('earticulacion_id')->references('id')->on('earticulaciones')->onDelete('cascade');
            $table->foreign('metapdot_id')->references('id')->on('metapdots')->onDelete('cascade');
            $table->foreign('competencia_id')->references('id')->on('competencias')->onDelete('cascade');
            $table->foreign('rmedicion_id')->references('id')->on('departamentos')->onDelete('cascade');
            /* $table->foreign('gestionresponsable_id')->references('id')->on('departamentos')->onDelete('cascade'); */
            $table->foreign('oepei_id')->references('id')->on('oepeis')->onDelete('set null');


            // Añadir índices para mejorar el rendimiento de consultas
            $table->index('lestrategiapdot_id');
            $table->index('competenciapdot_id');
            $table->index('componentepdot_id');
            $table->index('gestioncumplimiento_id');
            $table->index('oepdot_id');
            $table->index('earticulacion_id');
            $table->index('metapdot_id');
            $table->index('competencia_id');
            $table->index('rmedicion_id');
            /* $table->index('gestionresponsable_id'); */
            $table->index('oepei_id');
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
