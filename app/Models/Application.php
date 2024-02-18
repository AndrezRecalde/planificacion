<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Application extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_app',
        'admin_email',
        'copyright',
        'logo_url',
        'color'
    ];

    function getUrlPathAttribute(): string
    {
        return Storage::url($this->logo_url);
    }
}
