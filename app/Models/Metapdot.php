<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Metapdot extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_meta',
        'earticulacion_id',
        'activo'
    ];

    function earticulacion(): BelongsTo
    {
        return $this->belongsTo(Earticulacion::class);
    }

    function objetivos(): HasMany
    {
        return $this->hasMany(Objetivo::class);
    }

    function scopeEsarticulacion($query, $earticulacion_id)
    {
        if ($earticulacion_id) {
            return $query->where('mt.earticulacion_id', $earticulacion_id);
        }
    }
}
