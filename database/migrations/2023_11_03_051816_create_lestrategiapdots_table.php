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
        Schema::create('lestrategiapdots', function (Blueprint $table) {
            $table->id();
            $table->string('linea_estrategica');
            $table->boolean('activo')->default(false);
            $table->unsignedBigInteger('lineapdot_id');
            $table->timestamps();

            // Definir relaciones foráneas
            $table->foreign('lineapdot_id')->references('id')->on('lineapdots')->onDelete('cascade');


            // Añadir índices
            $table->index('lineapdot_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lestrategiapdots');
    }
};
