<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProveedorRequest;
use App\Repositories\General\ProveedorRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProveedorController extends Controller
{
    private $proveedorRepository;
    public function __construct(ProveedorRepository $proveedorRepository)
    {
        $this->proveedorRepository = $proveedorRepository;
    }

    function getProveedores(Request $request): JsonResponse
    {
        //$this->authorize("viewAdmin", Proveedor::class);
        $proveedores = $this->proveedorRepository->getProveedores($request);

        return response()->json(['status' => HTTPStatus::Success, 'proveedores' => $proveedores], 200);
    }

    function store(ProveedorRequest $request): JsonResponse
    {
        try {
            $this->proveedorRepository->store($request);
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(ProveedorRequest $request, int $id): JsonResponse
    {
        $proveedor = $this->proveedorRepository->findById($id);
        //$this->authorize("update", $proveedor);
        try {
            if ($proveedor) {
                $this->proveedorRepository->update($request, $proveedor);
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
        $proveedor = $this->proveedorRepository->findById($id);
        try {
            if ($proveedor) {
                $this->proveedorRepository->destroy($proveedor);
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
