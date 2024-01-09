<?php

namespace App\Http\Controllers\Admin;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserPassword;
use App\Http\Requests\UserRequest;
use App\Http\Requests\UserUpdateActivo;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
    function getUsuariosAdmin(): JsonResponse
    {
        $usuarios = User::from('usuarios as u')
            ->selectRaw('u.id, u.apellidos, u.nombres,
                         u.dni, u.email, u.activo,
                         i.nombre_institucion as institucion,
                        d.nombre_departamento as departamento')
            ->join('instituciones as i', 'i.id', 'u.institucion_id')
            ->join('departamentos as d', 'd.id', 'u.departamento_id')
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'usuarios' => $usuarios], 200);
    }

    function getUsuarios(): JsonResponse
    {
        $usuarios = User::from('usuarios as u')
            ->selectRaw('u.id, u.apellidos, u.nombres,
                         u.dni, u.email,
                         i.nombre_institucion as institucion,
                        d.nombre_departamento as departamento')
            ->join('instituciones as i', 'i.id', 'u.institucion_id')
            ->join('departamentos as d', 'd.id', 'u.departamento_id')
            ->where('u.activo', 1)
            ->get();
        return response()->json(['status' => HTTPStatus::Success, 'usuarios' => $usuarios], 200);
    }

    function store(UserRequest $request): JsonResponse
    {
        try {
            $usuario = User::create($request->validated());
            $usuario->assignRole($request->roles);
            $usuario->administrativos()->attach($request->administrativo_id);
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(UserRequest $request, int $id): JsonResponse
    {
        $usuario = User::find($id);

        try {
            if ($usuario) {
                $usuario->update($request->validated());

                if ($request->filled('roles')) {
                    $usuario->roles()->detach();
                    $usuario->assignRole($request->roles);
                }

                if ($request->filled('administrativo_id')) {
                    $usuario->administrativos()->detach();
                    $usuario->administrativos()->sync($request->administrativo_id);
                }

                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function updatePassword(UserPassword $request, int $id): JsonResponse
    {
        $usuario = User::find($id);

        try {
            if ($usuario) {
                $usuario->update($request->validated());
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function updateActivo(UserUpdateActivo $request, int $id): JsonResponse
    {
        $usuario = User::find($id);

        try {
            if ($usuario) {
                $usuario->update($request->validated());
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function destroy(int $id): JsonResponse
    {
        $usuario = User::find($id);

        if ($usuario) {
            $usuario->delete();
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
        } else {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
        }
    }
}
