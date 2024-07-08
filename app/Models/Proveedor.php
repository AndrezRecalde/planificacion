<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Auth;

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

    static function create(array $attributes = []): object
    {
        $attributes['departamento_id'] = Auth::user()->departamento_id;

        $proveedor = static::query()->create($attributes);

        return $proveedor;
    }

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
