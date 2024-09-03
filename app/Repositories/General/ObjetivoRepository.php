<?php

namespace App\Repositories\General;

use App\Http\Requests\ObjetivoRequest;
use App\Http\Requests\ObjetivoStatus;
use App\Interfaces\General\ObjetivoInterface;
use App\Models\Objetivo;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class ObjetivoRepository implements ObjetivoInterface
{

    private $model;

    public function __construct()
    {
        $this->model = new Objetivo();
    }

    function getObjetivoExist(Request $request): Collection
    {
        $objetivos = $this->model::from('objetivos as o')
            ->selectRaw('o.id, o.nombre_objetivo')
            ->when($request->departamento_id, function ($query) use ($request) {
                $query->whereHas('departamentos', function ($q) use ($request) {
                    $q->where('departamento_id', $request->departamento_id);
                });
            })
            ->get();

        return $objetivos;
    }

    function getObjetivos(Request $request): Collection
    {

        $objetivos = $this->model::from('objetivos as o')
            ->selectRaw('o.id, o.nombre_objetivo,
                         o.lestrategiapdot_id, le.linea_estrategica,
                         li.id as lineapdot_id, li.nombre_linea,
                         o.competenciapdot_id, co.nombre_competencia,
                         o.earticulacion_id, ea.nombre_articulacion,
                         o.metapdot_id, me.nombre_meta as metapdot,
                         o.competencia_id, comp.nombre_competencia,
                         o.rmedicion_id, rm.nombre_departamento as responsable_medicion,
                         o.anio_cumplimiento, o.linea_base,
                         o.anio_lbase, o.activo')
            ->with([
                'odssostenibles', 'opndesarrollos', 'departamentos'
            ])
            ->join('lestrategiapdots as le', 'le.id', 'o.lestrategiapdot_id')
            ->join('lineapdots as li', 'li.id', 'le.lineapdot_id')
            ->join('competenciapdots as co', 'co.id', 'o.competenciapdot_id')
            ->join('earticulaciones as ea', 'ea.id', 'o.earticulacion_id')
            ->join('metapdots as me', 'me.id', 'o.metapdot_id')
            ->join('competencias as comp', 'comp.id', 'o.competencia_id')
            ->join('departamentos as rm', 'rm.id', 'o.rmedicion_id')
            ->when($request->departamento_id, function ($query) use ($request) {
                $query->whereHas('departamentos', function ($q) use ($request) {
                    $q->where('departamento_id', $request->departamento_id);
                });
            })
            ->byLestrategiapdotId($request->lestrategiapdot_id)
            ->byCompetenciapdotId($request->competenciapdot_id)
            ->anio($request->anio_cumplimiento)
            ->get();

        return $objetivos;
    }

    function store(ObjetivoRequest $request): void
    {
        $objetivo = $this->model::create($request->validated());
        $objetivo->departamentos()->attach($request->departamentos);
        $objetivo->opndesarrollos()->attach($request->opndesarrollos);
    }

    function update(ObjetivoRequest $request, Objetivo $objetivo): void
    {
        $objetivo->update($request->validated());

        if ($request->filled('departamentos')) {
            $objetivo->departamentos()->detach();
            $objetivo->departamentos()->sync($request->departamentos);
        }

        if ($request->filled('opndesarrollos')) {
            $objetivo->opndesarrollos()->detach();
            $objetivo->componentes()->sync($request->opndesarrollos);
        }
    }

    function updateActivo(ObjetivoStatus $request, Objetivo $objetivo): void
    {
        $objetivo->update($request->validated());
    }

    function destroy(Objetivo $objetivo): void
    {
        $objetivo->delete();
    }

    function findById(int $id): Objetivo | null
    {
        $objetivo = $this->model::find($id);
        if ($objetivo) {
            return $objetivo;
        }
        return null;
    }
}
