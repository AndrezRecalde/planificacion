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
        Schema::create('gobierno_eje', function (Blueprint $table) {
            $table->unsignedBigInteger('gobierno_id');
            $table->unsignedBigInteger('eje_id');
            $table->primary(['gobierno_id', 'eje_id']);

            // Definir relaciones foráneas
            $table->foreign('gobierno_id')->references('id')->on('gobiernos')->onDelete('cascade');
            $table->foreign('eje_id')->references('id')->on('ejes')->onDelete('cascade');

            // Añadir índices
            $table->index('gobierno_id');
            $table->index('eje_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gobierno_eje');
    }
};
