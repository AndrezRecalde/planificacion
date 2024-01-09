<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\EjeRequest;
use App\Models\Eje;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EjeController extends Controller
{
    function getEjesAdmin(): JsonResponse
    {
        $ejes = Eje::from('ejes as e')
            ->selectRaw('e.id, e.nombre_eje, g.nombre_gobierno')
            ->join('gobiernos as g', 'g.id', 'e.gobierno_id')
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'ejes' => $ejes], 200);
    }

    function getEjes(Request $request): JsonResponse
    {
        $ejes = Eje::from('ejes as e')
            ->selectRaw('e.id, e.nombre_eje, g.nombre_gobierno')
            ->join('gobiernos as g', 'g.id', 'e.gobierno_id')
            ->where('g.id', $request->gobierno_id)
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'ejes' => $ejes], 200);
    }

    function store(EjeRequest $request): JsonResponse
    {
        try {
            Eje::create($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            DB::rollback();
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(EjeRequest $request, int $id): JsonResponse
    {
        $eje = Eje::find($id);

        try {
            if ($eje) {
                $eje->update($request->validated());
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
        $eje = Eje::find($id);

        try {
            if ($eje) {
                $eje->delete();
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
