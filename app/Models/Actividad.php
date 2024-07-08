<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Http\JsonResponse;

class Actividad extends Model
{
    use HasFactory;

    protected $table = 'actividades';

    protected $fillable = [
        'nombre_actividad',
        'descripcion',
        'estado_id',
        'color',
        'portada',
        'ponderacion',
        'tipoactividad_id',
        'proyecto_id',
        'tablero_id',
        'proveedor_id',
        'presupuesto'
    ];

    function estados(): BelongsTo
    {
        return $this->belongsTo(Estado::class);
    }

    function proyecto(): BelongsTo
    {
        return $this->belongsTo(Proyecto::class);
    }

    function atrimestres(): HasMany
    {
        return $this->hasMany(Atrimestre::class);
    }

    function tipoactividad(): BelongsTo
    {
        return $this->belongsTo(Tipoactividad::class);
    }

    function tablero(): BelongsTo
    {
        return $this->belongsTo(Tablero::class);
    }

    function proveedor(): BelongsTo
    {
        return $this->belongsTo(Proveedor::class);
    }

    function partidapresupuestaria() : BelongsToMany {
        return $this->belongsToMany(PartidaPresupuestaria::class, 'actividad_partidapresupuestaria');
    }

    function subactividades(): HasMany
    {
        return $this->hasMany(Subactividad::class);
    }

    function actividadesfisicas(): BelongsToMany
    {
        return $this->belongsToMany(Trimestre::class, 'actividadf_trimestre');
    }

    function actividadesmonto(): BelongsToMany
    {
        return $this->belongsToMany(Trimestre::class, 'actividadm_trimestre');
    }

    function scopeByProyectoId(Builder $query, $proyecto_id)
    {
        if ($proyecto_id) {
            return $query->where('act.proyecto_id', $proyecto_id);
        }
    }

    function scopeByTableroId(Builder $query, $tablero_id)
    {
        if ($tablero_id) {
            return $query->where('act.tablero_id', $tablero_id);
        }
    }
}
