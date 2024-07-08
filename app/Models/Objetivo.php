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
        'lestrategiapdot_id',
        'competenciapdot_id',
        'componentepdot_id',
        'gestionpdot_id', //SE PUEDE REEMPLAZAR POR DEPARTAMENTO
        'oepdot_id',
        'earticulacion_id',
        'metapdot_id',
        'indicadorpdot',
        'competencia_id',
        'rmedicion_id',
        'oepei_id',
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

    function competenciapdot(): BelongsTo
    {
        return $this->belongsTo(Competenciapdot::class);
    }

    function componentepdot(): BelongsTo
    {
        return $this->belongsTo(Componentepdot::class);
    }

    function gestionpdot(): BelongsTo
    {
        return $this->belongsTo(Gestionpdot::class);
    }

    function oepdot(): BelongsTo
    {
        return $this->belongsTo(Oepdot::class);
    }

    function earticulacion(): BelongsTo
    {
        return $this->belongsTo(Earticulacion::class);
    }

    function metapdot(): BelongsTo
    {
        return $this->belongsTo(Metapdot::class);
    }

    function competencia(): BelongsTo
    {
        return $this->belongsTo(Competencia::class);
    }

    function rmedicion(): BelongsTo
    {
        return $this->belongsTo(Departamento::class, 'rmedicion_id', 'id');
    }

    function oepei(): BelongsTo
    {
        return $this->belongsTo(Oepei::class);
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

    function scopeByComponentepdotId(Builder $query, $componentepdot_id)
    {
        if ($componentepdot_id) {
            return $query->where('o.componentepdot_id', $componentepdot_id);
        }
    }

    function scopeByCotpdot(Builder $query, $cotpdot_id)
    {
        if ($cotpdot_id) {
            return $query->whereHas('competenciapdots.cotpdots', function ($q) use ($cotpdot_id) {
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
