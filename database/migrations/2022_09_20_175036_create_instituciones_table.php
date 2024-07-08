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
        Schema::create('instituciones', function (Blueprint $table) {
            $table->id();
            $table->string('nombre_institucion');
            $table->string('siglas', 10);
            $table->string('ruc', 15)->unique();
            $table->boolean('activo')->default(false);
            $table->string('telefono');
            $table->unsignedBigInteger('gad_id');
            $table->timestamps();

            // Definir relaciones foráneas
            $table->foreign('gad_id')->references('id')->on('gads')->onDelete('cascade');

            // Añadir índices
            $table->index('gad_id');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('instituciones');
    }
};
