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
        Schema::create('programa_departamento', function (Blueprint $table) {
            $table->unsignedBigInteger('programa_id');
            $table->unsignedBigInteger('departamento_id');


            $table->primary(['programa_id', 'departamento_id']);

            // Definir relaciones foráneas
            $table->foreign('programa_id')->references('id')->on('programas')->onDelete('cascade');
            $table->foreign('departamento_id')->references('id')->on('departamentos')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('programa_departamento');
    }
};
