<?php

namespace App\Interfaces\General;

use App\Http\Requests\TableroRequest;
use App\Models\Tablero;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

interface TableroInterface
{
    function getTableros(Request $request): Collection;
    function store(TableroRequest $request): void;
    function update(TableroRequest $request, Tablero $tablero): void;
    function destroy(Tablero $tablero): void;
    function findById(int $id) : Tablero | null;
}
