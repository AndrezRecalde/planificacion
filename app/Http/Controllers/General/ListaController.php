<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\ListaRequest;
use App\Models\Lista;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ListaController extends Controller
{
    function getListas(Request $request): JsonResponse
    {
        $listas = Lista::where('padrelista_id', $request->padrelista_id)
            ->get(['id', 'nombre_tarea', 'posicion']);

        return response()->json([
            'status' => HTTPStatus::Success,
            'listas' => $listas
        ], 200);
    }

    function store(ListaRequest $request): JsonResponse
    {
        try {
            Lista::create($request->validated);
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(ListaRequest $request, int $id): JsonResponse
    {
        $lista = Lista::find($id);
        try {
            if ($lista) {
                $lista->update($request->validated());
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
        $lista = Lista::find($id);
        try {
            if ($lista) {
                $lista->delete();
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
