<?php

namespace App\Repositories\General;

use App\Http\Requests\ProveedorRequest;
use App\Interfaces\General\ProveedorInterface;
use App\Models\Proveedor;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class ProveedorRepository implements ProveedorInterface
{

    private $model;

    public function __construct()
    {
        $this->model = new Proveedor();
    }
    function getProveedores(Request $request): Collection
    {
        $proveedores = $this->model::from('proveedores as prov')
            ->selectRaw('prov.id, prov.nombre_proveedor,
                                    prov.ruc, prov.telefono, d.nombre_departamento')
            ->join('departamentos as d', 'd.id', 'prov.departamento_id')
            ->byDepartamentoId($request->departamento_id)
            ->get();

        return $proveedores;
    }

    function store(ProveedorRequest $request): void
    {
        $this->model::create($request->validated());
    }

    function update(ProveedorRequest $request, Proveedor $proveedor): void
    {
        $proveedor->update($request->validated());
    }

    function destroy(Proveedor $proveedor): void
    {
        $proveedor->delete();
    }

    function findById(int $id): Proveedor | null
    {
        $proveedor = $this->model::find($id);
        if ($proveedor) {
            return $proveedor;
        }
        return null;
    }
}
