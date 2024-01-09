<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Models\Tipoproyecto;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TipoproyectoController extends Controller
{
    function getTiposProyectos(): JsonResponse
    {
        $tipos = Tipoproyecto::get(['id', 'tipo_proyecto']);

        return response()->json(['status' => HTTPStatus::Success, 'tipos' => $tipos], 200);
    }
}
