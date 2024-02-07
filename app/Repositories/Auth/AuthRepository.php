<?php

namespace App\Repositories\Auth;

use App\Interfaces\Auth\AuthInterface;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthRepository implements AuthInterface
{
    protected $model;
    public function __construct()
    {
        $this->model = new User();
    }

    public function login(string $dni): User | null
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
        $usuario = $this->model::from('users as u')
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

    public function profile(): User | null
    {
        $profile = $this->model::from('users as u')
            ->with([
                'roles' => function ($query) {
                    return $query->select('roles.id', 'roles.name');
                },
                'administrativos' => function ($query) {
                    return $query->select('administrativos.id',
                                          'administrativos.inicio_periodo',
                                          'administrativos.fin_periodo');
                }
            ])
            ->join('instituciones as i', 'i.id', 'u.institucion_id')
            ->join('departamentos as d', 'd.id', 'u.departamento_id')
            ->join('gads as gd', 'gd.id', 'i.gad_id')
            ->selectRaw('u.id, u.apellidos, u.nombres, u.email, u.dni,
                        i.nombre_institucion, i.telefono, i.logo_url,
                        gd.tipo_gad, d.nombre_departamento, d.extension')
            ->where('u.id', Auth::user()->id)
            ->first();

        return $profile;
    }

    public function getToken(User $usuario): string
    {
        return $usuario->createToken('auth_token')->plainTextToken;
    }
}
