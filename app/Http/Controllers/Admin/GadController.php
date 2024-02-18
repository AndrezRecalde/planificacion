<?php

namespace App\Http\Controllers\Admin;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\GadRequest;
use App\Models\Gad;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class GadController extends Controller
{
    function getGADS(): JsonResponse
    {
        //$this->authorize("view", Gad::class);
        $gads = Gad::get(['id', 'tipo_gad']);

        return response()->json(['status' => HTTPStatus::Success, 'gads' => $gads], 200);
    }

    function store(GadRequest $request): JsonResponse
    {
        //$this->authorize("create", Gad::class);
        try {
            Gad::create($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(GadRequest $request, int $id): JsonResponse
    {
        //$this->authorize("update", Gad::class);
        $gad = Gad::find($id);
        if ($gad) {
            $gad->update($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
        } else {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
        }
    }

    function destroy(int $id): JsonResponse
    {
        //$this->authorize("delete", Gad::class);
        $gad = Gad::find($id);

        if ($gad) {
            $gad->delete();
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
        } else {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
        }
    }
}
