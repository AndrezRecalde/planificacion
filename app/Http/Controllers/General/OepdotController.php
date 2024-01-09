<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\OepdotRequest;
use App\Http\Requests\OepdotStatus;
use App\Models\Oepdot;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class OepdotController extends Controller
{


    function getOEPDOTSAdmin(): JsonResponse
    {
        $oepdots = Oepdot::from('oepdots as oe')
            ->selectRaw('oe.id, oe.objetivo_pdot')
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'oepdots' => $oepdots], 200);
    }

    function getOEPDOTS(): JsonResponse
    {
        $oepdots = Oepdot::from('oepdots as oe')
        ->selectRaw('oe.id, oe.objetivo_pdot')
        ->where('oe.activo', 1)
        ->get();

        return response()->json(['status' => HTTPStatus::Success, 'oepdots' => $oepdots], 200);
    }

    function store(OepdotRequest $request): JsonResponse
    {
        try {
            Oepdot::create($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(OepdotRequest $request, int $id): JsonResponse
    {
        $oepdot = Oepdot::find($id);

        try {
            if ($oepdot) {
                $oepdot->update($request->validated());
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Success, 'msg' => $th->getMessage()], 500);
        }
    }

    function updateActivo(OepdotStatus $request, int $id): JsonResponse
    {
        $oepdot = Oepdot::find($id);

        try {
            if ($oepdot) {
                $oepdot->update($request->validated());
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Success, 'msg' => $th->getMessage()], 500);
        }
    }

    function destroy(int $id): JsonResponse
    {
        $oepdot = Oepdot::find($id);

        try {
            if ($oepdot) {
                $oepdot->delete();
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Success, 'msg' => $th->getMessage()], 500);
        }
    }
}
