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
            $table->string('codigo_proyecto')->nullable();
            $table->unsignedBigInteger('programa_id');
            $table->unsignedBigInteger('nivel_id');
            $table->double('ponderacion', 4, 2)->default(0);
            $table->string('linea_base');
            $table->string('meta_detalle');
            $table->unsignedBigInteger('tipounidad_id');  //Ejem: KILOMETROS, METROS ... ETC
            $table->integer('indicador_numero');          //Ejem: 12
            $table->string('indicador_detalle');          //Ejem: Numero de kilometros construido
            $table->unsignedInteger('tiempo_meses');
            //$table->year('anio_fiscal');
            $table->date('fecha_inicio');
            $table->date('fecha_finalizacion');
            $table->unsignedBigInteger('departamento_id');
            $table->unsignedBigInteger('tipoproyecto_id');
            $table->boolean('activo')->default(true);
            //$table->unsignedInteger('partidapresupuestaria_id')->nullable(); // Consumir API GOLANG o .NET
            $table->timestamps();

            // Definir relaciones foráneas
            $table->foreign('programa_id')->references('id')->on('planificaciontipos')->onDelete('cascade');
            $table->foreign('nivel_id')->references('id')->on('niveles')->onDelete('cascade');
            $table->foreign('tipounidad_id')->references('id')->on('tipounidades')->onDelete('cascade');
            $table->foreign('departamento_id')->references('id')->on('departamentos')->onDelete('cascade');
            $table->foreign('tipoproyecto_id')->references('id')->on('tipoproyectos')->onDelete('cascade');

            // Añadir índices para mejorar el rendimiento de consultas
            $table->index('programa_id');
            $table->index('nivel_id');
            $table->index('tipounidad_id');
            $table->index('departamento_id');
            $table->index('tipoproyecto_id');
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
