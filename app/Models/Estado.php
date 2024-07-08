<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Estado extends Model
{
    use HasFactory;

    //Iniciado, En Proceso, Finalizado
    protected $fillable = [
        'nombre_estado',
        'color'
    ];

    function actividades(): HasMany
    {
        return $this->hasMany(Actividad::class);
    }
}
