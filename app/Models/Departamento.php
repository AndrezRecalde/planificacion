<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Departamento extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_departamento',
        'siglas',
        'extension',
        'activo',
        'institucion_id',
        'acronimo_id'
    ];

    function institucion(): BelongsTo
    {
        return $this->belongsTo(Institucion::class);
    }

    function acronimo(): BelongsTo
    {
        return $this->belongsTo(Acronimo::class);
    }

    function usuarios(): HasMany
    {
        return $this->hasMany(User::class);
    }

    function directores(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'departamento_director')->join('administrativos as ad', 'ad.id', 'departamento_director.periodo_id');
    }

    function objetivos(): BelongsToMany
    {
        return $this->belongsToMany(Objetivo::class, 'objetivo_departamento');
    }

    function proyectos(): HasMany
    {
        return $this->hasMany(Proyecto::class);
    }

    function proveedores(): HasMany
    {
        return $this->hasMany(Proveedor::class);
    }

    function tableros(): HasMany
    {
        return $this->hasMany(Tablero::class);
    }

    function listas(): HasMany
    {
        return $this->hasMany(Lista::class);
    }

    function scopeInstitucions($query, $institucion_id)
    {
        if ($institucion_id) {
            return $query->where('d.institucion_id', $institucion_id);
        }
    }

    function scopeAcronimos($query, $acronimo_id)
    {
        if ($acronimo_id) {
            return $query->where('d.acronimo_id', $acronimo_id);
        }
    }
}
