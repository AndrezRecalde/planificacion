<?php

namespace App\Repositories\Admin;

use App\Http\Requests\PermissionRequest;
use App\Http\Requests\UserPassword;
use App\Http\Requests\UserRequest;
use App\Http\Requests\UserUpdateActivo;
use App\Interfaces\Admin\UserInterface;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\DB;


class UserRepository implements UserInterface
{
    private $model;
    public function __construct()
    {
        $this->model = new User();
    }


    function getUsuarios(Request $request): Collection
    {
        $usuarios = $this->model::from('users as u')
            ->selectRaw('u.id, u.apellidos, u.nombres,
                         u.dni, u.email,
                         i.nombre_institucion as institucion,
                        d.nombre_departamento as departamento')
            ->with([
                'roles' => function ($query) {
                    return $query->select('roles.id', 'roles.name');
                }
            ])
            ->with([
                'permissions' => function ($query) {
                    return $query->select('permissions.id', 'permissions.name', 'model_has_permissions.expires_at');
                }
            ])
            ->join('instituciones as i', 'i.id', 'u.institucion_id')
            ->join('departamentos as d', 'd.id', 'u.departamento_id')
            ->byActivo($request->activo)
            ->byDepartamentoId($request->departamento_id)
            ->get();

        return $usuarios;
    }

    function assignPermissions(PermissionRequest $request, int $id): void
    {
        $usuario = $this->model::find($id);
        $usuario->givePermissionTo($request->permissions);

        //$permissions = Permission::whereIn('id', $request->permissions)->get();

        foreach ($request->permissions as $permissionId) {
            DB::table('model_has_permissions')
                ->where('model_id', $usuario->id)
                ->where('permission_id', $permissionId)
                ->update(['expires_at' => Carbon::parse($request->expires_at)->format('Y-m-d')]);
        }
    }

    function updatePermissions(PermissionRequest $request, int $id): void
    {
        $usuario = $this->model::find($id);
        $usuario->permissions()->detach();
        $usuario->givePermissionTo($request->permissions);

        //$permissions = Permission::whereIn('id', $request->permissions)->get();

        foreach ($request->permissions as $permissionId) {
            DB::table('model_has_permissions')
                ->where('model_id', $usuario->id)
                ->where('permission_id', $permissionId)
                ->update(['expires_at' => Carbon::parse($request->expires_at)->format('Y-m-d')]);
        }
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

    function findById(int $id): User | null
    {
        $usuario = $this->model::find($id);
        if ($usuario) {
            return $usuario;
        }
        return null;
    }
}
