<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\InstrumentoRequest;
use App\Models\Instrumento;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class InstrumentoController extends Controller
{
    function getInstrumentos(Request $request): JsonResponse
    {
        $instrumentos = Instrumento::where('instrumento.fecha_inicio', $request->fecha_inicio)
                        ->get(['id', 'nombre_archivo', 'archivo', 'fecha_inicio', 'fecha_fin']);

        return response()->json(['status' => HTTPStatus::Success, 'instrumentos' => $instrumentos], 200);
    }

    function store(InstrumentoRequest $request): JsonResponse
    {
        try {
            $instrumento = Instrumento::create($request->validated());

            $archivo = $request->file('archivo');
            $filename = 'archivo_' . uniqid() . '.' . $archivo->getClientOriginalExtension();
            $save_path = '/instrumentos/archivos/' . date('Y') . '/';
            $public_path = $save_path . $filename;
            $path = Storage::putFileAs(
                'public' . $save_path,
                $archivo,
                $filename
            );
            if (!$path) {
                DB::rollBack();
                return response()->json(['status' => HTTPStatus::Error, 'msg' => 'Error al cargar el archivo'], 500);
            }
            $instrumento->archivo = $public_path;
            $instrumento->save();
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(InstrumentoRequest $request, int $id): JsonResponse
    {
        $instrumento = Instrumento::find($id);

        try {
            if ($instrumento) {
                if ($request->hasFile('archivo')) {
                    if ($instrumento->archivo) {
                        Storage::disk('public')->delete($instrumento->archivo);
                    }
                    $instrumento->fill($request->validated());
                    $archivo = $request->file('archivo');
                    $filename = 'archivo_' . uniqid() . '.' . $archivo->getClientOriginalExtension();
                    $save_path = '/instrumentos/archivos/' . date('Y') . '/';
                    $public_path = $save_path . $filename;
                    $path = Storage::putFileAs(
                        'public' . $save_path,
                        $archivo,
                        $filename
                    );
                    if (!$path) {
                        DB::rollBack();
                        return response()->json(['status' => HTTPStatus::Error, 'msg' => 'Error al cargar el archivo'], 500);
                    }
                    $instrumento->archivo = $public_path;
                    $resp = $instrumento->save();
                } else {
                    $resp = $instrumento->update(array_filter($request->validated()));
                }
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
            if ($resp) {
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => 'Error en el servidor'], 500);
            }
        } catch (\Throwable $th) {
            DB::rollback();
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function destroy(int $id): JsonResponse
    {
        $instrumento = Instrumento::find($id);
        try {
            if ($instrumento) {
                $instrumento->delete();
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
