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
        Schema::create('padrelistas', function (Blueprint $table) {
            $table->id();
            $table->string('nombre_lista');
            $table->unsignedBigInteger('departamento_id');
            $table->timestamps();

            // Definir relaciones foráneas
            $table->foreign('departamento_id')->references('id')->on('departamentos')->onDelete('cascade');

            //Index
            $table->index('departamento_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('padrelistas');
    }
};
