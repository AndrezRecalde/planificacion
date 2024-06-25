<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Status extends Model
{
    use HasFactory;

    //Estados de los tableros

    protected $table = "status";

    protected $fillable = [
        "nombre_status",
        "color",
    ];

    function actividades(): HasMany
    {
        return $this->hasMany(Actividad::class);
    }

}
