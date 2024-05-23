<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\StatusRequest;
use App\Models\Status;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class StatusController extends Controller
{

    function getStatusForTablero(Request $request): JsonResponse
    {
        $statusForTablero = Status::from('status as s')
            ->selectRaw('s.nombre_status, s.color, s.tablero_id,
                                    t.nombre_tablero, t.anio')
            ->join('tableros as t', 't.id', 's.tablero_id')
            ->where('s.tablero_id', $request->tablero_id)
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'statusForTablero' => $statusForTablero], 200);
    }

    function store(StatusRequest $request): JsonResponse
    {
        try {
            Status::create($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(StatusRequest $request, int $id): JsonResponse
    {
        $status = Status::find($id);
        try {
            if ($status) {
                $status->update($request->validated());
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
        $status = Status::find($id);
        if ($status) {
            $status->delete();
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
        } else {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
        }
    }
}
