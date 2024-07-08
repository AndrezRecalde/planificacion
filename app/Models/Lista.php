<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Lista extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_tarea',
        'posicion',
        'padrelista_id'
    ];

    function padrelista(): BelongsTo
    {
        return $this->belongsTo(Padrelista::class);
    }
}
