<?php

namespace App\Interfaces\Auth;

use App\Models\User;

interface AuthInterface {
    public function login(string $dni);

    public function getToken(User $usuario);
    public function refresh();
    public function profile();
}
