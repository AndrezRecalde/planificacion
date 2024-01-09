<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Administrativo extends Model
{
    use HasFactory;

    protected $fillable = [
        'inicio_periodo',
        'fin_periodo',
        'maxima_autoridad',
        'activo'
    ];

    function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class);
    }
}
