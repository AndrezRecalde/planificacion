<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\TrimestreRequest;
use App\Http\Requests\TrimestreStatusRequest;
use App\Models\Trimestre;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TrimestreController extends Controller
{
    function getTrimestres(): JsonResponse
    {
        $trimestres = Trimestre::get(['id', 'nombre_trimestre']);

        return response()->json([
            'status' => HTTPStatus::Success,
            'trimestres' => $trimestres
        ]);
    }

    function store(TrimestreRequest $request): JsonResponse
    {
        try {
            Trimestre::create($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(TrimestreRequest $request, int $id): JsonResponse
    {
        $trimestre = Trimestre::find($id);
        try {
            $trimestre->update($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function updateStatus(TrimestreStatusRequest $request, int $id): JsonResponse
    {
        $trimestre = Trimestre::find($id);
        try {
            $trimestre->update($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function destroy(int $id): JsonResponse
    {
        $trimestre = Trimestre::find($id);
        try {
            $trimestre->delete();
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
