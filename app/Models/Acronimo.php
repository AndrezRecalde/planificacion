<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Acronimo extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_acronimo',
        'siglas',
        'activo'
    ];

    function departamento() : HasMany {
        return $this->hasMany(Departamento::class);
    }
}
