<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Oepei extends Model
{
    use HasFactory;

    protected $fillable = [
        'objetivo_pei',
        'activo',
        'institucion_id'
    ];

    function objetivos(): HasMany
    {
        return $this->hasMany(Objetivo::class);
    }

    function institucion(): BelongsTo
    {
        return $this->belongsTo(Institucion::class);
    }

    function institution($query, $institucion_id)
    {
        if ($institucion_id) {
            return $query->where('oepeis.institucion_id', $institucion_id);
        }
    }
}
