<?php

namespace App\Http\Controllers\general;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\TipoUnidadRequest;
use App\Http\Requests\TipoUnidadStatusRequest;
use App\Models\Tipounidad;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TipoUnidadController extends Controller
{
    function getTipoUnidades(): JsonResponse
    {
        $tipoUnidades = Tipounidad::get(['id', 'tipounidad', 'activo']);

        return response()->json(['status' => HTTPStatus::Success, 'tipoUnidades' => $tipoUnidades], 200);
    }

    function store(TipoUnidadRequest $request): JsonResponse
    {
        try {
            Tipounidad::create($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(TipoUnidadRequest $request, int $id): JsonResponse
    {
        $tipoUnidad = Tipounidad::find($id);
        try {
            $tipoUnidad->update($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function updateStatus(TipoUnidadStatusRequest $request,int $id): JsonResponse
    {
        $tipoUnidad = Tipounidad::find($id);
        try {
            $tipoUnidad->update($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function destroy(int $id): JsonResponse
    {
        $tipoUnidad = Tipounidad::find($id);
        try {
            $tipoUnidad->delete();
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
