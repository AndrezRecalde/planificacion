<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
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

    function ejes(): HasMany
    {
        return $this->hasMany(Eje::class);
    }
}
