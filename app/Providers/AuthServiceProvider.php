<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;

use App\Policies\AcronimoPolicy;
use App\Policies\AdministrativoPolicy;
use App\Policies\ApplicationPolicy;
use App\Policies\DepartamentoPolicy;
use App\Policies\GobiernoPolicy;
use App\Policies\InstitucionPolicy;
use App\Policies\UserPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        'App\Models\User' => UserPolicy::class,
        'App\Models\Acronimo' => AcronimoPolicy::class,
        'App\Models\Administrativo' => AdministrativoPolicy::class,
        'App\Models\Application' => ApplicationPolicy::class,
        'App\Models\Departamento' => DepartamentoPolicy::class,
        'App\Models\Gobierno' => GobiernoPolicy::class,
        'App\Models\Institucion' => InstitucionPolicy::class,



    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        //
        $this->registerPolicies();
    }
}
