<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\SubactividadCheckRequest;
use App\Http\Requests\SubactividadDateDueRequest;
use App\Http\Requests\SubactividadPosicionRequest;
use App\Http\Requests\SubactividadRequest;
use App\Models\Lista;
use App\Models\Subactividad;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SubactividadController extends Controller
{
    function getSubactividades(Request $request): JsonResponse
    {
        $subactividades = Subactividad::where('actividad_id', $request->actividad_id)
            ->get(['id', 'nombre_subactividad', 'posicion', 'check', 'date_due']);

        return response()->json([
            'status' => HTTPStatus::Success,
            'subactividades' => $subactividades
        ], 200);
    }

    function store(SubactividadRequest $request): JsonResponse
    {
        try {
            Subactividad::create($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(SubactividadRequest $request, int $id): JsonResponse
    {
        $subactividad = Subactividad::find($id);
        try {
            if ($subactividad) {
                $subactividad->update($request->validated());
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function updateCheck(SubactividadCheckRequest $request, int $id): JsonResponse
    {
        $subactividad = Subactividad::find($id);
        try {
            if ($subactividad) {
                $subactividad->update($request->validated());
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function updateDateDue(SubactividadDateDueRequest $request, int $id): JsonResponse
    {
        $subactividad = Subactividad::find($id);
        try {
            if ($subactividad) {
                $subactividad->update($request->validated());
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function updatePosicion(SubactividadPosicionRequest $request, int $id): JsonResponse
    {
        $subactividad = Subactividad::find($id);
        try {
            if ($subactividad) {
                $subactividad->update($request->validated());
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
        $subactividad = Subactividad::find($id);
        try {
            if ($subactividad) {
                $subactividad->delete();
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    //Traspasar las actividades de las listas en subactividades
    function transferenciaSubactividades(Request $request): JsonResponse
    {
        //Procesar registros en lotes de 100
        try {
            Lista::where('padrelista_id', $request->padrelista_id)->chunk(100, function ($listas) use (&$request) {
                foreach ($listas as $lista) {
                    Subactividad::create([
                        'nombre_subactividad'   => $lista->nombre_tarea,
                        'posicion'              => $lista->posicion,
                        'actividad_id'          => $request->actividad_id
                    ]);
                }
            });
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
