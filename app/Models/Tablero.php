<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Tablero extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_tablero',
        'anio',
        'departamento_id'
    ];

    function status(): HasMany
    {
        return $this->hasMany(Status::class);
    }
}
