<?php

namespace App\Interfaces\Auth;

interface AuthInterface {
    public function login(string $dni);

    public function getToken($usuario);
    public function refresh();
    public function profile();
}
