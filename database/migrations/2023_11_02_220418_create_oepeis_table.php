<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations. PLANIFICACION ESTRATEGICA INSTITUCIONAL - PEI
     */
    public function up(): void
    {
        Schema::create('oepeis', function (Blueprint $table) {
            $table->id();
            $table->string('objetivo_pei');
            $table->boolean('activo')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('oepeis');
    }
};
