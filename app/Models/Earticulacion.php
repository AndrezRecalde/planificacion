<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Earticulacion extends Model
{
    use HasFactory;

    protected $table = 'earticulaciones';

    // ESTRATEGIA DE ARTICULACIONES / POLITICA PÚBLICA TERRITORIALIZADA

    protected $fillable = [
        'nombre_articulacion',
        'activo'
        //'oepdot_id'
    ];

    /* function objetivo(): BelongsTo
    {
        return $this->belongsTo(Oepdot::class);
    } */

    function scopeActivo(Builder $query, $activo)  {
        if ($activo) {
            return $query->where('ea.activo', $activo);
        }
    }

    function metas(): HasMany
    {
        return $this->hasMany(Metapdot::class);
    }

    function objetivos(): HasMany
    {
        return $this->hasMany(Objetivo::class);
    }

    function scopeObjetivopdot($query, $oepdot_id) {
        if ($oepdot_id) {
            return $query->where('ea.oepdot_id', $oepdot_id);
        }
    }
}
