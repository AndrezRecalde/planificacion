<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\PadrelistaRequest;
use App\Models\Padrelista;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PadrelistaController extends Controller
{
    function getPadreListas(Request $request): JsonResponse
    {
        $padreListas = Padrelista::where('departamento_id', $request->departamento_id)
            ->get(['id', 'nombre_lista']);

        return response()->json([
            'status' => HTTPStatus::Success,
            'padreListas' => $padreListas
        ], 200);
    }

    function store(PadrelistaRequest $request): JsonResponse
    {
        try {
            Padrelista::create($request->validated());

            return response()->json([
                'status' => HTTPStatus::Success,
                'msg' => HTTPStatus::Created
            ], 201);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => HTTPStatus::Error,
                'msg' => $th->getMessage()
            ], 500);
        }
    }

    function destroy(int $id): JsonResponse
    {
        $padreLista = Padrelista::find($id);
        try {
            if ($padreLista) {
                $padreLista->delete();
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
