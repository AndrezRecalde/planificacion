<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\OpndesarrolloRequest;
use App\Models\Opndesarrollo;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class OpndesarrolloController extends Controller
{
    /* Consulta de Objetivos de Plan Nacional de Desarrollo por Gobierno */
    function getOPN(Request $request): JsonResponse
    {
        $opns = Opndesarrollo::from('opndesarrollos as opn')
            ->selectRaw('opn.id, opn.objetivo_opn,
                        opn.eje_id, e.nombre_eje,
                        opn.gobierno_id, g.nombre_gobierno')
            ->join('ejes as e', 'e.id', 'opn.eje_id')
            ->join('gobiernos as g', 'g.id', 'opn.gobierno_id')
            ->byGobiernoId($request->gobierno_id)
            ->orderBy('opn.id', 'DESC')
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'opns' => $opns], 200);
    }

    function getOPNForProyecto(Request $request): JsonResponse
    {
        $opn_gobierno = Opndesarrollo::with(
            [
                'proyectos'
            ]
        )->byOpnId($request->opn_id)
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'opn_gobierno' => $opn_gobierno], 200);
    }

    function store(OpndesarrolloRequest $request): JsonResponse
    {
        try {
            Opndesarrollo::create($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(OpndesarrolloRequest $request, int $id): JsonResponse
    {
        $opn = Opndesarrollo::find($id);

        try {
            if ($opn) {
                $opn->update($request->validated());
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
        $opn = Opndesarrollo::find($id);

        try {
            if ($opn) {
                $opn->delete();
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Success, 'msg' => $th->getMessage()], 500);
        }
    }
}
