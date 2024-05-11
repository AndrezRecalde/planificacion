<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Checklist extends Model
{
    use HasFactory;

    protected $fillable = [
        'task',
        'check',
        'namechecklist_id'
    ];

    function namechecklist(): BelongsTo
    {
        return $this->belongsTo(Namechecklist::class);
    }
}
