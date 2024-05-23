<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProveedorRequest;
use App\Models\Proveedor;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProveedorController extends Controller
{
    function getProveedores(): JsonResponse
    {
        //$this->authorize("viewAdmin", Proveedor::class);
        $proveedores = Proveedor::get(['nombre_proveedor', 'ruc', 'telefono']);
        return response()->json(['status' => HTTPStatus::Success, 'proveedores' => $proveedores], 200);
    }

    function store(ProveedorRequest $request): JsonResponse
    {
        //$this->authorize("create", Proveedor::class);
        try {
            Proveedor::create($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(ProveedorRequest $request, int $id): JsonResponse
    {
        $proveedor = Proveedor::find($id);
        //$this->authorize("update", $proveedor);
        try {
            if ($proveedor) {
                $proveedor->update($request->validated());
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
        //$this->authorize("delete", Proveedor::class);
        $proveedor = Proveedor::find($id);
        try {
            if ($proveedor) {
                $proveedor->delete();
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
