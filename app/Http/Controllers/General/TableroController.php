<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\TableroRequest;
use App\Models\Tablero;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TableroController extends Controller
{
    function getTableros(Request $request): JsonResponse
    {
        $tableros = Tablero::from('tableros as t')
            ->selectRaw('t.id, t.nombre_tablero, t.codigo_tablero,
                                 t.anio, t.descripcion,
                                d.nombre_departamento,
                                a.inicio_periodo, a.fin_periodo')
            ->join('departamentos as d', 'd.id', 't.departamento_id')
            ->join('administrativos as a', 'a.id', 't.administrativo_id')
            ->byAdministrativoId($request->administrativo_id)
            ->byDepartamentoId($request->departamento_id)
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'tableros' => $tableros], 200);
    }

    function store(TableroRequest $request): JsonResponse
    {
        try {
            Tablero::create($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(TableroRequest $request, int $id): JsonResponse
    {
        $tablero = Tablero::find($id);
        try {
            if ($tablero) {
                $tablero->update($request->validated());
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
        $tablero = Tablero::find($id);
        try {
            if ($tablero) {
                $tablero->delete();
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
