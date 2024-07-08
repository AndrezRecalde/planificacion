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
        // ESTRATEGIA DE ARTICULACIONES / POLITICA PÚBLICA TERRITORIALIZADA
        Schema::create('earticulaciones', function (Blueprint $table) {
            $table->id();
            $table->string('nombre_articulacion');
            $table->unsignedBigInteger('oepdot_id');
            $table->timestamps();

             // Definir relaciones foráneas
             $table->foreign('oepdot_id')->references('id')->on('oepdots')->onDelete('cascade');


             // Añadir índices
             $table->index('oepdot_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('earticulaciones');
    }
};
