<?php

namespace App\Http\Controllers\Admin;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\GobiernoRequest;
use App\Http\Requests\GobiernoStatus;
use App\Models\Gobierno;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class GobiernoController extends Controller
{
    function getGobiernos(Request $request): JsonResponse
    {
        $gobiernos = Gobierno::from('gobiernos as gob')
            ->selectRaw('gob.id, gob.nombre_gobierno, gob.presidente,
                         gob.fecha_inicio, gob.fecha_fin, gob.activo')
            ->with(['opndesarrollos'])
            ->activo($request->activo)
            ->orderBy('gob.activo', 'DESC')
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'gobiernos' => $gobiernos], 200);
    }

    function store(GobiernoRequest $request): JsonResponse
    {
        //$this->authorize("create", Gobierno::class);
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
        //$this->authorize("update", Gobierno::class);
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

    function updateStatus(GobiernoStatus $request, int $id): JsonResponse
    {
        //$this->authorize("update", Gobierno::class);
        $gobierno = Gobierno::find($id);

        try {
            if ($gobierno) {
                $gobierno->update($request->validated());
                Gobierno::where('id', '!=', $id)->update(['activo' => false]);
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
        //$this->authorize("delete", Gobierno::class);
        $gobierno = Gobierno::find($id);

        try {
            if ($gobierno && $gobierno->activo !== true) {
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
