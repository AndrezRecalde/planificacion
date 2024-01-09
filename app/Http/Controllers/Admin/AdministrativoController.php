<?php

namespace App\Http\Controllers\Admin;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\AdministrativoActivo;
use App\Http\Requests\AdministrativoRequest;
use App\Models\Administrativo;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AdministrativoController extends Controller
{
    function getAdministrativosAdmin(): JsonResponse
    {
        $administrativos = Administrativo::get(['id', 'inicio_periodo', 'fin_periodo', 'maxima_autoridad', 'activo']);
        return response()->json(['status' => HTTPStatus::Success, 'administrativos' => $administrativos], 200);
    }

    function getAdministrativos(): JsonResponse
    {
        $administrativos = Administrativo::where('activo', 1)->get(['id', 'inicio_periodo', 'fin_periodo', 'maxima_autoridad']);
        return response()->json(['status' => HTTPStatus::Success, 'administrativos' => $administrativos], 200);
    }

    function store(AdministrativoRequest $request): JsonResponse
    {
        try {
            Administrativo::create($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(AdministrativoRequest $request, int $id): JsonResponse
    {
        $administrativo = Administrativo::find($id);

        if ($administrativo) {
            $administrativo->update($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
        } else {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
        }
    }

    function updateActivo(AdministrativoActivo $request, int $id): JsonResponse
    {
        $administrativo = Administrativo::find($id);

        try {
            if ($administrativo) {
                $administrativo->update($request->validated());
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
        $administrativo = Administrativo::find($id);

        if ($administrativo) {
            $administrativo->delete();
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
        } else {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
        }
    }
}
