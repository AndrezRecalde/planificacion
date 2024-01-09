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
    function getOPNAdmin(): JsonResponse
    {
        $opns = Opndesarrollo::from('opndesarrollos as opn')
            ->selectRaw('opn.id, opn.objetivo_opn, e.nombre_eje')
            ->join('ejes as e', 'e.id', 'opn.eje_id')
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'opns' => $opns], 200);
    }

    /* Consulta de Objetivos de Plan Nacional de Desarrollo por Gobierno */
    function getOPNForGobierno(Request $request): JsonResponse
    {
        $opns = Opndesarrollo::from('opndesarrollos as opn')
            ->selectRaw('opn.id, opn.objetivo_opn,
                            e.nombre_eje, g.nombre_gobierno')
            ->join('ejes as e', 'e.id', 'opn.eje_id')
            ->join('gobiernos as g', 'g.id', 'e.gobierno_id')
            ->where('g.id', $request->gobierno_id)
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'opns' => $opns], 200);
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
            if($opn){
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
