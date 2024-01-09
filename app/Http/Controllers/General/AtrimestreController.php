<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\AtrimestreRequest;
use App\Models\Atrimestre;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AtrimestreController extends Controller
{
    function getActivTrimestresAdmin(): JsonResponse
    {
        $atrimestres = Atrimestre::from('atrimestres as at')
            ->selectRaw('at.id, at.programado, at.avance,
                     a.nombre_actividad, p.nombre_proyecto')
            ->join('actividades as a', 'a.id', 'at.actividad_id')
            ->join('proyectos as p', 'p.id', 'at.proyecto_id')
            ->orderBy('p.id', 'DESC')
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'atrimestres' => $atrimestres], 200);
    }

    function getActivTrimestresForActividad(Request $request): JsonResponse
    {
        $atrimestres = Atrimestre::from('atrimestres as at')
            ->selectRaw('at.id, at.programado, at.avance,
                 a.nombre_actividad, p.nombre_proyecto')
            ->join('actividades as a', 'a.id', 'at.actividad_id')
            ->actividad($request->actividad_id)
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'atrimestres' => $atrimestres], 200);
    }

    function store(AtrimestreRequest $request): JsonResponse
    {
        try {
            Atrimestre::create($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(AtrimestreRequest $request, int $id): JsonResponse
    {
        $atrimestre = Atrimestre::find($id);
        try {
            if ($atrimestre) {
                $atrimestre->update($request->validated());
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
        $atrimestre = Atrimestre::find($id);
        try {
            if ($atrimestre) {
                $atrimestre->delete();
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
