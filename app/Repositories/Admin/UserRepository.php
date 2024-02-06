<?php

namespace App\Repositories\Admin;

use App\Http\Requests\UserPassword;
use App\Http\Requests\UserRequest;
use App\Http\Requests\UserUpdateActivo;
use App\Interfaces\Admin\UserInterface;
use App\Models\User;
use Illuminate\Support\Facades\Request;

class UserRepository implements UserInterface
{
    private $model;
    public function __construct()
    {
        $this->model = new User();
    }

    function getUsuariosAdmin(): User
    {
        $usuarios = $this->model::from('usuarios as u')
            ->selectRaw('u.id, u.apellidos, u.nombres,
                         u.dni, u.email, u.activo,
                         i.nombre_institucion as institucion,
                        d.nombre_departamento as departamento')
            ->join('instituciones as i', 'i.id', 'u.institucion_id')
            ->join('departamentos as d', 'd.id', 'u.departamento_id')
            ->get();

        return $usuarios;
    }

    function getUsuarios(): User
    {
        $usuarios = $this->model::from('usuarios as u')
            ->selectRaw('u.id, u.apellidos, u.nombres,
                         u.dni, u.email,
                         i.nombre_institucion as institucion,
                        d.nombre_departamento as departamento')
            ->join('instituciones as i', 'i.id', 'u.institucion_id')
            ->join('departamentos as d', 'd.id', 'u.departamento_id')
            ->where('u.activo', 1)
            ->get();

        return $usuarios;
    }

    function store(UserRequest $request): void
    {
        $usuario = $this->model::create($request->validated());
        $usuario->assignRole($request->roles);
        $usuario->administrativos()->attach($request->administrativo_id);
    }

    function update(UserRequest $request, User $usuario): void
    {
        $usuario->update($request->validated());

        if ($request->filled('roles')) {
            $usuario->roles()->detach();
            $usuario->assignRole($request->roles);
        }

        if ($request->filled('administrativo_id')) {
            $usuario->administrativos()->detach();
            $usuario->administrativos()->sync($request->administrativo_id);
        }

    }

    function updatePassword(UserPassword $request, User $usuario): void
    {
        $usuario->update($request->validated());
    }

    function updateActivo(UserUpdateActivo $request, User $usuario): void
    {
        $usuario->update($request->validated());
    }

    function destroy(User $usuario): void
    {
        $usuario->delete();
    }

    function findById(int $id): User
    {
        $usuario = $this->model::find($id);
        return $usuario;
    }
}
