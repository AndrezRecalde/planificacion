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
        Schema::create('actividades', function (Blueprint $table) {
            $table->id();
            $table->string('nombre_actividad');
            $table->text('descripcion')->nullable();
            $table->unsignedBigInteger('estado_id');
            $table->string('color', 10)->nullable();
            $table->string('portada')->nullable();
            $table->decimal('ponderacion', 2, 2)->default(0); // Especificar la precisión y escala
            $table->unsignedBigInteger('tipoactividad_id');
            $table->unsignedBigInteger('proyecto_id');
            $table->unsignedBigInteger('tablero_id');
            $table->unsignedBigInteger('proveedor_id')->nullable();
            $table->decimal('presupuesto', 15, 2)->nullable();
            $table->timestamps();

            // Definir relaciones foráneas
            $table->foreign('estado_id')->references('id')->on('estados')->onDelete('cascade');
            $table->foreign('tipoactividad_id')->references('id')->on('tipoactividades')->onDelete('cascade');
            $table->foreign('proyecto_id')->references('id')->on('proyectos')->onDelete('cascade');
            $table->foreign('tablero_id')->references('id')->on('tableros')->onDelete('cascade');
            $table->foreign('proveedor_id')->references('id')->on('proveedores')->onDelete('set null');

            // Añadir índices
            $table->index('estado_id');
            $table->index('tipoactividad_id');
            $table->index('proyecto_id');
            $table->index('tablero_id');
            $table->index('proveedor_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('actividades');
    }
};
