<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Namechecklist extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_checklist',
        'departamento_id'
    ];

    function departamento(): BelongsTo
    {
        return $this->belongsTo(Departamento::class);
    }

    function listnamelists(): HasMany
    {
        return $this->hasMany(Listnamelist::class);
    }

    function checklists() : HasMany {
        return $this->hasMany(Checklist::class);
    }
}
