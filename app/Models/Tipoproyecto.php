<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Tipoproyecto extends Model
{
    use HasFactory;

    protected $fillable = [
        'tipo_proyecto'
    ];

    function proyectos(): HasMany
    {
        return $this->hasMany(Proyecto::class);
    }
}
