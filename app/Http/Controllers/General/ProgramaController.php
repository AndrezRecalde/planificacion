<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProgramaRequest;
use App\Http\Requests\ProgramaStatus;
use App\Repositories\General\ProgramaRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProgramaController extends Controller
{
    private $programaRepository;

    public function __construct(ProgramaRepository $programaRepository) {
        $this->programaRepository = $programaRepository;
    }

    function getProgramas(Request $request): JsonResponse
    {
        $programas = $this->programaRepository->getProgramas($request);

        return response()->json(['status' => HTTPStatus::Success, 'programas' => $programas], 200);
    }

    function store(ProgramaRequest $request): JsonResponse
    {
        try {
            $this->programaRepository->store($request);
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(ProgramaRequest $request, int $id): JsonResponse
    {
        $programa = $this->programaRepository->findById($id);
        try {
            if ($programa) {
                $this->programaRepository->update($request, $programa);
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function updateActivo(ProgramaStatus $request, int $id): JsonResponse
    {
        $programa = $this->programaRepository->findById($id);
        try {
            if ($programa) {
                $this->programaRepository->updateActivo($request, $programa);
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
        $programa = $this->programaRepository->findById($id);
        try {
            if ($programa) {
                $this->programaRepository->destroy($programa);
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 200);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
