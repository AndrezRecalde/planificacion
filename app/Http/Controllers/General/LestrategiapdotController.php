<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\LestrategiapdotRequest;
use App\Http\Requests\LestrategiapdotStatus;
use App\Models\Lestrategiapdot;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class LestrategiapdotController extends Controller
{
    function getLineasEstrategiasPdot(Request $request): JsonResponse
    {
        $estrategias = Lestrategiapdot::from('lestrategiapdots as le')
            ->selectRaw('le.id, le.linea_estrategica, le.activo, l.nombre_linea')
            ->join('lineapdots as l', 'l.id', 'le.lineapdot_id')
            ->byLineapdotId($request->lineapdot_id)
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'estrategias' => $estrategias], 200);
    }

    function store(LestrategiapdotRequest $request): JsonResponse
    {
        try {
            Lestrategiapdot::create($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(LestrategiapdotRequest $request, int $id): JsonResponse
    {
        $estrategia = Lestrategiapdot::find($id);
        try {
            if ($estrategia) {
                $estrategia->update($request->validated());
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function updateStatus(LestrategiapdotStatus $request, int $id): JsonResponse
    {
        $estrategia = Lestrategiapdot::find($id);
        try {
            if ($estrategia) {
                $estrategia->update($request->validated());
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
        $estrategia = Lestrategiapdot::find($id);
        try {
            if ($estrategia) {
                $estrategia->delete();
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
