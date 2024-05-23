<?php

namespace App\Http\Controllers\Admin;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\InstitucionRequest;
use App\Http\Requests\InstitucionStatus;
use App\Models\Institucion;
use Illuminate\Http\JsonResponse;

class InstitucionController extends Controller
{
    function getInstitucionesAdmin(): JsonResponse
    {
        //$this->authorize('viewAdmin', Institucion::class);

        $instituciones = Institucion::from('instituciones as i')
            ->selectRaw('i.id, i.nombre_institucion, i.siglas,
                         i.ruc, i.activo, i.telefono, g.tipo_gad')
            ->join('gads as g', 'g.id', 'i.gad_id')
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'instituciones' => $instituciones], 200);
    }

    function getInstituciones(): JsonResponse
    {
        //$this->authorize('viewAny', Institucion::class);
        $instituciones = Institucion::from('instituciones as i')
            ->selectRaw('i.id, i.nombre_institucion, i.siglas,
                     i.ruc, i.telefono, g.tipo_gad')
            ->join('gads as g', 'g.id', 'i.gad_id')
            ->where('i.activo', 1)
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'instituciones' => $instituciones], 200);
    }

    function store(InstitucionRequest $request): JsonResponse
    {
        //$this->authorize('create', Institucion::class);
        try {
            Institucion::create($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(InstitucionRequest $request, int $id): JsonResponse
    {
        //$this->authorize('update', Institucion::class);
        $institucion = Institucion::find($id);

        try {
            $institucion->update($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function updateActivo(InstitucionStatus $request, int $id): JsonResponse
    {
        //$this->authorize('update', Institucion::class);
        $institucion = Institucion::find($id);

        if ($institucion) {
            $institucion->update($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
        } else {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
        }
    }

    /* Ejecutarlo no es necesario - no es necesidad eliminar nada */
    function destroy(int $id): JsonResponse
    {
        //$this->authorize('delete', Institucion::class);
        $institucion = Institucion::find($id);

        if ($institucion) {
            $institucion->delete();
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
        } else {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
        }
    }
}
