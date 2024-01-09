<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Gad extends Model
{
    use HasFactory;

    protected $fillable = [
        'tipo_gad'
    ];

    function instituciones() : HasMany {
        return $this->hasMany(Institucion::class);
    }
}
