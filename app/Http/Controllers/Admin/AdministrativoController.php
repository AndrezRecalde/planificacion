<?php

namespace App\Http\Controllers\Admin;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\AdministrativoActivo;
use App\Http\Requests\AdministrativoRequest;
use App\Models\Administrativo;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class AdministrativoController extends Controller
{
    function getAdministrativosAdmin(Request $request): JsonResponse
    {
        //$this->authorize("viewAdmin", Administrativo::class);
        $administrativos = Administrativo::from('administrativos as a')
            ->selectRaw('a.id, a.inicio_periodo, a.fin_periodo,
                         a.maxima_autoridad, a.activo,
                        i.nombre_institucion, a.logo_url')
            ->join('instituciones as i', 'i.id', 'a.institucion_id')
            ->institucion($request->institucion_id)
            ->get();
        return response()->json(['status' => HTTPStatus::Success, 'administrativos' => $administrativos], 200);
    }

    function getAdministrativos(Request $request): JsonResponse
    {
        $administrativos = Administrativo::from('administrativos as a')
            ->selectRaw('a.id, a.inicio_periodo, a.fin_periodo,
                         a.maxima_autoridad, a.activo,
                        i.nombre_institucion, a.logo_url')
            ->join('instituciones as i', 'i.id', 'a.institucion_id')
            ->where('a.activo', 1)
            ->institucion($request->institucion_id)
            ->get();
        return response()->json(['status' => HTTPStatus::Success, 'administrativos' => $administrativos], 200);
    }

    function store(AdministrativoRequest $request): JsonResponse
    {
        //$this->authorize("create", Administrativo::class);
        try {
            $administrativo = Administrativo::create($request->validated());

            if ($request->hasFile('logo_url')) {
                $administrativo->logo_url = $request->file('logo_url');
                $filename = $administrativo->logo_url->getClientOriginalName();
                $save_path = '/app/logo/';
                $public_path = $save_path . $filename;
                $path = Storage::putFileAs(
                    'public' . $save_path,
                    $administrativo->logo_url,
                    $filename
                );

                if (!$path) {
                    DB::rollBack();
                    return response()->json(['status' => HTTPStatus::Error, 'msg' => 'Error al crear'], 500);
                }
                $administrativo->logo_url = $public_path;
                $resp = $administrativo->save();
            } else {
                $resp = $administrativo->update(array_filter($request->validated()));
            }

            if ($resp) {
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => 'Error al crear'], 500);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(AdministrativoRequest $request, int $id): JsonResponse
    {
        //$this->authorize("update", Administrativo::class);
        $administrativo = Administrativo::find($id);

        try {
            if ($administrativo) {
                if ($request->hasFile('logo_url')) {
                    $filename = $administrativo->logo_url;
                    if ($filename) {
                        Storage::disk('public')->delete($filename);
                    }
                    $administrativo->fill($request->validated());
                    $administrativo->logo_url = $request->file('logo_url');
                    $filename = $administrativo->logo_url->getClientOriginalName();
                    $save_path = '/app/logo/';
                    $public_path = $save_path . $filename;
                    $path = Storage::putFileAs(
                        'public' . $save_path,
                        $administrativo->logo_url,
                        $filename
                    );

                    if (!$path) {
                        DB::rollBack();
                        return response()->json(['status' => HTTPStatus::Error, 'msg' => 'Error al Actualizar'], 500);
                    }
                    $administrativo->logo_url = $public_path;
                    $resp = $administrativo->save();
                } else {
                    $resp = $administrativo->update(array_filter($request->validated()));
                }
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
            if ($resp) {
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => 'Error al Actualizar'], 500);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function updateActivo(AdministrativoActivo $request, int $id): JsonResponse
    {
        //$this->authorize('update', Administrativo::class);
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
        //$this->authorize('delete', Administrativo::class);
        $administrativo = Administrativo::find($id);

        if ($administrativo) {
            $imagePath = (storage_path('app/public') . (string) $administrativo->logo_url);
            unlink($imagePath);
            $administrativo->delete();
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
        } else {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
        }
    }
}
