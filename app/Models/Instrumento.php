<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Instrumento extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_archivo',
        'archivo',
        'fecha_inicio',
        'fecha_fin'
    ];
}
