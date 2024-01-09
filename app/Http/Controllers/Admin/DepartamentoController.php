<?php

namespace App\Http\Controllers\Admin;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\AddDirectoresRequest;
use App\Http\Requests\DepartamentoRequest;
use App\Http\Requests\DepartamentoStatus;
use App\Models\Departamento;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class DepartamentoController extends Controller
{
    function getDepartamentos(): JsonResponse
    {
        $departamentos = Departamento::from('departamentos as d')
            ->selectRaw('d.id, d.nombre_departamento,
                                d.siglas, d.extension,
                                i.siglas as siglas_institucion, ac.nombre_acronimo, ac.siglas as acronimo')
            ->join('instituciones as i', 'i.id', 'd.institucion_id')
            ->join('acronimos as ac', 'ac.id', 'd.acronimo_id')
            ->where('d.activo', 1)
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'departamentos' => $departamentos], 200);
    }

    function getDepartamentosAdmin(): JsonResponse
    {
        $departamentos = Departamento::from('departamentos as d')
            ->with([
                'directores' => function ($query) {
                    return $query->select(
                        'users.id',
                        'users.apellidos',
                        'users.nombres',
                        'users.dni',
                        'ad.maxima_autoridad',
                        'departamento_director.referencia_documento'
                    );
                }
            ])
            ->selectRaw('d.id, d.nombre_departamento,
                                d.siglas, d.extension, d.activo,
                                i.nombre_institucion, ac.nombre_acronimo, ac.siglas as acronimo')
            ->join('instituciones as i', 'i.id', 'd.institucion_id')
            ->join('acronimos as ac', 'ac.id', 'd.acronimo_id')
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'departamentos' => $departamentos], 200);
    }

    function getDepartamentosxInstitucion(Request $request): JsonResponse
    {
        $departamentos = Departamento::from('departamentos as d')
            ->selectRaw('d.id, d.nombre_departamento, d.siglas, d.extension')
            ->join('instituciones as i', 'i.id', 'd.institucion_id')
            ->where('i.id', $request->institucion_id)
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'departamentos' => $departamentos], 200);
    }

    function store(DepartamentoRequest $request): JsonResponse
    {
        try {
            Departamento::create($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(DepartamentoRequest $request, int $id): JsonResponse
    {
        $departamento = Departamento::find($id);

        if ($departamento) {
            $departamento->update($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
        } else {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
        }
    }

    function updateActivo(DepartamentoStatus $request, int $id): JsonResponse
    {
        $departamento = Departamento::find($id);

        if ($departamento) {
            $departamento->update($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
        } else {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
        }
    }

    function addDirectores(AddDirectoresRequest $request, int $id): JsonResponse
    {
        $departamento = Departamento::find($id);

        try {
            if ($departamento) {
                $departamento->directores()->attach(
                    $request->director,
                    [
                        'periodo_id'    => $request->periodo,
                        'referencia_documento' => $request->referencia_documento,
                    ]
                );
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    /* Ejecutarlo no es necesario - no es necesidad eliminar nada */

    function destroy(int $id): JsonResponse
    {
        $departamento = Departamento::find($id);

        if ($departamento) {
            $departamento->delete();
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
        } else {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
        }
    }
}
