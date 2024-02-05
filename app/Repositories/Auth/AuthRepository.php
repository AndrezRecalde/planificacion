<?php

namespace App\Repositories\Auth;

use App\Interfaces\Auth\AuthInterface;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthRepository implements AuthInterface
{
    private $model;
    public function __construct()
    {
        $this->model = new User();
    }

    public function login(string $dni): User
    {

        $usuario = $this->model->from('users as u')
            ->with([
                'roles' => function ($query) {
                    return $query->select('roles.id', 'roles.name');
                }
            ])
            ->selectRaw('u.id, u.apellidos, u.nombres, u.email, u.dni')
            ->where('u.dni', $dni)
            ->where('u.activo', 1)
            ->first();

        return $usuario;
    }

    public function refresh(): User
    {
        $usuario = User::from('users as u')
            ->with([
                'roles' => function ($query) {
                    return $query->select('roles.id', 'roles.name');
                }
            ])
            ->selectRaw('u.id, u.apellidos ,u.nombres, u.email, u.dni')
            ->where('u.id', Auth::user()->id)
            ->where('u.activo', 1)
            ->first();
        return $usuario;
    }

    public function profile(): User
    {
        $profile = User::from('users as u')
            ->with([
                'roles' => function ($query) {
                    return $query->select('roles.id', 'roles.name');
                }
            ])
            ->selectRaw('u.id, u.apellidos, u.nombres, u.email, u.dni')
            ->where('u.id', Auth::user()->id)
            ->first();

        return $profile;
    }

    public function getToken(User $usuario): string
    {
        return $usuario->createToken('auth_token')->plainTextToken;
    }
}
