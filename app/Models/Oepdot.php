<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Oepdot extends Model
{
    use HasFactory;

    protected $fillable = [
        'objetivo_pdot',
        'activo'
    ];

    function earticulaciones(): HasMany
    {
        return $this->hasMany(Earticulacion::class);
    }

    function objetivos(): HasMany
    {
        return $this->hasMany(Objetivo::class);
    }
}
