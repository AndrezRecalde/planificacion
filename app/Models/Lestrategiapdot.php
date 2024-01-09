<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Lestrategiapdot extends Model
{
    use HasFactory;

    protected $fillable = [
        'linea_estrategica',
        'activo',
        'lineapdot_id',
    ];

    function lineapdot(): BelongsTo
    {
        return $this->belongsTo(Lineapdot::class);
    }

    function competenciapdots(): HasMany
    {
        return $this->hasMany(Competenciapdot::class);
    }

    function objetivos(): HasMany
    {
        return $this->hasMany(Objetivo::class);
    }
}
