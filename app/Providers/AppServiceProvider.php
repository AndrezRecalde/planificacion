<?php

namespace App\Providers;

use App\Interfaces\Admin\UserInterface;
use App\Interfaces\Auth\AuthInterface;
use App\Interfaces\General\ObjetivoInterface;
use App\Repositories\Admin\UserRepository;
use App\Repositories\Auth\AuthRepository;
use App\Repositories\General\ObjetivoRepository;
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
        $this->app->bind(ObjetivoInterface::class, ObjetivoRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
