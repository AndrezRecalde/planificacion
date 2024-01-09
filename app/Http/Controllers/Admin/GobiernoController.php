<?php

namespace App\Http\Controllers\Admin;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\GobiernoRequest;
use App\Http\Requests\GobiernoStatus;
use App\Models\Gobierno;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class GobiernoController extends Controller
{
    function getGobiernosAdmin(): JsonResponse
    {
        $gobiernos = Gobierno::get(['id', 'nombre_gobierno', 'presidente', 'fecha_inicio', 'fecha_fin', 'activo']);

        return response()->json(['status' => HTTPStatus::Success, 'gobiernos' => $gobiernos], 200);
    }

    function getGobiernoActivo(): JsonResponse
    {
        $gobiernos = Gobierno::from('gobiernos as g')
            ->selectRaw('g.id, g.nombre_gobierno,
                         CONCAT(g.fecha_inicio, "-", g.fecha_fin) as periodo,
                         g.activo')
            ->where('g.activo', 1)
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'gobiernos' => $gobiernos], 200);
    }

    function store(GobiernoRequest $request): JsonResponse
    {
        try {
            Gobierno::create($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            DB::rollback();
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(GobiernoRequest $request, int $id): JsonResponse
    {
        $gobierno = Gobierno::find($id);

        try {
            if ($gobierno) {
                $gobierno->update($request->validated());
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            DB::rollback();
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function updateActivo(GobiernoStatus $request, int $id): JsonResponse
    {
        $gobierno = Gobierno::find($id);

        try {
            if ($gobierno) {
                $gobierno->update($request->validated());
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            DB::rollback();
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function destroy(int $id): JsonResponse
    {
        $gobierno = Gobierno::find($id);

        try {
            if ($gobierno) {
                $gobierno->delete();
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            DB::rollback();
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
