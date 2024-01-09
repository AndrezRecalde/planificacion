<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Atrimestre extends Model
{
    use HasFactory;

    protected $fillable  = [
        'programado',
        'avance',
        'actividad_id'
    ];

    function actividad(): BelongsTo
    {
        return $this->belongsTo(Actividad::class);
    }


    function scopeActividad($query, $actividad)
    {
        if ($actividad) {
            return $query->where('at.actividad_id', $actividad);
        }
    }
}
