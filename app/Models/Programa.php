<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
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

    function scopeByDepartamentoId(Builder $query, $departamento_id)
    {
        if ($departamento_id) {
            return $query->whereHas('objetivos.departamentos', function ($q) use ($departamento_id) {
                $q->whereIn('departamentos.id', $departamento_id);
            });
        }
    }
}

//https://github.com/mantinedev/mantine/tree/master/apps/mantine.dev/src/components/HomePage/Components
