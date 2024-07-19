<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\ComponentepdotRequest;
use App\Http\Requests\ComponentepdotStatus;
use App\Models\Componentepdot;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ComponentepdotController extends Controller
{
    function getComponentes(Request $request): JsonResponse
    {
        $componentespdot = Componentepdot::from('componentepdots as compo')
            ->selectRaw('compo.id, compo.nombre_componente, compo.activo')
            ->activo($request->activo)
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'componentespdot' => $componentespdot], 200);
    }

    function store(ComponentepdotRequest $request): JsonResponse
    {
        try {
            Componentepdot::create($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(ComponentepdotRequest $request, int $id): JsonResponse
    {
        $componente = Componentepdot::find($id);
        try {
            if ($componente) {
                $componente->update($request->validated());
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function updateStatus(ComponentepdotStatus $request, int $id): JsonResponse
    {
        $componente = Componentepdot::find($id);
        try {
            if ($componente) {
                $componente->update($request->validated());
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
        $componente = Componentepdot::find($id);
        try {
            if ($componente) {
                $componente->delete();
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
