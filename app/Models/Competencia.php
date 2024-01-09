<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/* COMPETENCIAS DEL GAD */

class Competencia extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_competencia',
        'institucion_id',
        'activo'
    ];

    function objetivos(): HasMany
    {
        return $this->hasMany(Objetivo::class);
    }
}
