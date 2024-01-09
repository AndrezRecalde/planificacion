<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\MetapdotRequest;
use App\Models\Metapdot;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MetapdotController extends Controller
{
    function getMetasPDOTAdmin(): JsonResponse
    {
        $metas = Metapdot::from('metapdots as mt')
            ->selectRaw('mt.id, mt.nombre_meta, ea.nombre_articulacion')
            ->join('earticulaciones as ea', 'ea.id', 'mt.earticulacion_id')
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'metas' => $metas], 200);
    }

    function getMetasForArticulaciones(Request $request): JsonResponse
    {
        $metas = Metapdot::from('metapdots as mt')
            ->selectRaw('mt.id, mt.nombre_meta, ea.nombre_articulacion')
            ->join('earticulaciones as ea', 'ea.id', 'mt.earticulacion_id')
            ->where('mt.earticulacion_id', $request->earticulacion_id)
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'metas' => $metas], 200);
    }

    function store(MetapdotRequest $request): JsonResponse
    {
        try {
            Metapdot::create($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(MetapdotRequest $request, int $id): JsonResponse
    {
        $meta = Metapdot::find($id);
        try {
            if ($meta) {
                $meta->update($request->validated());
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
        $meta = Metapdot::find($id);
        try {
            if ($meta) {
                $meta->delete();
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }

    }
}
