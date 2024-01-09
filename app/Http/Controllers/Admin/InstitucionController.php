<?php

namespace App\Http\Controllers\Admin;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\InstitucionRequest;
use App\Http\Requests\InstitucionStatus;
use App\Models\Institucion;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class InstitucionController extends Controller
{
    function getInstitucionesAdmin(): JsonResponse
    {
        $instituciones = Institucion::from('instituciones as i')
            ->selectRaw('i.id, i.nombre_institucion, i.siglas,
                         i.ruc, i.activo, i.telefono, i.logo_url,
                         g.tipo_gad')
            ->join('gads as g', 'g.id', 'i.gad_id')
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'instituciones' => $instituciones], 200);
    }

    function getInstituciones(): JsonResponse
    {
        $instituciones = Institucion::from('instituciones as i')
            ->selectRaw('i.id, i.nombre_institucion, i.siglas,
                     i.ruc, i.telefono, i.logo_url,
                     g.tipo_gad')
            ->join('gads as g', 'g.id', 'i.gad_id')
            ->where('i.activo', 1)
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'instituciones' => $instituciones], 200);
    }

    function store(InstitucionRequest $request): JsonResponse
    {
        try {
            $institucion = Institucion::create($request->validated());

            if ($request->hasFile('logo_url')) {
                $institucion->logo_url = $request->file('logo_url');
                $filename = $institucion->logo_url->getClientOriginalName();
                $save_path = '/app/logo/';
                $public_path = $save_path . $filename;
                $path = Storage::putFileAs(
                    'public' . $save_path,
                    $institucion->logo_url,
                    $filename
                );

                if (!$path) {
                    DB::rollback();
                    return response()->json(['status' => HTTPStatus::Error, 'msg' => 'Error al Actualizar'], 500);
                }
                $institucion->logo_url = $public_path;
                $resp = $institucion->save();
            } else {
                $resp = $institucion->update(array_filter($request->validated()));
            }

            if ($resp) {
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(InstitucionRequest $request, int $id): JsonResponse
    {
        $institucion = Institucion::find($id);

        try {
            if ($institucion) {

                if ($request->hasFile('logo_url')) {
                    $filename = $institucion->logo_url;

                    if ($filename) {
                        Storage::disk('public')->delete($filename);
                    }

                    $institucion->fill($request->validated());
                    $institucion->logo_url = $request->file('logo_url');
                    $filename = $institucion->logo_url->getClientOriginalName();
                    $save_path = '/app/logo/';
                    $public_path = $save_path . $filename;
                    $path = Storage::putFileAs(
                        'public' . $save_path,
                        $institucion->logo_url,
                        $filename
                    );

                    if (!$path) {
                        DB::rollback();
                        return response()->json(['status' => HTTPStatus::Error, 'msg' => 'Error al Actualizar'], 500);
                    }

                    $institucion->logo_url = $public_path;
                    $resp = $institucion->save();
                } else {
                    $resp = $institucion->update(array_filter($request->validated()));
                }
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }

            if ($resp) {
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function updateActivo(InstitucionStatus $request, int $id): JsonResponse
    {
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
        $institucion = Institucion::find($id);

        if ($institucion) {
            $imagePath = (storage_path('app/public') . (string) $institucion->logo_url);
            unlink($imagePath);
            $institucion->delete();
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
        } else {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
        }
    }
}
