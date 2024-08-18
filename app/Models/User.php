<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Traits\CustomHasPermissions;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles , CustomHasPermissions {
        CustomHasPermissions::hasPermissionTo insteadof HasRoles;
        HasRoles::hasPermissionTo as spatieHasPermissionTo;
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'apellidos',
        'nombres',
        'dni',
        'email',
        'password',
        'activo',
        'institucion_id',
        'departamento_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];



    function institucion(): BelongsTo
    {
        return $this->belongsTo(Institucion::class);
    }

    function departamento(): BelongsTo
    {
        return $this->belongsTo(Departamento::class);
    }

    function administrativos(): BelongsToMany
    {
        return $this->belongsToMany(Administrativo::class);
    }

    static function create(array $attributes = []): object
    {
        $attributes['password'] = Hash::make($attributes['dni']);

        $usuario = static::query()->create($attributes);

        return $usuario;
    }

    function setPasswordAttribute(string $password): string
    {
        return $this->attributes['password'] = Hash::needsRehash($password) ? Hash::make($password) : $password;
    }

    function scopeByActivo(Builder $query, $activo)
    {
        if ($activo) {
            return $query->where('u.activo', $activo);
        }
    }

    function scopeByDepartamentoId(Builder $query, $departamento_id)
    {
        if ($departamento_id) {
            return $query->where('u.departamento_id', $departamento_id);
        }
    }

    protected static function boot()
    {
        parent::boot();
        static::deleting(function ($user) {
            $user->administrativos()->detach();
        });
    }
}
