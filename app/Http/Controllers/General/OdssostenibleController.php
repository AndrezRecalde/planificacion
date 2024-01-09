<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\OdsRequest;
use App\Models\Odssostenible;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class OdssostenibleController extends Controller
{
    function getObjetivosODS(): JsonResponse
    {
        $ods = Odssostenible::from('odssostenibles as ods')
            ->selectRaw('ods.id, ods.nombre_ods, ods.descripcion_ods,
                            ods.imagen_url')
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'ods' => $ods], 200);
    }

    function store(OdsRequest $request): JsonResponse
    {
        try {
            $ods = Odssostenible::create($request->validated());

            if ($request->file('imagen_url')) {
                $ods->imagen_url = $request->file('imagen_url');
                $filename = str_replace(' ', '', $request->nombre_ods);
                $extension = pathinfo($ods->imagen_url->getClientOriginalName(), PATHINFO_EXTENSION);
                $save_path = '/ods/logos/';
                $public_path = $save_path . Str::lower($filename) . "." . $extension;
                $path = Storage::putFileAs(
                    'public' . $save_path,
                    $ods->imagen_url,
                    Str::lower($filename) . "." . $extension
                );
                if (!$path) {
                    DB::rollback();
                    return response()->json(['status' => HTTPStatus::Error, 'msg' => 'Error al cargar el archivo'], 500);
                }
                $ods->imagen_url = $public_path;
                $ods->save();
            }
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(OdsRequest $request, int $id): JsonResponse
    {
        $ods = Odssostenible::find($id);

        try {
            if ($ods) {
                if ($request->hasFile('imagen_url')) {
                    $filename = $ods->imagen_url;
                    if ($filename) {
                        Storage::disk('public')->delete($filename);
                    }

                    $ods->fill($request->validated());
                    $ods->imagen_url = $request->file('imagen_url');
                    $filename = str_replace(' ', '', $request->nombre_ods);
                    $extension = pathinfo($ods->imagen_url->getClientOriginalName(), PATHINFO_EXTENSION);
                    $save_path = '/ods/logos/';
                    $public_path = $save_path . Str::lower($filename) . "." . $extension;
                    $path = Storage::putFileAs(
                        'public' . $save_path,
                        $ods->imagen_url,
                        Str::lower($filename) . "." . $extension
                    );
                    if (!$path) {
                        DB::rollback();
                        return response()->json(['status' => HTTPStatus::Error, 'msg' => 'Error al cargar el archivo'], 500);
                    }
                    $ods->imagen_url = $public_path;
                    $resp = $ods->save();
                } else {
                    $resp = $ods->update(array_filter($request->validated()));
                }
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }

            if ($resp) {
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            }
        } catch (\Throwable $th) {
            DB::rollback();
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function destroy(int $id): JsonResponse
    {
        $ods = Odssostenible::find($id);

        try {
            if ($ods) {
                $ods->delete();
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            DB::rollback();
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
