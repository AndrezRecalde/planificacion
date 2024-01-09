<?php

namespace App\Http\Controllers\Auth;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    function login(LoginRequest $request): JsonResponse
    {
        try {
            if (!Auth::attempt($request->validated())) {
                return response()->json([
                    'msg'   =>  'Credenciales incorrectas'
                ], 401);
            }

            $usuario = User::from('users as u')
                ->with([
                    'roles' => function ($query) {
                        return $query->select('roles.id', 'roles.name');
                    }
                ])
                ->selectRaw('u.id, CONCAT(u.apellidos, " ", u.nombres) AS nombres_completos, u.email, u.dni')
                ->where('u.dni', $request->dni)
                ->where('u.activo', 1)
                ->first();

            if ($usuario) {
                $token = $usuario->createToken('auth_token')->plainTextToken;
                return response()->json([
                    'status'        =>  HTTPStatus::Success,
                    'access_token'  =>  $token,
                    'token_type'    =>  'Bearer',
                    'usuario'       =>  $usuario
                ]);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => 'Usuario no activo'], 401);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function refresh(): JsonResponse
    {
        $usuario = User::from('users as u')
            ->with([
                'roles' => function ($query) {
                    return $query->select('roles.id', 'roles.name');
                }
            ])
            ->selectRaw('u.id, CONCAT(u.apellidos, " ",u.nombres) AS nombres_completos, u.email, u.dni')
            ->where('u.id', Auth::user()->id)
            ->first();

        if ($usuario) {
            auth()->user()->tokens()->delete();
            $token = $usuario->createToken('auth_token')->plainTextToken;
            return response()->json([
                'status' => HTTPStatus::Success,
                'access_token'  =>  $token,
                'token_type'    =>  'Bearer',
                'usuario'       =>  $usuario
            ]);
        } else {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => 'Usuario no activo'], 401);
        }
    }

    function profile(): JsonResponse
    {
        $profile = User::from('users as u')
            ->with([
                'roles' => function ($query) {
                    return $query->select('roles.id', 'roles.name');
                }
            ])
            ->selectRaw('u.id, CONCAT(u.apellidos, " ", u.nombres) AS nombres_completos, u.email, u.dni')
            ->where('u.id', Auth::user()->id)
            ->first();

        return response()->json(['status' => HTTPStatus::Success, 'profile' => $profile], 200);
    }

    function logout(): JsonResponse
    {
        auth()->user()->tokens()->delete();

        return response()->json([
            'status' => HTTPStatus::Success,
            'msg'   =>  'Sesión cerrada'
        ], 200);
    }
}
