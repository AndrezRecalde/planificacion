<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Institucion extends Model
{
    use HasFactory;

    protected $table = 'instituciones';

    protected $fillable = [
        'nombre_institucion',
        'siglas',
        'ruc',
        'activo',
        'telefono',
        'logo_url',
        'gad_id'
    ];

    function usuarios(): HasMany
    {
        return $this->hasMany(User::class);
    }

    function gad(): BelongsTo
    {
        return $this->belongsTo(Gad::class);
    }

    function departamentos(): HasMany
    {
        return $this->hasMany(Departamento::class);
    }
}
