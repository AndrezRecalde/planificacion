<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\ObjetivoRequest;
use App\Http\Requests\ObjetivoStatus;
use App\Repositories\General\ObjetivoRepository;


class ObjetivoController extends Controller
{
    private $objetivoRepository;

    public function __construct(ObjetivoRepository $objetivoRepository)
    {
        $this->objetivoRepository = $objetivoRepository;
    }

    function getObjetivos(Request $request): JsonResponse
    {
        $objetivos = $this->objetivoRepository->getObjetivos($request);

        return response()->json([
            'status' => HTTPStatus::Success,
            'objetivos' => $objetivos
        ], 200);
    }

    function store(ObjetivoRequest $request): JsonResponse
    {
        try {
            $this->objetivoRepository->store($request);

            return response()->json([
                'status' => HTTPStatus::Success,
                'msg' => HTTPStatus::Created
            ], 201);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => HTTPStatus::Success,
                'msg' => $th->getMessage()
            ], 500);
        }
    }

    function update(ObjetivoRequest $request, int $id): JsonResponse
    {
        $objetivo = $this->objetivoRepository->findById($id);
        try {
            if ($objetivo) {
                $this->objetivoRepository->update($request, $objetivo);

                return response()->json([
                    'status' => HTTPStatus::Success,
                    'msg' => HTTPStatus::Updated
                ], 201);
            } else {
                return response()->json([
                    'status' => HTTPStatus::Error,
                    'msg' => HTTPStatus::NotFound
                ], 404);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'status' => HTTPStatus::Success,
                'msg' => $th->getMessage()
            ], 500);
        }
    }

    function updateActivo(ObjetivoStatus $request, int $id): JsonResponse
    {
        $objetivo = $this->objetivoRepository->findById($id);
        try {
            if ($objetivo) {
                $objetivo->updateActivo($request, $objetivo);

                return response()->json([
                    'status' => HTTPStatus::Success,
                    'msg' => HTTPStatus::Updated
                ], 201);
            } else {
                return response()->json([
                    'status' => HTTPStatus::Error,
                    'msg' => HTTPStatus::NotFound
                ], 404);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'status' => HTTPStatus::Success,
                'msg' => $th->getMessage()
            ], 500);
        }
    }

    function destroy(int $id): JsonResponse
    {
        $objetivo = $this->objetivoRepository->findById($id);
        try {
            if ($objetivo) {
                $objetivo->destroy($objetivo);

                return response()->json([
                    'status' => HTTPStatus::Success,
                    'msg' => HTTPStatus::Deleted
                ], 200);
            } else {
                return response()->json([
                    'status' => HTTPStatus::Error,
                    'msg' => HTTPStatus::NotFound
                ], 404);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'status' => HTTPStatus::Success,
                'msg' => $th->getMessage()
            ], 500);
        }
    }
}
