<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations. OBJETIVO ESTRATEGICO DEL PDOT
     */
    public function up(): void
    {
        Schema::create('oepdots', function (Blueprint $table) {
            $table->id();
            $table->string('objetivo_pdot');
            $table->boolean('activo')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('oepdots');
    }
};
