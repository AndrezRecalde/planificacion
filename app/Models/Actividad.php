<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Http\JsonResponse;

class Actividad extends Model
{
    use HasFactory;

    protected $table = 'actividades';

    protected $fillable = [
        'nombre_actividad',
        'descripcion',
        'color',
        'portada',
        'tipoactividad_id',
        'ponderacion',
        'estado_id',
        'proyecto_id'
    ];

    function estados(): BelongsTo
    {
        return $this->belongsTo(Estado::class);
    }

    function proyecto(): BelongsTo
    {
        return $this->belongsTo(Proyecto::class);
    }

    function atrimestres(): HasMany
    {
        return $this->hasMany(Atrimestre::class);
    }

    function tipoactividad(): BelongsTo
    {
        return $this->belongsTo(Tipoactividad::class);
    }

    function scopeByProyectoId($query, $proyecto)
    {
        if ($proyecto) {
            return $query->where('a.proyecto_id', $proyecto);
        }
    }
}
