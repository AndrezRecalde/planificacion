<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\EarticulacionRequest;
use App\Http\Requests\EarticulacionStatusRequest;
use App\Models\Earticulacion;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class EarticulacionController extends Controller
{
    function getArticulaciones(Request $request): JsonResponse
    {
        $articulaciones = Earticulacion::from('earticulaciones as ea')
            ->selectRaw('ea.id, ea.nombre_articulacion, ea.activo')
            ->activo($request->activo)
            //->objetivopdot($request->oepdot_id)
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

    function updateStatus(EarticulacionStatusRequest $request, int $id): JsonResponse
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
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
