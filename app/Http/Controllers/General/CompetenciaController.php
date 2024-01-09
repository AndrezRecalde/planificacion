<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\CompetenciaRequest;
use App\Models\Competencia;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/* COMPETENCIAS DEL GAD */

class CompetenciaController extends Controller
{
    function getCompetenciasAdmin(): JsonResponse
    {
        $competencias = Competencia::from('competencias as c')
            ->selectRaw('c.nombre_competencia, i.nombre_institucion')
            ->join('instituciones as i', 'i.id', 'c.institucion_id')
            ->orderBy('i.id', 'ASC')
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'competencias' => $competencias], 200);
    }

    function getCompetenciasForInstitucion(Request $request): JsonResponse
    {
        $competencias = Competencia::from('competencias as c')
            ->selectRaw('c.nombre_competencia, i.nombre_institucion')
            ->join('instituciones as i', 'i.id', 'c.institucion_id')
            ->where('i.id', $request->institucion_id)
            ->orderBy('c.id', 'ASC')
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'competencias' => $competencias], 200);
    }

    function store(CompetenciaRequest $request): JsonResponse
    {
        try {
            Competencia::create($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(CompetenciaRequest $request, int $id): JsonResponse
    {
        $competencia = Competencia::find($id);
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
        $competencia = Competencia::find($id);

        try {
            if($competencia) {
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
