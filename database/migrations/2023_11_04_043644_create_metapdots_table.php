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
        Schema::create('metapdots', function (Blueprint $table) {
            $table->id();
            $table->string('nombre_meta');
            $table->unsignedBigInteger('earticulacion_id')->constrained()->cascadeOnDelete();
            $table->timestamps();

            // Definir relaciones foráneas
            $table->foreign('earticulacion_id')->references('id')->on('earticulaciones')->onDelete('cascade');


            // Añadir índices
            $table->index('earticulacion_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('metapdots');
    }
};
