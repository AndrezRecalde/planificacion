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
        Schema::create('subactividades', function (Blueprint $table) {
            $table->id();
            $table->string('nombre_subactividad');
            $table->integer('posicion');
            $table->boolean('check')->default(false);
            $table->date('date_due')->nullable();
            $table->unsignedBigInteger('actividad_id');
            $table->timestamps();

            // Definir relaciones foráneas
            $table->foreign('actividad_id')->references('id')->on('actividades')->onDelete('cascade');

            //Index
            $table->index('actividad_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('subactividades');
    }
};
