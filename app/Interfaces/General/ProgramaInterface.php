<?php

namespace App\Interfaces\General;

use App\Http\Requests\ProgramaRequest;
use App\Http\Requests\ProgramaStatus;
use App\Models\Programa;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

interface ProgramaInterface
{

    function getProgramas(Request $request): Collection;
    function store(ProgramaRequest $request): void;
    function update(ProgramaRequest $request, Programa $programa): void;
    function updateActivo(ProgramaStatus $request, Programa $programa): void;
    function destroy(Programa $programa): void;
    function findById(int $id) : Programa | null;
}
