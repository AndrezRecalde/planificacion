<?php

namespace App\Http\Controllers\Auth;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Repositories\Auth\AuthRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    private $authRepositories;

    public function __construct(AuthRepository $authRepositories)
    {
        $this->authRepositories = $authRepositories;
    }

    function login(LoginRequest $request): JsonResponse
    {
        try {

            if (!Auth::attempt($request->validated())) {
                return response()->json([
                    'status' => HTTPStatus::Error,
                    'msg' => '¡Credenciales incorrectas!'
                ], 401);
            }

            $usuario = $this->authRepositories->login($request->dni);

            if ($usuario) {
                $token = $this->authRepositories->getToken($usuario);
                return response()->json([
                    "usuario" => $usuario,
                    "token_type" => 'Bearer',
                    "token" => $token,
                ]);
            } else {
                return response()->json([
                    'status' => HTTPStatus::Error,
                    'msg' => 'Usuario no activo'
                ], 401);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'status'=> HTTPStatus::Error,
                'msg'=> $th->getMessage()
            ], 500);
        }
    }

    function refresh(): JsonResponse
    {
        $usuario = $this->authRepositories->refresh();

        if ($usuario) {
            $usuario->tokens()->delete();
            $token = $this->authRepositories->getToken($usuario);
            return response()->json([
                "usuario" => $usuario,
                "token_type" => 'Bearer',
                "token" => $token,
            ]);
        } else {
            return response()->json([
                "status" => HTTPStatus::Error,
                "msg" => "Usuario no activo"
            ]);
        }
    }

    function profile(): JsonResponse
    {
        $profile = $this->authRepositories->profile();

        return response()->json([
            'status' => HTTPStatus::Success,
            'profile' => $profile
        ]);
    }

    function logout(): JsonResponse
    {
        auth()->user()->tokens()->delete();

        return response()->json([
            'status' => HTTPStatus::Success,
            'msg' => 'Sesión finalizada'
        ]);
    }
}
