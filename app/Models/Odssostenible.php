<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Odssostenible extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_ods',
        'imagen_url'
    ];

    function proyectos(): BelongsToMany
    {
        return $this->belongsToMany(Proyecto::class);
    }
}
