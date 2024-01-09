<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\GestionpdotRequest;
use App\Http\Requests\GestionpdotStatus;
use App\Models\Gestionpdot;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class GestionpdotController extends Controller
{
    function getGestionPDOTSAdmin(): JsonResponse
    {
        $gestiones = Gestionpdot::get(['id', 'nombre_gestion', 'activo']);

        return response()->json(['status' => HTTPStatus::Success, 'gestiones' => $gestiones], 200);
    }

    function getGestionPDOTS(): JsonResponse
    {
        $gestiones = Gestionpdot::where('activo', 1)->get();

        return response()->json(['status' => HTTPStatus::Success, 'gestiones' => $gestiones], 200);
    }

    function store(GestionpdotRequest $request): JsonResponse
    {
        try {
            Gestionpdot::create($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(GestionpdotRequest $request, int $id): JsonResponse
    {
        $gestion = Gestionpdot::find($id);
        try {
            if ($gestion) {
                $gestion->update($request->validated());
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function updateActivo(GestionpdotStatus $request, int $id): JsonResponse
    {
        $gestion = Gestionpdot::find($id);
        try {
            if ($gestion) {
                $gestion->update($request->validated());
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
        $gestion = Gestionpdot::find($id);
        try {
            if ($gestion) {
                $gestion->delete();
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
