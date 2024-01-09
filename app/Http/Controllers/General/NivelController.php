<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Models\Nivel;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class NivelController extends Controller
{
    function getNiveles(): JsonResponse
    {
        $niveles = Nivel::get(['id', 'nombre_nivel']);

        return response()->json(['status' => HTTPStatus::Success, 'niveles' => $niveles], 200);
    }
}
