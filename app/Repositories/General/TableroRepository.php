<?php

namespace App\Repositories\General;

use App\Http\Requests\TableroRequest;
use App\Interfaces\General\TableroInterface;
use App\Models\Tablero;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class TableroRepository implements TableroInterface
{
    private $model;

    public function __construct()
    {
        $this->model = new Tablero();
    }

    function getTableros(Request $request): Collection
    {
        $tableros = $this->model::from('tableros as t')
        ->selectRaw('t.id, t.nombre_tablero, t.codigo_tablero,
                             t.anio, t.descripcion,
                            d.nombre_departamento,
                            a.inicio_periodo, a.fin_periodo')
        ->join('departamentos as d', 'd.id', 't.departamento_id')
        ->join('administrativos as a', 'a.id', 't.administrativo_id')
        ->byAdministrativoId($request->administrativo_id)
        ->byDepartamentoId($request->departamento_id)
        ->get();

        return $tableros;
    }

    function store(TableroRequest $request): void
    {
        $this->model::create($request->validated());
    }

    function update(TableroRequest $request, Tablero $tablero): void
    {
        $tablero->update($request->validated());
    }

    function destroy(Tablero $tablero): void
    {
        $tablero->delete();
    }

    function findById(int $id): Tablero | null
    {
        $tablero = $this->model::find($id);
        if ($tablero) {
            return $tablero;
        }
        return null;
    }
}
