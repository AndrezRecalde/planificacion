<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Competenciapdot extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_competencia',
        'activo',
        'lestrategiapdot_id'
    ];

    function lestrategiapdot(): BelongsTo
    {
        return $this->belongsTo(Lestrategiapdot::class);
    }

    function componentes(): BelongsToMany
    {
        return $this->belongsToMany(Componentepdot::class, 'competencia_componente');
    }

    function cotpdots(): BelongsToMany
    {
        return $this->belongsToMany(Cotpdot::class, 'competencia_cot');
    }

    function objetivos(): HasMany
    {
        return $this->hasMany(Objetivo::class);
    }

    function scopeLestrategiapdot($query, $lestrategiapdot_id)
    {
        if ($lestrategiapdot_id) {
            return $query->where('comp.lestrategiapdot_id', $lestrategiapdot_id);
        }
    }

    function scopeActivo($query, $activo)
    {
        if ($activo) {
            return $query->where('comp.activo', $activo);
        }
    }


    protected static function boot()
    {
        parent::boot();
        static::deleting(function ($competencia) {
            $competencia->componentes()->detach();
            $competencia->cotpdots()->detach();
        });
    }
}
