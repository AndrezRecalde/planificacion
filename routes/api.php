<?php

use App\Http\Controllers\Admin\AcronimoController;
use App\Http\Controllers\Admin\AdministrativoController;
use App\Http\Controllers\Admin\ApplicationController;
use App\Http\Controllers\Admin\DepartamentoController;
use App\Http\Controllers\Admin\GadController;
use App\Http\Controllers\Admin\GobiernoController;
use App\Http\Controllers\Admin\InstitucionController;
use App\Http\Controllers\Admin\UserAdminController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\General\ActividadController;
use App\Http\Controllers\General\AtrimestreController;
use App\Http\Controllers\General\CompetenciapdotController;
use App\Http\Controllers\General\ComponentepdotController;
use App\Http\Controllers\General\CotpdotController;
use App\Http\Controllers\General\EarticulacionController;
use App\Http\Controllers\General\EjeController;
use App\Http\Controllers\General\GestionpdotController;
use App\Http\Controllers\General\InstrumentoController;
use App\Http\Controllers\General\LestrategiapdotController;
use App\Http\Controllers\General\LineapdotController;
use App\Http\Controllers\General\MetapdotController;
use App\Http\Controllers\General\NivelController;
use App\Http\Controllers\General\ObjetivoController;
use App\Http\Controllers\General\OdssostenibleController;
use App\Http\Controllers\General\OepdotController;
use App\Http\Controllers\General\OepeiController;
use App\Http\Controllers\General\OpndesarrolloController;
use App\Http\Controllers\General\PlanificaciontipoController;
use App\Http\Controllers\General\ProgramaController;
use App\Http\Controllers\General\ProveedorController;
use App\Http\Controllers\General\ProyectoController;
use App\Http\Controllers\General\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/auth/login', [AuthController::class, 'login']);

Route::get('/refresh', [AuthController::class, 'refresh'])->middleware('auth:sanctum');;
Route::get('/profile', [AuthController::class, 'profile'])->middleware('auth:sanctum');;
Route::post('/auth/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');;

Route::group(
    [
        'prefix' => 'admin',
        'middleware' => ['auth:sanctum']
    ],
    function () {

        /* ADMIN: APPLICATION */
        Route::get('/application', [ApplicationController::class, 'show']);
        Route::put('/update/application/{id}', [ApplicationController::class, 'update']);

        /* ADMIN: USUARIOS */
        Route::get('/usuarios', [UserAdminController::class, 'getUsuariosAdmin']);
        Route::post('/store/usuario', [UserAdminController::class, 'store']);
        Route::put('/update/usuario/{id}', [UserAdminController::class, 'update']);
        Route::put('/update/status/usuario/{id}', [UserAdminController::class, 'updateActivo']);
        Route::delete('/delete/usuario/{id}', [UserAdminController::class, 'destroy']);

        /* ADMIN: ACRONIMOS */
        Route::get('/acronimos', [AcronimoController::class, 'getAcronimos']);
        Route::post('/store/acronimo', [AcronimoController::class, 'store']);
        Route::put('/update/acronimo/{id}', [AcronimoController::class, 'update']);
        Route::put('/update/status/acronimo/{id}', [AcronimoController::class, 'updateActivo']);
        Route::delete('/delete/acronimo/{id}', [AcronimoController::class, 'destroy']);

        /* ADMIN: ADMINISTRATIVOS */
        Route::get('/administrativos', [AdministrativoController::class, 'getAdministrativosAdmin']);
        Route::post('/store/administrativo', [AdministrativoController::class, 'store']);
        Route::put('/update/administrativo/{id}', [AdministrativoController::class, 'update']);
        Route::delete('/delete/administrativo/{id}', [AdministrativoController::class, 'destroy']);

        /*ADMIN: DEPARTAMENTOS */
        Route::post('/departamentos', [DepartamentoController::class, 'getDepartamentosAdmin']);
        Route::post('/store/departamento', [DepartamentoController::class, 'store']);
        Route::post('/update/departamento/{id}', [DepartamentoController::class, 'update']);
        Route::post('/update/status/departamento/{id}', [DepartamentoController::class, 'updateActivo']);
        Route::delete('/delete/departamento/{id}', [DepartamentoController::class, 'delete']);


        /* ADMIN: TIPOS DE GADS */
        Route::get('/tipos-gads', [GadController::class, 'getGADS']);
        Route::post('/store/tipos-gads', [GadController::class, 'store']);
        Route::put('/update/tipo-gad/{id}', [GadController::class, 'update']);
        Route::delete('/delete/tipo-gad/{id}', [GadController::class, 'destroy']);

        /* ADMIN: GOBIERNOS */
        Route::get('/gobiernos', [GobiernoController::class, 'getGobiernosAdmin']);
        Route::post('/store/gobierno', [GobiernoController::class, 'store']);
        Route::put('/update/gobierno/{id}', [GobiernoController::class, 'update']);
        Route::put('/update/status/gobierno/{id}', [GobiernoController::class, 'updateActivo']);
        Route::delete('/delete/gobierno/{id}', [GobiernoController::class, 'destroy']);

        /* ADMIN: INSTITUCIONES */
        Route::get('/instituciones', [InstitucionController::class, 'getInstitucionesAdmin']);
        Route::post('/store/institucion', [InstitucionController::class, 'store']);
        Route::put('/update/institucion/{id}', [InstitucionController::class, 'update']);
        Route::put('/update/status/institucion/{id}', [InstitucionController::class, 'updateActivo']);
        Route::delete('/delete/institucion/{id}', [InstitucionController::class, 'destroy']);

    }
);

Route::group([
    'prefix' => 'general',
    'middleware' => ['auth:sanctum']
], function () {

    /*GENERAL: USUARIOS */
    Route::get('/usuarios', [UserController::class, 'getUsuarios']);
    Route::put('/update/password/usuario/{id}', [UserController::class, 'updatePassword']);


    /* GENERAL: DEPARTAMENTOS */
    Route::post('/departamentos', [DepartamentoController::class, 'getDepartamentos']);
    Route::post('/departamentos/institucion', [DepartamentoController::class, 'getDepartamentosxInstitucion']);

    /* GENERAL: GOBIERNOS */
    Route::get('/gobiernos', [GobiernoController::class, 'getGobiernoActivo']);

    /* GENERAL: INSTITUCION */
    Route::get('/instituciones', [InstitucionController::class, 'getInstituciones']);



});
