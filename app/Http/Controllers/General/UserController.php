<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserPassword;
use App\Models\User;
use App\Repositories\Admin\UserRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;


class UserController extends Controller
{
    private $userRepository;
    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }


    function getUsuarios(Request $request): JsonResponse
    {
        //$this->authorize("viewGeneral", User::class);
        $usuarios = $this->userRepository->getUsuarios($request);

        return response()->json([
            'status' => HTTPStatus::Success,
            'usuarios' => $usuarios
        ], 200);
    }

    //TODO: Para el publico
    function updatePassword(UserPassword $request, int $id): JsonResponse
    {
        $usuario = $this->userRepository->findById($id);
        $this->authorize("updatePassword", $usuario);
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
        /* return response()->json(['request' => $request]); */
    }
}
