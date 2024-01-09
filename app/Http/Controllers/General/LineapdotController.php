<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\LineapdotRequest;
use App\Models\Lineapdot;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class LineapdotController extends Controller
{
    function getLineaspdot(): JsonResponse
    {
        $lineaspdot = Lineapdot::get(['id', 'nombre_linea']);
        return response()->json(['status' => HTTPStatus::Success, 'lineaspdot' => $lineaspdot], 200);
    }

    function store(LineapdotRequest $request): JsonResponse
    {
        try {
            Lineapdot::create($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(LineapdotRequest $request, int $id): JsonResponse
    {
        $lineapdot = Lineapdot::find($id);
        try {
            if ($lineapdot) {
                $lineapdot->update($request->validated());
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
        $lineapdot = Lineapdot::find($id);
        try {
            if ($lineapdot) {
                $lineapdot->delete();
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
