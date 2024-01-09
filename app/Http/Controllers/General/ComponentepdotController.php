<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\ComponentepdotRequest;
use App\Http\Requests\ComponentepdotStatus;
use App\Models\Componentepdot;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ComponentepdotController extends Controller
{
    function getComponentesAdmin(): JsonResponse
    {
        $componentes = Componentepdot::get(['id', 'nombre_componente', 'activo']);

        return response()->json(['status' => HTTPStatus::Success, 'componentes' => $componentes], 200);
    }

    function getComponentesActivos(): JsonResponse
    {
        $componentes = Componentepdot::where('activo', 1)->get();

        return response()->json(['status' => HTTPStatus::Success, 'componentes' => $componentes], 200);
    }

    function getComponentesForCompetencia(Request $request): JsonResponse
    {
        $componentes = Componentepdot::from('componentepdots as compo')
            ->selectRaw('compo.id, compo.nombre_componente')
            ->join('competencia_componente as cc', 'cc.componentepdot_id', 'compo.id')
            ->where('cc.competenciapdot_id', $request->competenciapdot_id)
            ->get();
        return response()->json(['status' => HTTPStatus::Success, 'componentes' => $componentes], 200);
    }

    function store(ComponentepdotRequest $request): JsonResponse
    {
        try {
            Componentepdot::create($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(ComponentepdotRequest $request, int $id): JsonResponse
    {
        $componente = Componentepdot::find($id);
        try {
            if ($componente) {
                $componente->update($request->validated());
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function updateActivo(ComponentepdotStatus $request, int $id): JsonResponse
    {
        $componente = Componentepdot::find($id);
        try {
            if ($componente) {
                $componente->update($request->validated());
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
        $componente = Componentepdot::find($id);
        try {
            if ($componente) {
                $componente->delete();
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
