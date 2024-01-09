<?php

namespace App\Http\Controllers\Admin;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\AcronimoRequest;
use App\Models\Acronimo;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AcronimoController extends Controller
{
    function getAcronimos(): JsonResponse
    {
        $acronimos = Acronimo::get(['id', 'nombre_acronimo', 'siglas']);
        return response()->json(['status' => HTTPStatus::Success, 'acronimos' => $acronimos], 200);
    }

    function store(AcronimoRequest $request): JsonResponse
    {
        try {
            Acronimo::create($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(AcronimoRequest $request, int $id): JsonResponse
    {
        $acronimo = Acronimo::find($id);

        if ($acronimo) {
            $acronimo->update($request->validated());
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
        } else {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
        }
    }

    function destroy(int $id): JsonResponse
    {
        $acronimo = Acronimo::find($id);

        if ($acronimo) {
            $acronimo->delete();
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
        } else {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
        }
    }
}
