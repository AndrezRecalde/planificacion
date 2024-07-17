<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Objetivo extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_objetivo',
        'lestrategiapdot_id',
        'competenciapdot_id',
        'earticulacion_id',
        'metapdot_id',
        'competencia_id',
        'rmedicion_id',
        'anio_cumplimiento',
        'linea_base',
        'anio_lbase',
        'activo'
    ];

    function departamentos(): BelongsToMany
    {
        return $this->belongsToMany(Departamento::class, 'objetivo_departamento');
    }

    function lestrategiapdot(): BelongsTo
    {
        return $this->belongsTo(Lestrategiapdot::class);
    }

    // COMPETENCIAS DEL PDOT
    function competenciapdot(): BelongsTo
    {
        return $this->belongsTo(Competenciapdot::class);
    }

    function earticulacion(): BelongsTo
    {
        return $this->belongsTo(Earticulacion::class);
    }

    function metapdot(): BelongsTo
    {
        return $this->belongsTo(Metapdot::class);
    }

    // COMPETENCIAS DEL GAD
    function competencia(): BelongsTo
    {
        return $this->belongsTo(Competencia::class);
    }

    function rmedicion(): BelongsTo
    {
        return $this->belongsTo(Departamento::class, 'rmedicion_id', 'id');
    }

    function opndesarrollos(): BelongsToMany
    {
        return $this->belongsToMany(Opndesarrollo::class, 'objetivo_opndesarrollo');
    }

    function odssostenibles() : BelongsToMany {
        return $this->belongsToMany(Odssostenible::class, 'objetivo_odssostenible');

    }

    function programas(): HasMany
    {
        return $this->hasMany(Objetivo::class);
    }

    function scopeByDepartamentoId(Builder $query, $departamento_id)
    {
        if ($departamento_id) {
            return $query->whereHas('departamentos', function ($query) use ($departamento_id) {
                $query->where('departamento_id', $departamento_id);
            });
        }
    }

    function scopeByLestrategiapdotId(Builder $query, $lestrategiapdot_id)
    {
        if ($lestrategiapdot_id) {
            return $query->where('o.lestrategiapdot_id', $lestrategiapdot_id);
        }
    }

    function scopeByCompetenciapdotId(Builder $query, $competenciapdot_id)
    {
        if ($competenciapdot_id) {
            return $query->where('o.competenciapdot_id', $competenciapdot_id);
        }
    }

    function scopeByComponentepdotId(Builder $query, $componentepdots_id)
    {
        if ($componentepdots_id) {
            return $query->whereHas('competenciapdot.componentes', $componentepdots_id);
        }
    }

    function scopeByCotpdot(Builder $query, $cotpdot_id)
    {
        if ($cotpdot_id) {
            return $query->whereHas('competenciapdot.cotpdots', function ($q) use ($cotpdot_id) {
                $q->whereIn('cotpdots.id', $cotpdot_id);
            });
        }
    }

    protected static function boot()
    {
        parent::boot();
        static::deleting(function ($objetivo) {
            $objetivo->departamentos()->detach();
        });
    }
}
