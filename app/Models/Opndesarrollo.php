<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Opndesarrollo extends Model
{
    use HasFactory;

    protected $fillable = [
        'objetivo_opn',
        'eje_id',
        'gobierno_id'
    ];

    function eje(): BelongsTo
    {
        return $this->belongsTo(Eje::class);
    }

    function proyectos(): BelongsToMany
    {
        return $this->belongsToMany(Proyecto::class, 'proyecto_opndesarrollo');
    }

    function scopeByOpn($query, $opn_id)
    {
        if ($opn_id) {
            return $query->where('id', $opn_id);
        }
    }
}
