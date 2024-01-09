<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Models\Planificaciontipo;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PlanificaciontipoController extends Controller
{
    function getTiposPlanificaciones(): JsonResponse
    {
        $tipos = Planificaciontipo::get(['id', 'nombre_planificacion']);

        return response()->json(['status' => HTTPStatus::Success, 'tipos' => $tipos], 200);
    }

}
