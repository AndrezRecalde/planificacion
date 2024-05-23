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
            $table->string('descripcion')->nullable();
            $table->string('color')->nullable();
            $table->string('portada')->nullable();
            $table->unsignedInteger('tipoactividad_id');
            $table->double('ponderacion')->default(0);
            $table->unsignedInteger('status_id')->default(1);
            $table->unsignedInteger('proyecto_id');
            $table->unsignedInteger('partidapresupuestaria_id')->nullable();
            $table->unsignedInteger('tablero_id');
            $table->unsignedInteger('proveedor_id')->nullable();
            $table->timestamps();
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
