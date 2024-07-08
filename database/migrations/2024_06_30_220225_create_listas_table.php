<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations. SON COMO PLANTILLAS PARA LAS SUBACTIVIDADES
     */
    public function up(): void
    {
        Schema::create('listas', function (Blueprint $table) {
            $table->id();
            $table->string('nombre_tarea');
            $table->integer('posicion');  //Posicion en el tablero
            $table->unsignedBigInteger('padrelista_id');
            $table->timestamps();

            // Definir relaciones foráneas
            $table->foreign('padrelista_id')->references('id')->on('padrelistas')->onDelete('cascade');

            //Index
            $table->index('padrelista_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('listas');
    }
};
