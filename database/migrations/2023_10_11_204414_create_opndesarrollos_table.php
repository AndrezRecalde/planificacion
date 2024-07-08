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
        Schema::create('opndesarrollos', function (Blueprint $table) {
            $table->id();
            $table->string('objetivo_opn');
            $table->unsignedBigInteger('eje_id');
            $table->unsignedBigInteger('gobierno_id');
            $table->timestamps();

            // Definir relaciones foráneas
            $table->foreign('eje_id')->references('id')->on('ejes')->onDelete('cascade');
            $table->foreign('gobierno_id')->references('id')->on('gobiernos')->onDelete('cascade');


            // Añadir índices
            $table->index('eje_id');
            $table->index('gobierno_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('opndesarrollos');
    }
};
