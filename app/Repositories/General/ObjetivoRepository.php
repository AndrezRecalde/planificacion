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

    function getObjetivos(Request $request): Collection
    {

        $objetivos = $this->model::from('objetivos as o')
            ->selectRaw('o.*, li.nombre_linea, le.linea_estrategica,
                     co.nombre_competencia, compo.nombre_componente, ge.nombre_departamento,
                     oe.objetivo_pdot, ea.nombre_articulacion, me.nombre_meta,
                     comp.nombre_competencia, oep.objetivo_pei')
            ->join('lestrategiapdots as le', 'le.id', 'o.lestrategiapdot_id')
            ->join('lineapdots as li', 'li.id', 'le.lineapdot_id')
            ->join('competenciapdots as co', 'co.id', 'o.competenciapdot_id')
            ->join('componentepdots as compo', 'compo.id', 'o.componentepdot_id')
            ->join('departamentos as ge', 'ge.id', 'o.gestionpdot_id')  //Reemplaza Gestionpdot por Departamento
            ->join('oepdots as oe', 'oe.id', 'o.oepadot_id')
            ->join('earticulaciones as ea', 'ea.id', 'o.earticulacion_id')
            ->join('metapdots as me', 'me.id', 'o.metapdot_id')
            ->join('competencias as comp', 'comp.id', 'o.competencia_id')
            ->join('oepeis as oep', 'oep.id', 'o.oepei_id')
            ->byDepartamentoId($request->departamento_id)
            ->byLestrategiapdotId($request->lestrategiapdot_id)
            ->byCompetenciapdotId($request->competenciapdot_id)
            ->byComponentepdotId($request->componentepdot_id)
            ->get();

        return $objetivos;
    }

    function store(ObjetivoRequest $request): void
    {
        $objetivo = $this->model::create($request->validated());
        $objetivo->departamentos()->attach($request->departamentos);
    }

    function update(ObjetivoRequest $request, Objetivo $objetivo): void
    {
        $objetivo->update($request->validated());

        if ($request->filled('departamentos')) {
            $objetivo->departamentos()->detach();
            $objetivo->departamentos()->sync($request->departamentos);
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
