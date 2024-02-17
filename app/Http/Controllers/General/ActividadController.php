<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\ActividadRequest;
use App\Http\Requests\ActividadStatus;
use App\Models\Actividad;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ActividadController extends Controller
{
    function getActividadesForProyecto(Request $request): JsonResponse
    {
        $actividades = Actividad::from('actividades as act')
            ->selectRaw('act.id, act.nombre_actividad, act.status_id,
                         s.nombr_status, p.nombre_proyecto')
            ->join('status as s', 's.id', 'act.status_id')
            ->join('proyectos as p', 'p.id', 'act.proyecto_id')
            ->proyecto($request->proyecto_id)
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'actividades' => $actividades], 200);
    }

    function store(ActividadRequest $request): JsonResponse
    {
        $this->authorize('create', Actividad::class);
        try {
            Actividad::create($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(ActividadRequest $request, int $id): JsonResponse
    {
        $this->authorize('update', Actividad::class);
        $actividad = Actividad::find($id);
        try {
            if ($actividad) {
                $actividad->update($request->validated());
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function updateStatus(ActividadStatus $request, int $id): JsonResponse
    {
        $this->authorize('update', Actividad::class);
        $actividad = Actividad::find($id);
        try {
            if ($actividad) {
                $actividad->update($request->validated());
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
        $this->authorize('delete', Actividad::class);
        $actividad = Actividad::find($id);
        try {
            if ($actividad) {
                $actividad->delete();
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
