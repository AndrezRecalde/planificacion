<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Earticulacion extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_articulacion',
        'oepdot_id'
    ];

    function objetivo(): BelongsTo
    {
        return $this->belongsTo(Oepdot::class);
    }

    function metas(): HasMany
    {
        return $this->hasMany(Metapdot::class);
    }

    function objetivos(): HasMany
    {
        return $this->hasMany(Objetivo::class);
    }
}
