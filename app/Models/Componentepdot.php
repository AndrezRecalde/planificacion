<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Componentepdot extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_componente',
        'activo'
    ];

    function competencias(): BelongsToMany
    {
        return $this->belongsToMany(Competenciapdot::class, 'competencia_componente');
    }

    function objetivos(): HasMany
    {
        return $this->hasMany(Objetivo::class);
    }

    function scopeActivo(Builder $query, $activo)
    {
        if ($activo) {
            return $query->where('compo.activo', $activo);
        }
    }
}
