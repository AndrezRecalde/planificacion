<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\EarticulacionRequest;
use App\Models\Earticulacion;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class EarticulacionController extends Controller
{
    function getArticulacionesAdmin(): JsonResponse
    {
        $articulaciones = Earticulacion::from('earticulaciones as ea')
            ->selectRaw('ea.id, ea.nombre_articulacion, oe.objetivo_pdot')
            ->join('oepdots as oe', 'oe.id', 'ea.oepdot_id')
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'articulaciones' => $articulaciones], 200);
    }

    function getArticulacionesForObjetivo(Request $request): JsonResponse
    {
        $articulaciones = Earticulacion::from('earticulaciones as ea')
            ->selectRaw('ea.id, ea.nombre_articulacion, oe.objetivo_pdot')
            ->join('oepdots as oe', 'oe.id', 'ea.oepdot_id')
            ->where('ea.oepdot_id', $request->oepdot_id)
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'articulaciones' => $articulaciones], 200);
    }

    function store(EarticulacionRequest $request): JsonResponse
    {
        try {
            Earticulacion::create($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(EarticulacionRequest $request, int $id): JsonResponse
    {
        $articulacion = Earticulacion::find($id);
        try {
            if ($articulacion) {
                $articulacion->update($request->validated());
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
        $articulacion = Earticulacion::find($id);
        try {
            if ($articulacion) {
                $articulacion->delete();
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
