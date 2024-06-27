<?php

namespace App\Providers;

use App\Interfaces\Admin\UserInterface;
use App\Interfaces\Auth\AuthInterface;
use App\Interfaces\General\ObjetivoInterface;
use App\Interfaces\General\ProgramaInterface;
use App\Interfaces\General\ProveedorInterface;
use App\Interfaces\General\TableroInterface;
use App\Repositories\Admin\UserRepository;
use App\Repositories\Auth\AuthRepository;
use App\Repositories\General\ObjetivoRepository;
use App\Repositories\General\ProgramaRepository;
use App\Repositories\General\ProveedorRepository;
use App\Repositories\General\TableroRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(AuthInterface::class, AuthRepository::class);
        $this->app->bind(UserInterface::class, UserRepository::class);
        $this->app->bind(ProveedorInterface::class, ProveedorRepository::class);
        $this->app->bind(ProgramaInterface::class, ProgramaRepository::class);
        $this->app->bind(ObjetivoInterface::class, ObjetivoRepository::class);
        $this->app->bind(TableroInterface::class, TableroRepository::class);

    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
