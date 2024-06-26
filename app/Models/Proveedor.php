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
        'telefono',
        'departamento_id'
    ];

    function departamento(): BelongsTo
    {
        return $this->belongsTo(Departamento::class);
    }

    function scopeByDepartamentoId($query, $departamento_id)
    {
        if ($departamento_id) {
            return $query->where('prov.departamento_id', $departamento_id);
        }
    }
}
