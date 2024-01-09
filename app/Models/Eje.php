<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Eje extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_eje',
        'gobierno_id'
    ];

    function gobierno(): BelongsTo
    {
        return $this->belongsTo(Gobierno::class);
    }

    function opndesarrollos(): HasMany
    {
        return $this->hasMany(Opndesarrollo::class);
    }
}
