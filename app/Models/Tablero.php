<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Tablero extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_tablero',
        'codigo_tablero',
        'descripcion',
        'administrativo_id',
        'departamento_id'
    ];

    function administrativo(): BelongsTo
    {
        return $this->belongsTo(Administrativo::class);
    }

    function departamento(): BelongsTo
    {
        return $this->belongsTo(Departamento::class);
    }

    function scopeByAdministrativoId(Builder $query, $administrativo_id)
    {
        if ($administrativo_id) {
            return $query->where('t.administrativo_id', $administrativo_id);
        }
    }

    function scopeByDepartamentoId(Builder $query, $departamento_id)
    {
        if ($departamento_id) {
            return $query->where('t.departamento_id', $departamento_id);
        }
    }
}
