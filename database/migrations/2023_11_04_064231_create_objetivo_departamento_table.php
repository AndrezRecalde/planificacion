<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations. PARA VALIDAR LOS RESPONSABLES DE CUMPLIMIENTO Y MEDICION
     */
    public function up(): void
    {
        Schema::create('objetivo_departamento', function (Blueprint $table) {
            //$table->id();
            $table->unsignedInteger('objetivo_id');
            $table->unsignedInteger('departamento_id');
            //$table->timestamps();
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
