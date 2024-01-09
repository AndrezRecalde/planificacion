<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Proveedor extends Model
{
    use HasFactory;

    protected $table = 'proveedores';

    protected $fillable = [
        'nombre_proveedor',
        'ruc',
        'departamento_id'
    ];

    function departamento(): BelongsTo
    {
        return $this->belongsTo(Departamento::class);
    }

    function scopeDepartamento($query, $departamento)
    {
        if ($departamento) {
            $query->where('prov.departamento_id');
        }
    }
}
