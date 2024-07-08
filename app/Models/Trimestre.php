<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Trimestre extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_trimestre',
        'activo'
    ];

    function actividadesfisicas(): BelongsToMany
    {
        return $this->belongsToMany(Actividad::class, 'actividadf_trimestre');
    }

    function actividadesmonto(): BelongsToMany
    {
        return $this->belongsToMany(Actividad::class, 'actividadm_trimestre');
    }
}
