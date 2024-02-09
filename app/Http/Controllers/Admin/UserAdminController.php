<?php

namespace App\Http\Controllers\Admin;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Http\Requests\UserUpdateActivo;
use App\Models\User;
use App\Repositories\Admin\UserRepository;
use Illuminate\Http\JsonResponse;

class UserAdminController extends Controller
{
    private $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    //TODO: Para el admin
    function getUsuariosAdmin(): JsonResponse
    {
        $this->authorize("viewAdmin", User::class);
        $usuarios = $this->userRepository->getUsuariosAdmin();

        return response()->json([
            'status' => HTTPStatus::Success,
            'usuarios' => $usuarios
        ], 200);
    }

    //TODO: Para el admin
    function store(UserRequest $request): JsonResponse
    {
        $this->authorize("create", User::class);
        try {
            $this->userRepository->store($request);

            return response()->json([
                'status' => HTTPStatus::Success,
                'msg' => HTTPStatus::Created
            ], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    //TODO: Para el admin
    function update(UserRequest $request, int $id): JsonResponse
    {
        $this->authorize("update", User::class);
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

    //TODO: Para el admin
    function updateActivo(UserUpdateActivo $request, int $id): JsonResponse
    {
        $this->authorize("updateActivo", User::class);
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
        $this->authorize("delete", User::class);
        $usuario = $this->userRepository->findById($id);

        if ($usuario) {
            $this->userRepository->destroy($usuario);
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
        } else {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
        }
    }
}
