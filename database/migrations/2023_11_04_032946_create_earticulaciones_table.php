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
            $table->unsignedInteger('oepdot_id');
            $table->timestamps();
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
