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
            $table->unsignedInteger('lestrategiapdot_id');
            $table->unsignedInteger('competenciapdot_id');
            $table->unsignedInteger('componentepdot_id');
            $table->unsignedInteger('gestionpdot_id');
            $table->unsignedInteger('oepdot_id');
            $table->unsignedInteger('earticulacion_id');
            $table->unsignedInteger('metapdot_id');
            $table->string('indicadorpdot');
            $table->unsignedInteger('competencia_id'); //COMPETENCIAS DEL GAD
            $table->unsignedInteger('rmedicion_id'); // FORANEA DE DEPARTAMENTOS
            $table->unsignedInteger('oepei_id');
            $table->year('anio_cumplimiento');
            $table->string('linea_base');
            $table->year('anio_lbase');
            $table->boolean('activo')->default(0);
            $table->timestamps();
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
