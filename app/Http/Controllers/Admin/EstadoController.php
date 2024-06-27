<?php

namespace App\Http\Controllers\Admin;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\EstadoRequest;
use App\Models\Estado;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class EstadoController extends Controller
{
    function getEstados(): JsonResponse
    {
        $estados = Estado::get(['id', 'nombre_estado', 'color']);

        return response()->json([
            'status' => HTTPStatus::Success,
            'estados' => $estados
        ], 200);
    }

    function store(EstadoRequest $request): JsonResponse
    {
        try {
            Estado::create($request->validated());

            return response()->json(
                [
                    'status' => HTTPStatus::Success,
                    'msg' => HTTPStatus::Created
                ],
                201
            );
        } catch (\Throwable $th) {
            return response()->json([
                'status' => HTTPStatus::Error,
                'msg' => $th->getMessage()
            ], 500);
        }
    }

    function update(EstadoRequest $request, int $id): JsonResponse
    {
        $estado = Estado::find($id);
        try {
            if ($estado) {
                $estado->update($request->validated());
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'status' => HTTPStatus::Error,
                'msg' => $th->getMessage()
            ], 500);
        }
    }

    function destroy(int $id): JsonResponse
    {
        $estado = Estado::find($id);
        try {
            if ($estado) {
                $estado->delete();
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'status' => HTTPStatus::Error,
                'msg' => $th->getMessage()
            ], 500);
        }
    }
}
