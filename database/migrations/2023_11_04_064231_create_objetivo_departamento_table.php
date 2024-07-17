<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * PARA VALIDAR LOS RESPONSABLES DE CUMPLIMIENTO OPERATIVO: GESTION RESPONSABLE DEL CUMPLIMIENTO OPERATIVO
     */
    public function up(): void
    {
        Schema::create('objetivo_departamento', function (Blueprint $table) {
            //$table->id();
            $table->unsignedBigInteger('objetivo_id');
            $table->unsignedBigInteger('departamento_id');
            //$table->timestamps();

            $table->primary(['objetivo_id', 'departamento_id']);

             // Definir relaciones foráneas
             $table->foreign('objetivo_id')->references('id')->on('objetivos')->onDelete('cascade');
             $table->foreign('departamento_id')->references('id')->on('departamentos')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('objetivo_departamento');
    }
};
