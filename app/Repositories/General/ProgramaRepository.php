<?php

namespace App\Repositories\General;

use App\Http\Requests\ProgramaRequest;
use App\Http\Requests\ProgramaStatus;
use App\Interfaces\General\ProgramaInterface;
use App\Models\Programa;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class ProgramaRepository implements ProgramaInterface
{

    private $model;

    public function __construct()
    {
        $this->model = new Programa();
    }

    function getProgramas(Request $request): Collection
    {

        $programas = $this->model::from('programas as p')
            ->selectRaw('p.id, p.nombre_programa, p.codigo_programa, pt.nombre_planificacion, o.nombre_objetivo')
            ->join('planificaciontipos as pt', 'pt.id', 'p.planificaciontipo_id')
            ->join('objetivos as o', 'o.id', 'p.objetivo_id')
            ->byDepartamentoId($request->departamento_id)
            ->codigo($request->codigo_programa)
            ->byPlanificacionId($request->planificaciontipo_id)
            ->get();

        return $programas;
    }

    function store(ProgramaRequest $request): void
    {

        $programa = $this->model::create($request->validated());
        $programa->departamentos()->attach($request->departamentos);

        $codigoComponente = Programa::from('programas as p')
            ->selectRaw('p.id, comp.nombre_componente')
            ->join('objetivos as o', 'o.id', 'p.objetivo_id')
            ->join('componentepdots as comp', 'comp.id', 'o.componentepdot_id')
            ->where('p.id', $programa->id)
            ->first();
        $programa->codigo_programa = 'PROG-' . Str::of(Str::upper(Str::substr($codigoComponente->nombre_componente, 2, 4)))->trim() . '-' . $programa->id;
        $programa->save();
    }

    function update(ProgramaRequest $request, Programa $programa): void
    {
        $programa->update($request->validated());

        if ($request->filled('departamentos')) {
            $programa->departamentos()->detach();
            $programa->departamentos()->sync($request->departamentos);
        }
    }

    function updateActivo(ProgramaStatus $request, Programa $programa): void
    {
        $programa->update($request->validated());
    }

    function destroy(Programa $programa): void
    {
        $programa->delete();
        //$programa->departamentos()->detach();
    }

    function findById(int $id): Programa | null
    {
        $programa = $this->model::find($id);
        if ($programa) {
            return $programa;
        }
        return null;
    }
}
