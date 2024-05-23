<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\TipoactividadRequest;
use App\Models\Tipoactividad;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TipoActividadController extends Controller
{
    function getTiposdeActividades(): JsonResponse
    {
        $tiposactividades = Tipoactividad::get();
        return response()->json(['status' => HTTPStatus::Success, 'tiposactividades' => $tiposactividades], 200);
    }

    function store(TipoactividadRequest $request): JsonResponse
    {
        try {
            Tipoactividad::create($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(TipoactividadRequest $request, int $id): JsonResponse
    {
        $tipoactividad = Tipoactividad::find($id);
        try {
            if ($tipoactividad) {
                $tipoactividad->update($request->validated());
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
        $tipoactividad = Tipoactividad::find($id);
        try {
            if ($tipoactividad) {
                $tipoactividad->delete();
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
