<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Subactividad extends Model
{
    use HasFactory;

    protected $table = 'subactividades';

    protected $fillable = [
        'nombre_subactividad',
        'posicion',
        'check',
        'date_due',
        'actividad_id'
    ];

    function actividad(): BelongsTo
    {
        return $this->belongsTo(Actividad::class);
    }
}
