<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\OepeiRequest;
use App\Http\Requests\OepeiStatus;
use App\Models\Oepei;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class OepeiController extends Controller
{
    function getOepeis(Request $request): JsonResponse
    {
        $oepeis = Oepei::with('institucion')->institution($request->institucion_id)->get();

        return response()->json(['status' => HTTPStatus::Success, 'oepeis' => $oepeis], 200);
    }

    function store(OepeiRequest $request): JsonResponse
    {
        try {
            Oepei::create($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(OepeiRequest $request, int $id): JsonResponse
    {
        $oepei = Oepei::find($id);
        try {
            if ($oepei) {
                $oepei->update($request->validated());
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function updateActivo(OepeiStatus $request, int $id): JsonResponse
    {
        $oepei = Oepei::find($id);
        try {
            if ($oepei) {
                $oepei->update($request->validated());
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
        $oepei = Oepei::find($id);
        try {
            if ($oepei) {
                $oepei->delete();
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
