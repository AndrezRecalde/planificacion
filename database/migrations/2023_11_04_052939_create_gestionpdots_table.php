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
        //GESTION RESPONSABLE DE LA MEDICION
        // TODO: PUEDE SER REEMPLAZADO POR DEPARTAMENTOS
        Schema::create('gestionpdots', function (Blueprint $table) {
            $table->id();
            $table->string('nombre_gestion');
            $table->boolean('activo')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gestionpdots');
    }
};
