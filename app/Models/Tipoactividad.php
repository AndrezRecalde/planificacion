<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Tipoactividad extends Model
{
    use HasFactory;

    protected $table = 'tipoactividades';

    protected $fillable = [
        'tipo_actividad',
        'activo'
    ];

    function actividades(): HasMany
    {
        return $this->hasMany(Actividad::class);
    }
}
