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
        Schema::create('competencia_componente', function (Blueprint $table) {
            //$table->id();
            //$table->timestamps();
            $table->unsignedInteger('competenciapdot_id');
            $table->unsignedInteger('componentepdot_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('competencia_componente');
    }
};
