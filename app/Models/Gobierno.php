<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Gobierno extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_gobierno',
        'presidente',
        'fecha_inicio',
        'fecha_fin',
        'activo'
    ];

    function opndesarrollos(): HasMany
    {
        return $this->hasMany(Opndesarrollo::class)->join('ejes as e', 'e.id', 'opndesarrollos.eje_id');
    }

    function scopeActivo(Builder $query, $activo)
    {
        if ($activo) {
            return $query->where('gob.activo', $activo);
        }
    }
}
