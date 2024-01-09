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
        Schema::create('proyectos', function (Blueprint $table) {
            $table->id();
            $table->string('nombre_proyecto');
            $table->unsignedInteger('programa_id');
            $table->unsignedInteger('nivel_id');
            $table->double('ponderacion')->default(0);
            $table->string('linea_base');
            $table->string('meta_detalle');
            $table->string('indicador_detalle');
            $table->unsignedInteger('tiempo_meses');
            $table->date('fecha_inicio');
            $table->date('fecha_finalizacion');
            $table->unsignedInteger('departamento_id');

            //$table->boolean('presupuestario')->default(0);
            $table->unsignedInteger('tipoproyecto_id');
            $table->unsignedInteger('partidapresupuestaria_id')->nullable(); // Consumir API GOLANG o .NET

            // Realizarlo de N:M
            /* $table->string('latitud');
            $table->string('longitud'); */

            $table->unsignedInteger('status');  //TODO

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proyectos');
    }
};
