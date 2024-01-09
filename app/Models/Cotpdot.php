<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Cotpdot extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_categoria',
        'activo'
    ];

    function competencias(): BelongsToMany
    {
        return $this->belongsToMany(Competenciapdot::class, 'competencia_cot');
    }
}
