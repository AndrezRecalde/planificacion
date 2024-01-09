<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Lineapdot extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_linea'
    ];

    function lestrategiapdots(): HasMany
    {
        return $this->hasMany(Lestrategiapdot::class);
    }
}
