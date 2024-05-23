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
        Schema::create('competenciapdots', function (Blueprint $table) {
            $table->id();
            $table->string('nombre_competencia');
            $table->boolean('activo')->default(1);
            $table->unsignedInteger('lestrategiapdot_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('competenciapdots');
    }
};
