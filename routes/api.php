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
use App\Http\Controllers\General\CompetenciaController;
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
use App\Http\Controllers\General\StatusController;
use App\Http\Controllers\General\TipoActividadController;
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

Route::get('/refresh', [AuthController::class, 'refresh'])->middleware('auth:sanctum');
Route::get('/profile', [AuthController::class, 'profile'])->middleware('auth:sanctum');
Route::post('/auth/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

Route::group(
    [
        'prefix' => 'public',
        //'middleware' => ['auth:sanctum']
    ],
    function () {
        Route::get('/logo', [ApplicationController::class, 'getLogoImage']);
    }
);

Route::group(
    [
        'prefix' => 'admin',
        'middleware' => ['auth:sanctum', 'role:ADMIN']
    ],
    function () {

        /* ADMIN: APPLICATION */
        Route::get('/application', [ApplicationController::class, 'show']);
        Route::post('/update/application/{id}', [ApplicationController::class, 'update']); //TODO: CAMBIARLO A PUT

        /* ADMIN: USUARIOS */
        Route::get('/usuarios', [UserAdminController::class, 'getUsuariosAdmin']);
        Route::post('/store/usuario', [UserAdminController::class, 'store']);
        Route::put('/update/usuario/{id}', [UserAdminController::class, 'update']);
        Route::put('/update/status/usuario/{id}', [UserAdminController::class, 'updateActivo']);
        Route::delete('/delete/usuario/{id}', [UserAdminController::class, 'destroy']);

        /* ADMIN: ACRONIMOS */
        Route::get('/acronimos-admin', [AcronimoController::class, 'getAcronimosAdmin']);
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

        /* ADMIN: INSTITUCIONES */
        Route::get('/instituciones', [InstitucionController::class, 'getInstitucionesAdmin']);
        Route::post('/store/institucion', [InstitucionController::class, 'store']);
        Route::put('/update/institucion/{id}', [InstitucionController::class, 'update']);
        Route::put('/update/status/institucion/{id}', [InstitucionController::class, 'updateActivo']);
        Route::delete('/delete/institucion/{id}', [InstitucionController::class, 'destroy']);


        /* ADMIN: GOBIERNOS */
        Route::get('/gobiernos-admin', [GobiernoController::class, 'getGobiernosAdmin']);
        Route::delete('/delete/gobierno/{id}', [GobiernoController::class, 'destroy']);

        /* ADMIN: EJES DEL GOBIERNO */
        Route::get('/ejes-admin', [EjeController::class, 'getEjesAdmin']);
        Route::delete('/delete/eje/{id}', [EjeController::class, 'destroy']);

        /* ADMIN: OPNDESARROLLOS  */
        Route::post('/opndesarrollos', [OpndesarrolloController::class, 'getOPNAdmin']);
        Route::delete('/delete/opndesarrollo/{id}', [OpndesarrolloController::class, 'destroy']);

        /* ADMIN: PROYECTOS */
        Route::post('/proyectos', [ProyectoController::class, 'getProyectos']);
        Route::delete('/delete/proyecto/{id}', [ProyectoController::class, 'destroy']);

        /* ADMIN: COMPETENCIAS DEL GAD */
        Route::post('/competencias', [CompetenciaController::class, 'getCompetencias']);
        Route::delete('/delete/competencia/{id}', [CompetenciaController::class, 'destroy']);


        /* ADMIN: PROVEEDORES */
        Route::get('/proveedores', [ProveedorController::class, 'getProveedoresAdmin']);
        Route::delete('/delete/proveedor/{id}', [ProveedorController::class, 'destroy']);

        /* ADMIN: LINEAS PDOT */
        Route::delete('/delete/linea/pdot/{id}', [LineapdotController::class, 'destroy']);

        /* ADMIN: TIPO DE ACTIVIDADES */
        Route::delete('/delete/tipo-actividad/{id}', [TipoActividadController::class, 'destroy']);

        /* ADMIN: LINEAS DEL PDOT */
        Route::delete('/delete/lineapdot/{id}', [LineapdotController::class, 'destroy']);

        /* ADMIN: LINEAS ESTRATEGICAS DEL PDOT */
        Route::delete('/delete/lineaestrategicapdot/{id}', [LestrategiapdotController::class, 'destroy']);

        /* PLANIFICACION: COMPETENCIA PDOT */
        Route::delete('/delete/competenciapdot/{id}', [CompetenciapdotController::class, 'destroy']);

        /* PLANIFICACION: COMPONENTES DEL PDOT */
        Route::delete('/delete/componentepdot/{id}', [ComponentepdotController::class, 'destroy']);

    }
);

Route::group([
    'prefix' => 'general',
    'middleware' => ['auth:sanctum', 'role:DIR_GESTION|ADMIN']
], function () {

    /*GENERAL: USUARIOS */
    Route::get('/usuarios', [UserController::class, 'getUsuarios']);
    Route::put('/update/password/usuario/{id}', [UserController::class, 'updatePassword']);


    /* GENERAL: DEPARTAMENTOS */
    Route::post('/departamentos', [DepartamentoController::class, 'getDepartamentos']);  // VIEWANY
    Route::post('/departamentos/institucion', [DepartamentoController::class, 'getDepartamentosxInstitucion']);  //VIEWANY

    /* GENERAL: INSTITUCION */
    Route::get('/instituciones', [InstitucionController::class, 'getInstituciones']);  //VIEWANY

    /* GENERAL: PROVEEDORES */
    Route::post('/proveedores', [ProveedorController::class, 'getProveedores']);
    Route::post('/store/proveedor', [ProveedorController::class, 'store']);
    Route::put('/update/proveedor/{id}', [ProveedorController::class, 'update']);

    /* GENERAL: PROYECTOS */
    Route::post('/proyectos', [ProyectoController::class, 'getProyectos']);
    Route::post('/store/proyecto', [ProyectoController::class, 'store']);
    Route::put('/update/proyecto', [ProyectoController::class, 'update']);


    /* GENERAL: STATUS */
    Route::get('/status', [StatusController::class, 'getStatusForTablero']);
    Route::post('/store/status', [StatusController::class, 'store']);
    Route::post('/update/status/{id}', [StatusController::class, 'update']);
    Route::delete('/delete/status/{id}', [StatusController::class, 'destroy']);
});


Route::group([
    'prefix' => 'planificacion',
    'middleware' => ['auth:sanctum', 'role:DIR_PLANIFICACION|ADMIN']
], function () {

    /* PLANIFICACION: LINEAS PDOT */
    Route::get('/lineas/pdot', [LineapdotController::class, 'getLineaspdot']);
    Route::post('/store/linea/pdot', [LineapdotController::class, 'store']);
    Route::put('/update/linea/pdot/{id}', [LineapdotController::class, 'update']);

    /*PLANIFICACION: TIPO ACTIVIDADES */
    Route::get('/tipo-actividades', [TipoActividadController::class, 'getTiposdeActividades']);
    Route::post('/store/tipo-actividad', [TipoActividadController::class, 'store']);
    Route::put('/update/tipo-actividad/{id}', [TipoActividadController::class, 'update']);

    /* ADMIN: GOBIERNOS */
    Route::get('/gobiernos', [GobiernoController::class, 'getGobiernoActivoWithEjesAndOPN']); //Presenta los ejes activos
    Route::post('/store/gobierno', [GobiernoController::class, 'store']);
    Route::put('/update/gobierno/{id}', [GobiernoController::class, 'update']);
    Route::put('/update/status/gobierno/{id}', [GobiernoController::class, 'updateActivo']);

    /* PLANIFICACION: EJES DEL GOBIERNO */
    Route::get('/ejes', [EjeController::class, 'getEjes']);
    Route::post('/store/eje', [EjeController::class, 'store']);
    Route::put('/update/eje/{id}', [EjeController::class, 'update']);

    /* PLANIFICACION: OPNDESARROLLOS  */
    Route::get('/opndesarrollos-proyectos', [OpndesarrolloController::class, 'getOPNForProyecto']);
    Route::post('/store/opndesarrollo', [OpndesarrolloController::class, 'store']);
    Route::put('/update/opndesarrollo/{id}', [OpndesarrolloController::class, 'update']);


    /* PLANIFICACION: PROGRAMAS */
    Route::post('/store/programa', [ProgramaController::class, 'store']);

    /* PLANIFICACION: COMPETENCIAS DEL GAD  */
    Route::post('/store/competencia', [CompetenciaController::class, 'store']);
    Route::put('/update/competencia/{id}', [CompetenciaController::class, 'update']);

    /* PLANIFICACION: LINEAS DEL PDOT */
    Route::get('/lineaspdot', [LineapdotController::class, 'getLineaspdot']);
    Route::post('/store/lineapdot', [LineapdotController::class, 'store']);
    Route::put('/update/lineapdot/{id}', [LineapdotController::class, 'update']);


    /*PLANIFICACION: LINEAS ESTRATEGICAS DEL PDOT */
    Route::get('/lineasestrategicaspdot', [LestrategiapdotController::class, 'getLineasEstrategiasPdot']);
    Route::post('/store/lineasestrategicaspdot', [LestrategiapdotController::class, 'store']);
    Route::post('/update/lineaestrategicaspdot/{id}', [LestrategiapdotController::class, 'update']);

    /* PLANIFICACION: COMPETENCIA PDOT */
    Route::post('/competenciaspdots', [CompetenciapdotController::class, 'getCompetenciasPDOT']);
    Route::post('/store/competenciaspdot', [CompetenciapdotController::class, 'store']);
    Route::put('/update/competenciapdot/{id}', [CompetenciapdotController::class, 'update']);

    /* PLANIFICACION: COMPONENTES DEL PDOT */
    Route::get('/componentespdot', [ComponentepdotController::class, 'getComponentesAdmin']);
    Route::get('/componentespdot-activos', [ComponentepdotController::class, 'getComponentesActivos']);
    Route::post('/store/componentespdot', [ComponentepdotController::class, 'store']);
    Route::put('/update/componentepdot/{id}', [ComponentepdotController::class, 'update']);




});
