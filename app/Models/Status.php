<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Status extends Model
{
    use HasFactory;

    //Estados de los tableros

    protected $table = "status";

    protected $fillable = [
        "nombre_status",
        "color",
        'tablero_id'
    ];

    function actividades(): HasMany
    {
        return $this->hasMany(Actividad::class);
    }

    function tablero(): BelongsTo
    {
        return $this->belongsTo(Tablero::class);
    }
}
