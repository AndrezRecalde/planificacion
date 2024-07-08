<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Proyecto extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_proyecto',
        'codigo_proyecto',
        'programa_id',
        'nivel_id',
        'ponderacion',
        'linea_base',
        'meta_detalle',
        'tipounidad_id',
        'indicador_detalle',
        'tiempo_meses',
        'anio_fiscal',
        'fecha_inicio',
        'fecha_finalizacion',
        'departamento_id',
        'tipoproyecto_id',
        'activo',
    ];

    function programa(): BelongsTo
    {
        return $this->belongsTo(Programa::class);
    }

    function nivel(): BelongsTo
    {
        return $this->belongsTo(Nivel::class);
    }

    function departamento(): BelongsTo
    {
        return $this->belongsTo(Departamento::class);
    }

    function tipoproyecto(): BelongsTo
    {
        return $this->belongsTo(Tipoproyecto::class);
    }

    function actividades(): HasMany
    {
        return $this->hasMany(Actividad::class);
    }

    function opndesarrollos(): BelongsToMany
    {
        return $this->belongsToMany(Opndesarrollo::class, 'proyecto_opndesarrollo');
    }

    function scopeDepartamento($query, $departamento_id)
    {
        if ($departamento_id) {
            return $query->where('p.departamento_id', $departamento_id);
        }
    }

    function scopeNivel($query, $nivel_id)
    {
        if ($nivel_id) {
            return $query->where('p.nivel_id', $nivel_id);
        }
    }

    function scopePrograma($query, $programa_id)
    {
        if ($programa_id) {
            return $query->where('p.programa_id', $programa_id);
        }
    }

    function scopeCodigo($query, $codigo_proyecto)
    {
        if ($codigo_proyecto) {
            return $query->where('p.codigo_proyecto', $codigo_proyecto);
        }
    }

    function activo($query, $activo)
    {
        if ($activo) {
            return $query->where('p.activo', $activo);
        }
    }

    protected static function boot()
    {
        parent::boot();
        static::deleting(function ($proyecto) {
            $proyecto->opndesarrollos()->detach();
        });
    }
}
