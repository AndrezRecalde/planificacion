<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Planificaciontipo extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_planificacion',
        'activo'
    ];

    function proyectos(): HasMany
    {
        return $this->hasMany(Proyecto::class);
    }
}
