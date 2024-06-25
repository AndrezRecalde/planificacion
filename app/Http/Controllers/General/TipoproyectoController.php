<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\TipoProyectoRequest;
use App\Models\Tipoproyecto;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TipoproyectoController extends Controller
{
    function getTiposProyectos(): JsonResponse
    {
        $tipos = Tipoproyecto::get(['id', 'tipo_proyecto']);

        return response()->json(['status' => HTTPStatus::Success, 'tipos' => $tipos], 200);
    }

    function store(TipoProyectoRequest $request): JsonResponse
    {
        try {
            Tipoproyecto::create($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(TipoProyectoRequest $request, int $id): JsonResponse
    {
        $tipoProyecto = Tipoproyecto::find($id);
        try {
            if ($tipoProyecto) {
                $tipoProyecto->update($request->validated());
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
        $tipoProyecto = Tipoproyecto::find($id);
        try {
            if ($tipoProyecto) {
                $tipoProyecto->delete();
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
