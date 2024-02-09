<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserPassword;
use App\Models\User;
use App\Repositories\Admin\UserRepository;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    private $userRepository;
    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    //TODO: Para el publico
    function getUsuarios(): JsonResponse
    {
        $this->authorize("viewGeneral", User::class);
        $usuarios = $this->userRepository->getUsuarios();

        return response()->json([
            'status' => HTTPStatus::Success,
            'usuarios' => $usuarios
        ], 200);
    }

    //TODO: Para el publico
    function updatePassword(UserPassword $request, int $id): JsonResponse
    {

        try {
            $usuario = $this->userRepository->findById($id);
            $this->authorize("updatePassword", $usuario);
            if ($usuario) {
                $this->userRepository->updatePassword($request, $usuario);
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
        /* return response()->json(['request' => $request]); */
    }
}
