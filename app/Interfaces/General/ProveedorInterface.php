<?php

namespace App\Interfaces\General;

use App\Http\Requests\ProveedorRequest;
use App\Models\Proveedor;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

interface ProveedorInterface {
    function getProveedores(Request $request): Collection;
    function store(ProveedorRequest $request): void;
    function update(ProveedorRequest $request, Proveedor $proveedor): void;
    function destroy(Proveedor $proveedor): void;
}
