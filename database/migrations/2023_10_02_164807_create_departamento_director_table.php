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
        Schema::create('departamento_director', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('departamento_id');
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('periodo_id');
            $table->string('referencia_documento', 150); //Se debe registrar el director por numero de MEMO DE LA MAXIMA AUTORIDAD
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('departamento_director');
    }
};
