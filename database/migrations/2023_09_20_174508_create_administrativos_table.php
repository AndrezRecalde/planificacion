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
        Schema::create('administrativos', function (Blueprint $table) {
            $table->id();
            $table->year('inicio_periodo');
            $table->year('fin_periodo');
            $table->string('maxima_autoridad');
            $table->boolean('activo')->default(false);
            $table->unsignedBigInteger('institucion_id');
            $table->string('logo_url');
            $table->timestamps();

            // Definir relaciones foráneas
            $table->foreign('institucion_id')->references('id')->on('instituciones')->onDelete('cascade');

            // Añadir índices
            $table->index('institucion_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('administrativos');
    }
};
