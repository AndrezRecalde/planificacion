<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\TableroRequest;
use App\Models\Tablero;
use App\Repositories\General\TableroRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TableroController extends Controller
{
    private $tableroRepository;

    public function __construct(TableroRepository $tableroRepository)
    {
        $this->tableroRepository = $tableroRepository;
    }

    function getTableros(Request $request): JsonResponse
    {
        $tableros = $this->tableroRepository->getTableros($request);

        return response()->json(['status' => HTTPStatus::Success, 'tableros' => $tableros], 200);
    }

    function store(TableroRequest $request): JsonResponse
    {
        try {
            $this->tableroRepository->store($request);
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(TableroRequest $request, int $id): JsonResponse
    {
        $tablero = $this->tableroRepository->findById($id);
        try {
            if ($tablero) {
                $this->tableroRepository->update($request, $tablero);
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
        $tablero = Tablero::find($id);
        try {
            if ($tablero) {
                $this->tableroRepository->destroy($tablero);
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 200);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
