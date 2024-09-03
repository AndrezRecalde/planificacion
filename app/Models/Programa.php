<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\DB;

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

    function departamentos(): BelongsToMany
    {
        return $this->belongsToMany(Departamento::class, 'programa_departamento');
    }

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
            return $query->whereExists(function ($query) use ($departamento_id) {
                $query->select(DB::raw(1))
                    ->from('departamentos')
                    ->join('programa_departamento', 'departamentos.id', '=', 'programa_departamento.departamento_id')
                    ->whereColumn('programa_departamento.programa_id', 'p.id')
                    ->where('departamentos.id', $departamento_id);
            });
        }
    }

    function scopeCodigo(Builder $query, $codigo_programa)
    {
        if ($codigo_programa) {
            return $query->where('p.codigo_programa', 'LIKE', '%' . $codigo_programa . '%');
        }
    }

    function scopeByPlanificacionId(Builder $query, $planificaciontipo_id)
    {
        if ($planificaciontipo_id) {
            return $query->where('p.planificaciontipo_id', $planificaciontipo_id);
        }
    }

    protected static function boot()
    {
        parent::boot();
        static::deleting(function ($programa) {
            $programa->departamentos()->detach();
        });
    }
}

//https://github.com/mantinedev/mantine/tree/master/apps/mantine.dev/src/components/HomePage/Components
