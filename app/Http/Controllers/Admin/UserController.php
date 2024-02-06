<?php

namespace App\Http\Controllers\Admin;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserPassword;
use App\Http\Requests\UserRequest;
use App\Http\Requests\UserUpdateActivo;
use App\Repositories\Admin\UserRepository;
use Illuminate\Http\JsonResponse;
use App\Models\User;
use App\Traits\ResponseTrait;

class UserController extends Controller
{
    use ResponseTrait;
    private $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    //TODO: Para el admin
    function getUsuariosAdmin(): JsonResponse
    {

        $usuarios = $this->userRepository->getUsuariosAdmin();

        return $this->responseSuccess([
            'usuario' => $usuarios
        ]);
    }

    //TODO: Para el publico
    function getUsuarios(): JsonResponse
    {
        $usuarios = $this->userRepository->getUsuarios();

        return $this->responseSuccess([
            'usuario' => $usuarios
        ]);
    }

    //TODO: Para el admin
    function store(UserRequest $request): JsonResponse
    {
        try {
            $this->userRepository->store($request);

            return $this->responseSuccess([
                'msg' => HTTPStatus::Created,
                'status_code' => JsonResponse::HTTP_CREATED
            ]);
        } catch (\Throwable $th) {
            //return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
            return $this->responseError($th->getMessage(), JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    //TODO: Para el admin
    function update(UserRequest $request, int $id): JsonResponse
    {
        try {
            $usuario = $this->userRepository->findById($id);

            if ($usuario) {
               $this->userRepository->update($request, $usuario);
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    //TODO: Para el publico
    function updatePassword(UserPassword $request, int $id): JsonResponse
    {
        $usuario = $this->userRepository->findById($id);

        try {
            if ($usuario) {
                $this->userRepository->updatePassword($request, $usuario);
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    //TODO: Para el admin
    function updateActivo(UserUpdateActivo $request, int $id): JsonResponse
    {
        $usuario = $this->userRepository->findById($id);

        try {
            if ($usuario) {
                $this->userRepository->updateActivo($request, $usuario);
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    //TODO: Para el admin
    function destroy(int $id): JsonResponse
    {
        $usuario = $this->userRepository->findById($id);

        if ($usuario) {
            $this->userRepository->destroy($usuario);
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
        } else {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
        }
    }
}
