<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\ActividadRequest;
use App\Http\Requests\ActividadStatus;
use App\Models\Actividad;
use App\Models\Tipoactividad;
use App\Models\Trimestre;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ActividadController extends Controller
{
    function getActividadesForProyecto(Request $request): JsonResponse
    {
        $actividades = Actividad::from('actividades as act')
            ->selectRaw('act.id, act.nombre_actividad, act.descripcion,
                         act.color, act.portada, act.ponderacion,
                         ta.id as tipoactividad_id, ta.tipo_actividad,
                         p.id as proyecto_id, p.nombre_proyecto')
            ->join('tipoactividades as ta', 'ta.id', 'a.tipoactividad_id')
            ->join('proyectos as p', 'p.id', 'act.proyecto_id')
            ->byProyectoId($request->proyecto_id)
            ->byTableroId($request->tablero_id)
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'actividades' => $actividades], 200);
    }

    function store(ActividadRequest $request): JsonResponse
    {
        DB::beginTransaction();
        try {
            $actividad = Actividad::create($request->validated());

            if ((int)$actividad->tipoactividad_id === 1) {
                $trimestres = Trimestre::where('activo', 1)->get();

                foreach ($trimestres as $trimestre) {

                    $actividad->actividadesfisicas()->attach([
                        'trimestre_id' => $trimestre->id,
                    ]);

                    $actividad->actividadesmonto()->attach([
                        'trimestre_id' => $trimestre->id,
                    ]);
                }
            }
            DB::commit();
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(ActividadRequest $request, int $id): JsonResponse
    {
        //$this->authorize('update', Actividad::class);
        $actividad = Actividad::find($id);
        try {
            if ($actividad) {
                $actividad->update($request->validated());
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
        //$this->authorize('delete', Actividad::class);
        $actividad = Actividad::find($id);
        try {
            if ($actividad) {
                $actividad->delete();
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
