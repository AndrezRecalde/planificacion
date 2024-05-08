<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Programa extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_programa',
        'codigo_programa',
        'planificaciontipo_id',
        'objetivo_id',
        'activo'
    ];

    function planificaciontipo(): BelongsTo
    {
        return $this->belongsTo(Planificaciontipo::class);
    }

    function objetivo(): BelongsTo
    {
        return $this->belongsTo(Objetivo::class);
    }

    function proyectos(): HasMany
    {
        return $this->hasMany(Proyecto::class);
    }
}
