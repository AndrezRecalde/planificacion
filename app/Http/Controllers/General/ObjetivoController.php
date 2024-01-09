<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\ObjetivoRequest;
use App\Http\Requests\ObjetivoStatus;
use App\Models\Objetivo;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ObjetivoController extends Controller
{
    function getObjetivosAdmin(): JsonResponse
    {
        $objetivos = Objetivo::from('objetivos as o')
            ->selectRaw('o.*, li.nombre_linea, le.linea_estrategica, co.nombre_competencia,
                        ge.nombre_gestion, oe.objetivo_pdot, ea.nombre_articulacion, me.nombre_meta,
                        comp.nombre_competencia, oep.objetivo_pei')
            ->join('lestrategiapdots as le', 'le.id', 'o.lestrategiapdot_id')
            ->join('lineapdots as li', 'li.id', 'le.lineapdot_id')
            ->join('competenciapdots as co', 'co.id', 'o.competenciapdot_id')
            ->join('componentepdots as compo', 'compo.id', 'o.componentepdot_id')
            ->join('gestionpdots as ge', 'ge.id', 'o.gestionpdot_id')
            ->join('oepdots as oe', 'oe.id', 'o.oepadot_id')
            ->join('earticulaciones as ea', 'ea.id', 'o.earticulacion_id')
            ->join('metapdots as me', 'me.id', 'o.metapdot_id')
            ->join('competencias as comp', 'comp.id', 'o.competencia_id')
            ->join('oepeis as oep', 'oep.id', 'o.oepei_id')
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'objetivos' => $objetivos], 200);
    }


    function store(ObjetivoRequest $request): JsonResponse
    {
        try {
            $objetivo = Objetivo::create($request->validated());
            $objetivo->departamentos()->attach($request->departamentos);
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Success, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(ObjetivoRequest $request, int $id): JsonResponse
    {
        $objetivo = Objetivo::find($id);
        try {
            if ($objetivo) {
                $objetivo->update($request->validated());

                if ($request->filled('departamentos')) {
                    $objetivo->departamentos()->detach();
                    $objetivo->departamentos()->sync($request->departamentos);
                }
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Success, 'msg' => $th->getMessage()], 500);
        }
    }

    function updateActivo(ObjetivoStatus $request, int $id): JsonResponse
    {
        $objetivo = Objetivo::find($id);
        try {
            if ($objetivo) {
                $objetivo->update($request->validated());
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Success, 'msg' => $th->getMessage()], 500);
        }
    }

    function destroy(int $id): JsonResponse
    {
        $objetivo = Objetivo::find($id);
        try {
            if ($objetivo) {
                $objetivo->delete();
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Success, 'msg' => $th->getMessage()], 500);
        }
    }
}
