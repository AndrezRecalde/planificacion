<?php

namespace App\Interfaces\General;

use App\Http\Requests\ProgramaRequest;
use App\Http\Requests\ProgramaStatus;
use App\Models\Programa;
use Illuminate\Database\Eloquent\Collection;

interface ProgramaInterface
{

    function getProgramas(): Collection;
    function store(ProgramaRequest $request): void;
    function update(ProgramaRequest $request, Programa $programa): void;
    function updateActivo(ProgramaStatus $request, Programa $programa): void;
    function destroy(Programa $programa): void;
    function findById(int $id) : Programa | null;
}
