<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Odssostenible extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_ods',
        'imagen_url'
    ];
}
