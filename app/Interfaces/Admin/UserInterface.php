<?php

namespace App\Interfaces\Admin;

use App\Http\Requests\UserPassword;
use App\Http\Requests\UserRequest;
use App\Http\Requests\UserUpdateActivo;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

interface UserInterface {
    //function getUsuariosAdmin(): Collection;
    function getUsuarios(Request $request): Collection;
    function store(UserRequest $request): void;
    function update(UserRequest $request, User $usuario): void;
    function updatePassword(UserPassword $request, User $usuario): void;
    function updateActivo(UserUpdateActivo $request, User $usuario): void;
    function destroy(User $usuario): void;
    function findById(int $id): User | null;

}
