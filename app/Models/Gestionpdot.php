<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Gestionpdot extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_gestion',
        'activo'
    ];

    function objetivos(): HasMany
    {
        return $this->hasMany(Objetivo::class);
    }
}
