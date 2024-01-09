<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Mtrimestre extends Model
{
    use HasFactory;

    protected $fillable = [
        'programado',
        'devengado',
        'pagado',
        'proyecto_id'
    ];

    function proyecto(): BelongsTo
    {
        return $this->belongsTo(Proyecto::class);
    }
}
