<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Tablero extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_tablero',
        'anio',
        'departamento_id'
    ];

    function departamento(): BelongsTo
    {
        return $this->belongsTo(Departamento::class);
    }
}
