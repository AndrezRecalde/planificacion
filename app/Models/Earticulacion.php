<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Earticulacion extends Model
{
    use HasFactory;

    // ESTRATEGIA DE ARTICULACIONES / POLITICA PÚBLICA TERRITORIALIZADA

    protected $fillable = [
        'nombre_articulacion',
        'oepdot_id'
    ];

    function objetivo(): BelongsTo
    {
        return $this->belongsTo(Oepdot::class);
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
