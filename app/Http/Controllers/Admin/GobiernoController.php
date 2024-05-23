<?php

namespace App\Http\Controllers\Admin;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\GobiernoRequest;
use App\Http\Requests\GobiernoStatus;
use App\Models\Gobierno;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class GobiernoController extends Controller
{
    function getGobiernosAdmin(): JsonResponse
    {
        //$this->authorize("viewAdmin", Gobierno::class);
        $gobiernos = Gobierno::with('ejes')->get();

        return response()->json(['status' => HTTPStatus::Success, 'gobiernos' => $gobiernos], 200);
    }

    function getGobiernoActivoWithEjesAndOPN(): JsonResponse
    {
        //$this->authorize("viewAny", Gobierno::class);
        $gobiernos = Gobierno::with([
                                'ejes',
                                'opndesarrollos' => function($query) {
                                    $query->with('eje');
                                }
                                ])
                            ->where('activo', 1)
                            ->latest()->get();

        return response()->json(['status' => HTTPStatus::Success, 'gobiernos' => $gobiernos], 200);
    }

    function store(GobiernoRequest $request): JsonResponse
    {
        //$this->authorize("create", Gobierno::class);
        try {
            $gobierno = Gobierno::create($request->validated());
            $gobierno->ejes()->attach($request->ejes);
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            DB::rollback();
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(GobiernoRequest $request, int $id): JsonResponse
    {
        //$this->authorize("update", Gobierno::class);
        $gobierno = Gobierno::find($id);

        try {
            if ($gobierno) {
                $gobierno->update($request->validated());

                if ($request->filled('ejes')) {
                    $gobierno->ejes()->detach();
                    $gobierno->ejes()->sync($request->ejes);
                }

                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            DB::rollback();
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function updateActivo(GobiernoStatus $request, int $id): JsonResponse
    {
        //$this->authorize("update", Gobierno::class);
        $gobierno = Gobierno::find($id);

        try {
            if ($gobierno) {
                $gobierno->update($request->validated());
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            DB::rollback();
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function destroy(int $id): JsonResponse
    {
        //$this->authorize("delete", Gobierno::class);
        $gobierno = Gobierno::find($id);

        try {
            if ($gobierno) {
                $gobierno->delete();
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Deleted], 200);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            DB::rollback();
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
