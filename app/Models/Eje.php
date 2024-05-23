<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Eje extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_eje',
    ];

    function gobiernos(): BelongsToMany
    {
        return $this->belongsToMany(Gobierno::class, 'gobierno_eje');
    }

    function opndesarrollos(): HasMany
    {
        return $this->hasMany(Opndesarrollo::class);
    }
}
