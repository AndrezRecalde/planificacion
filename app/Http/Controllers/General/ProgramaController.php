<?php

namespace App\Http\Controllers\General;

use App\Enums\HTTPStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProgramaRequest;
use App\Http\Requests\ProgramaStatus;
use App\Models\Programa;
use App\Repositories\General\ProgramaRepository;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Http;

class ProgramaController extends Controller
{
    private $programaRepository;

    public function __construct(ProgramaRepository $programaRepository) {
        $this->programaRepository = $programaRepository;
    }

    function getProgramasAdmin(): JsonResponse
    {
        $programas = Programa::from('programas as p')
            ->selectRaw('p.id, p.nombre_programa, p.codigo_programa, pt.nombre_planificacion, o.indicadorpdot')
            ->join('planificaciontipos as pt', 'pt.id', 'p.planificaciontipo_id')
            ->join('objetivos as o', 'o.id', 'p.objetivo_id')
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'programas' => $programas], 200);
    }

    function getProgramasActivosForGestion(Request $request): JsonResponse
    {
        $programas = Programa::from('programas as p')
            ->selectRaw('p.id, p.nombre_programa, p.codigo_programa, pt.nombre_planificacion, o.indicadorpdot, dep.nombre_departamento')
            ->join('planificaciontipos as pt', 'pt.id', 'p.planificaciontipo_id')
            ->join('objetivos as o', 'o.id', 'p.objetivo_id')
            ->join('objetivo_departamento as od', 'od.objetivo_id', 'o.id')
            ->join('departamentos as dep', 'dep.id', 'od.departamento_id')
            ->where('od.departamento_id', $request->departamento_id)
            ->where('p.activo', 1)
            ->get();

        return response()->json(['status' => HTTPStatus::Success, 'programas' => $programas], 200);
    }

    function store(ProgramaRequest $request): JsonResponse
    {
        try {
            $this->programaRepository->store($request);
            return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Created], 201);
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function update(ProgramaRequest $request, int $id): JsonResponse
    {
        $programa = $this->programaRepository->findById($id);
        try {
            if ($programa) {
                $this->programaRepository->update($request, $programa);
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }

    function updateActivo(ProgramaStatus $request, int $id): JsonResponse
    {
        $programa = $this->programaRepository->findById($id);
        try {
            if ($programa) {
                $this->programaRepository->updateActivo($request, $programa);
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
        $programa = $this->programaRepository->findById($id);
        try {
            if ($programa) {
                $this->programaRepository->destroy($programa);
                return response()->json(['status' => HTTPStatus::Success, 'msg' => HTTPStatus::Updated], 201);
            } else {
                return response()->json(['status' => HTTPStatus::Error, 'msg' => HTTPStatus::NotFound], 404);
            }
        } catch (\Throwable $th) {
            return response()->json(['status' => HTTPStatus::Error, 'msg' => $th->getMessage()], 500);
        }
    }
}
