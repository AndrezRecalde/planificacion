<?php

namespace App\Models;

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
        'vicepresidente',
        'fecha_inicio',
        'fecha_fin',
        'activo'
    ];

    function ejes(): BelongsToMany
    {
        return $this->belongsToMany(Eje::class, 'gobierno_eje');
    }

    function opndesarrollos() : HasMany {
        return $this->hasMany(Opndesarrollo::class);
    }
}
