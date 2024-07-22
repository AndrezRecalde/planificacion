<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\CotpdotRequest;
use App\Http\Requests\CotpdotStatus;
use App\Models\Cotpdot;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CotpdotController extends Controller
{
    function getCotpdots(Request $request): JsonResponse
    {
        $categorias = Cotpdot::from('cotpdots as cot')
            ->selectRaw('cot.id, cot.nombre_categoria, cot.activo')
            ->activo($request->activo)
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'categorias' => $categorias], 200);
    }

    function store(CotpdotRequest $request): JsonResponse
    {
        try {
            Cotpdot::create($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(CotpdotRequest $request, int $id): JsonResponse
    {
        $categoria = Cotpdot::find($id);
        try {
            if ($categoria) {
                $categoria->update($request->validated());
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function updateStatus(CotpdotStatus $request, int $id): JsonResponse
    {
        $categoria = Cotpdot::find($id);
        try {
            if ($categoria) {
                $categoria->update($request->validated());
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
        $categoria = Cotpdot::find($id);
        try {
            if ($categoria) {
                $categoria->delete();
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
