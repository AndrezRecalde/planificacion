<?php

namespace App\Interfaces\General;

use App\Http\Requests\ObjetivoRequest;
use App\Http\Requests\ObjetivoStatus;
use App\Models\Objetivo;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

interface ObjetivoInterface
{
    function getObjetivoExist(Request $request): Collection;
    function getObjetivos(Request $request): Collection;
    function store(ObjetivoRequest $request): void;
    function update(ObjetivoRequest $request, Objetivo $objetivo): void;
    function updateActivo(ObjetivoStatus $request, Objetivo $objetivo): void;
    function destroy(Objetivo $objetivo): void;
    function findById(int $id): Objetivo | null;
}
