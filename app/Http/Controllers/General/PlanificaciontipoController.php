<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\PlanificaciontipoRequest;
use App\Models\Planificaciontipo;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PlanificaciontipoController extends Controller
{
    function getTiposPlanificaciones(): JsonResponse
    {
        $tipos = Planificaciontipo::get(['id', 'nombre_planificacion']);

        return response()->json(['status' => HTTPStatus::Success, 'tipos' => $tipos], 200);
    }

    function store(PlanificaciontipoRequest $request): JsonResponse
    {
        try {
            Planificaciontipo::create($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(PlanificaciontipoRequest $request, int $id): JsonResponse
    {
        $planificacionTipo = Planificaciontipo::find($id);
        try {
            if ($planificacionTipo) {
                $planificacionTipo->update($request->validated());
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
        $planificacionTipo = Planificaciontipo::find($id);
        try {
            if ($planificacionTipo) {
                $planificacionTipo->delete();
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
