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
        Schema::create('gobiernos', function (Blueprint $table) {
            $table->id();
            $table->string('nombre_gobierno');
            $table->string('presidente');
            $table->string('vicepresidente');
            $table->year('fecha_inicio');
            $table->year('fecha_fin');
            $table->boolean('activo')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gobiernos');
    }
};
