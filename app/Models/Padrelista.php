<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Padrelista extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_lista',
        'departamento_id'
    ];

    function departamento(): BelongsTo
    {
        return $this->belongsTo(Departamento::class);
    }

    function listas(): HasMany
    {
        return $this->hasMany(Lista::class);
    }
}
