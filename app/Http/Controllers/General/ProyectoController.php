<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProyectoPublicado;
use App\Http\Requests\ProyectoRequest;
use App\Http\Requests\ProyectoStatus;
use App\Models\Proyecto;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProyectoController extends Controller
{

    function getProyectos(Request $request): JsonResponse
    {
        $proyectos = Proyecto::from('proyectos as p')
            ->selectRaw('pro.nombre_programa, p.nombre_proyecto,
                 d.nombre_departamento')
            ->join('programas as pro', 'pro.id', 'p.programa_id')
            ->join('departamentos as d', 'd.id', 'p.departamento_id')
            ->departamento($request->departamento_id)
            ->nivel($request->nivel_id)
            ->programa($request->programa_id)
            ->codigo($request->codigo_proyecto)
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'proyectos' => $proyectos], 200);
    }

    function store(ProyectoRequest $request): JsonResponse
    {
        try {
            $proyecto = Proyecto::create($request->validated());
            $proyecto->opndesarrollos()->attach($request->opndesarrollos);
            $siglasDep = Proyecto::from('proyectos as p')
                            ->selectRaw('p.id, d.siglas')
                            ->join('departamentos as d', 'd.id', 'p.departamento_id')
                            ->where('p.id', $proyecto->id)
                            ->first();
            $proyecto->codigo_proyecto = 'PROY-' . $siglasDep->siglas . $proyecto->id;
            $proyecto->save();
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(ProyectoRequest $request, int $id): JsonResponse
    {
        $proyecto = Proyecto::find($id);
        try {
            if ($proyecto) {
                $proyecto->update($request->validated());

                if ($request->filled('opndesarrollos')) {
                    $proyecto->opndesarrollos()->detach();
                    $proyecto->componentes()->sync($request->opndesarrollos);
                }

                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function updateStatus(ProyectoStatus $request, int $id): JsonResponse
    {
        $proyecto = Proyecto::find($id);
        try {
            if ($proyecto) {
                $proyecto->update($request->validated());
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
        $proyecto = Proyecto::find($id);
        try {
            if ($proyecto) {
                $proyecto->delete();
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
