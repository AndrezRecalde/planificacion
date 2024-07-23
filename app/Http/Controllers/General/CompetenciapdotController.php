<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\CompetenciapdotRequest;
use App\Http\Requests\CompetenciapdotStatus;
use App\Models\Competenciapdot;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CompetenciapdotController extends Controller
{
    function getCompetenciasPDOT(Request $request): JsonResponse
    {
        $competencias = Competenciapdot::from('competenciapdots as comp')
            ->selectRaw('comp.id, comp.nombre_competencia, comp.activo, le.id as lestrategiapdot_id, le.linea_estrategica')
            ->with(['componentes', 'cotpdots'])
            ->join('lestrategiapdots as le', 'le.id', 'comp.lestrategiapdot_id')
            ->lestrategiapdot($request->lestrategiapdot_id)
            ->activo($request->activo)
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'competencias' => $competencias], 200);
    }

    function store(CompetenciapdotRequest $request): JsonResponse
    {
        try {
            $competencia = Competenciapdot::create($request->validated());
            $competencia->componentes()->attach($request->componentes);
            $competencia->cotpdots()->attach($request->cotpdots);

            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(CompetenciapdotRequest $request, int $id): JsonResponse
    {
        $competencia = Competenciapdot::find($id);
        try {
            if ($competencia) {
                $competencia->update($request->validated());

                if ($request->filled('componentes')) {
                    $competencia->componentes()->detach();
                    $competencia->componentes()->sync($request->componentes);
                }

                if ($request->filled('cotpdots')) {
                    $competencia->cotpdots()->detach();
                    $competencia->cotpdots()->sync($request->cotpdots);
                }

                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function updateStatus(CompetenciapdotStatus $request, int $id): JsonResponse
    {
        $competencia = Competenciapdot::find($id);
        try {
            if ($competencia) {
                $competencia->update($request->validated());
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
        $competencia = Competenciapdot::find($id);
        try {
            if ($competencia) {
                $competencia->delete();
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
