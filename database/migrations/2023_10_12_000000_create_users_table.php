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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('apellidos', 255);  // Limitar la longitud según las necesidades reales
            $table->string('nombres', 255);    // Limitar la longitud según las necesidades reales
            $table->string('dni', 10)->unique();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');   // Limitar la longitud según las necesidades reales
            $table->boolean('activo')->default(false);
            $table->unsignedBigInteger('institucion_id');
            $table->unsignedBigInteger('departamento_id');
            $table->rememberToken();
            $table->timestamps();

             // Definir relaciones foráneas
             $table->foreign('institucion_id')->references('id')->on('instituciones')->onDelete('cascade');
             $table->foreign('departamento_id')->references('id')->on('departamentos')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
