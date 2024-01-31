<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Repositories\Auth\AuthRepository;
use App\Traits\ResponseTrait;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    use ResponseTrait;
    private $authRepositories;

    public function __construct(AuthRepository $authRepositories)
    {
        $this->authRepositories = $authRepositories;
    }

    function login(LoginRequest $request): JsonResponse
    {
        try {

            if (!Auth::attempt($request->validated())) {
                return $this->responseError(msg: "¡Credenciales incorrectas!", status_code: JsonResponse::HTTP_UNAUTHORIZED);
            }

            $usuario = $this->authRepositories->login($request->dni);

            if ($usuario) {
                $token = $this->authRepositories->getToken($usuario);
                return $this->responseSuccess([
                    "usuario" => $usuario,
                    "token" => $token,
                    "token_type" => 'Bearer'
                ]);
            } else {
                return $this->responseError(msg: 'Usuario no activo', status_code: JsonResponse::HTTP_UNAUTHORIZED);
            }
        } catch (\Throwable $th) {
            return $this->responseError($th->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    function refresh(): JsonResponse
    {
        $usuario = $this->authRepositories->refresh();

        if ($usuario) {
            $usuario->tokens()->delete();
            $token = $this->authRepositories->getToken($usuario);
            return $this->responseSuccess([
                "usuario" => $usuario,
                "token" => $token,
                "token_type" => 'Bearer'
            ]);
        } else {
            return $this->responseError(msg: 'Usuario no activo', status_code: JsonResponse::HTTP_UNAUTHORIZED);
        }
    }

    function profile(): JsonResponse
    {
        $profile = $this->authRepositories->profile();

        return $this->responseSuccess([
            'profile' => $profile
        ]);
    }

    function logout(): JsonResponse
    {
        auth()->user()->tokens()->delete();

        return $this->responseSuccess(message: 'Sesion finalizada');
    }
}
