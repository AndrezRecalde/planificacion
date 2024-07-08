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
use App\Http\Controllers\General\TableroController;
use App\Http\Controllers\General\TipoActividadController;
use App\Http\Controllers\General\TipoproyectoController;
use App\Http\Controllers\general\TipoUnidadController;
use App\Http\Controllers\General\TrimestreController;
use App\Http\Controllers\General\UserController;
use App\Models\Trimestre;
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
        Route::delete('/delete/proyecto/{id}', [ProyectoController::class, 'destroy']);

        /* ADMIN: COMPETENCIAS DEL GAD */
        Route::delete('/delete/competencia/{id}', [CompetenciaController::class, 'destroy']);


        /* ADMIN: PROVEEDORES */
        Route::delete('/delete/proveedor/{id}', [ProveedorController::class, 'destroy']);

        /* ADMIN: LINEAS PDOT */
        Route::delete('/delete/linea/pdot/{id}', [LineapdotController::class, 'destroy']);

        /* ADMIN: TIPO DE ACTIVIDADES */
        Route::delete('/delete/tipo-actividad/{id}', [TipoActividadController::class, 'destroy']);

        /* ADMIN: LINEAS DEL PDOT */
        Route::delete('/delete/lineapdot/{id}', [LineapdotController::class, 'destroy']);

        /* ADMIN: LINEAS ESTRATEGICAS DEL PDOT */
        Route::delete('/delete/lineaestrategicapdot/{id}', [LestrategiapdotController::class, 'destroy']);

        /* ADMIN: COMPETENCIA PDOT */
        Route::delete('/delete/competenciapdot/{id}', [CompetenciapdotController::class, 'destroy']);

        /* ADMIN: COMPONENTES DEL PDOT */
        Route::delete('/delete/componentepdot/{id}', [ComponentepdotController::class, 'destroy']);

        /* ADMIN: OBJETIVOS ESTRATEGICOS DEL PDOT */
        Route::get('/oepdots', [OepdotController::class, 'getOEPDOTSAdmin']);
        Route::delete('/delete/oepdot/{id}', [OepdotController::class, 'destroy']);

        /* ADMIN: ESTRATEGIAS DE ARTICULACIONES / POLITICA PÚBLICA TERRITORIALIZADA  */
        Route::get('/earticulaciones', [EarticulacionController::class, 'getArticulacionesAdmin']);
        Route::delete('/delete/earticulacion/{id}', [EarticulacionController::class, 'destroy']);

        /*ADMIN: METAS DEL PDOT */
        Route::get('/metaspdot', [MetapdotController::class, 'getMetasPDOTAdmin']);
        Route::delete('/delete/metapdot/{id}', [MetapdotController::class, 'destroy']);

        /* ADMIN: GESTION DEL PDOT */


        /* ADMIN: OBJETIVOS ESTRATEGICOS INSTITUCIONALES */
        Route::delete('/delete/oepei/{id}', [OepeiController::class, 'destroy']);

        /* ADMIN: ESTATUS DE LAS ACTIVIDADES */
        //TODO: REALIZAR UN CONTROLLADOR PARA LOS ESTADOS DE LAS ACTIVIDADES

        /* ADMIN: OBJETIVOS DE DESARROLLO SOSTENIBLE */
        Route::delete('/delete/odsostenible/{id}', [OdssostenibleController::class, 'destroy']);

        /* ADMIN: TIPOS DE PLANIFICACION */
        Route::delete('/delete/tipo-planificacion/{id}', [PlanificaciontipoController::class, 'destroy']);

        /* ADMIN: TIPOS DE PROYECTOS */
        Route::delete('/delete/tipo-proyecto/{id}', [TipoproyectoController::class, 'destroy']);

        /* ADMIN: NIVELES */
        Route::get('/niveles', [NivelController::class, 'getNiveles']);
        Route::post('/store/nivel', [NivelController::class, 'store']);
        Route::put('/update/nivel/{id}', [NivelController::class, 'update']);
        Route::delete('/delete/nivel/{id}', [NivelController::class, 'destroy']);


        /* ADMIN: TIPO DE UNIDADES */
        Route::delete('/delete/tipo-unidad/{id}', [TipoUnidadController::class, 'destroy']);

        /* ADMIN: INSTRUMENTOS */
        Route::delete('/delete/instrumento/{id}', [InstrumentoController::class, 'destroy']);

        /* ADMIN: OBJETIVOS */
        Route::delete('/delete/objetivo/{id}', [ObjetivoController::class, 'destroy']);

        /* ADMIN: PROGRAMAS */
        Route::delete('/delete/programa/{id}', [ProgramaController::class, 'destroy']);

        /* ADMIN: TABLEROS */
        Route::delete('/delete/tablero/{id}', [TableroController::class, 'destroy']);

        /* ADMIN: TRIMESTRES */
        Route::delete('/delete/trimestre/{id}', [TrimestreController::class, 'destroy']);
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

    /* GENERAL: PROGRAMAS */
    Route::post('/programas', [ProgramaController::class, 'getProgramas']);

    /* GENERAL: PROYECTOS */
    Route::post('/proyectos', [ProyectoController::class, 'getProyectos']);
    Route::post('/store/proyecto', [ProyectoController::class, 'store']);
    Route::put('/update/proyecto', [ProyectoController::class, 'update']);
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

    /* PLANIFICACION: PROYECTOS */
    Route::post('/proyectos', [ProyectoController::class, 'getProyectos']);

    /* PLANIFICACION: COMPETENCIAS DEL GAD  */
    Route::post('/competencias', [CompetenciaController::class, 'getCompetencias']);
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

    /* PLANIFICACION: OBJETIVOS ESTRATEGICOS DEL PDOT */
    Route::get('/oepdots', [OepdotController::class, 'getOEPDOTS']);
    Route::post('/store/oepdot', [OepdotController::class, 'store']);
    Route::put('/update/oepdot/{id}', [OepdotController::class, 'update']);
    Route::put('/update/status/oepdot/{id}', [OepdotController::class, 'updateActivo']);

    /* PLANIFICACION: ESTRATEGIAS DE ARTICULACIONES / POLITICA PÚBLICA TERRITORIALIZADA  */
    Route::get('/earticulaciones', [EarticulacionController::class, 'getArticulaciones']);
    Route::post('/store/earticulacion', [EarticulacionController::class, 'store']);
    Route::put('/update/earticulacion/{id}', [EarticulacionController::class, 'update']);


    /*PLANIFICACION: METAS DEL PDOT */
    Route::get('/metaspdot', [MetapdotController::class, 'getMetasForArticulaciones']);
    Route::post('/store/metapdot', [MetapdotController::class, 'store']);
    Route::put('/update/metapdot/{id}', [MetapdotController::class, 'update']);


    /* PLANIFICACION: OBJETIVOS ESTRATEGICOS INSTITUCIONALES */
    Route::post('/oepeis', [OepeiController::class, 'getOepeis']);
    Route::post('/store/oepei', [OepeiController::class, 'store']);
    Route::put('/update/oepei/{id}', [OepeiController::class, 'update']);
    Route::put('/update/status/oepei/{id}', [OepeiController::class, 'updateActivo']);


    /* PLANIFICACION: OBJETIVOS DE DESARROLLO SOSTENIBLE */
    Route::get('/odsostenibles', [OdssostenibleController::class, 'getObjetivosODS']);
    Route::post('/store/odsostenible', [OdssostenibleController::class, 'store']);
    Route::put('/update/odsostenible/{id}', [OdssostenibleController::class, 'update']);

    /* PLANIFICACION: TIPOS DE PLANIFICACION */
    Route::get('/tipos-planificacion', [PlanificaciontipoController::class, 'getTiposPlanificaciones']);
    Route::post('/store/tipo-planificacion', [PlanificaciontipoController::class, 'store']);
    Route::put('/update/tipo-planificacion/{id}', [PlanificaciontipoController::class, 'update']);


    /* PLANIFICACION: TIPOS DE PROYECTOS */
    Route::get('/tipos-proyectos', [TipoproyectoController::class, 'getTiposProyectos']);
    Route::post('/store/tipo-proyecto', [TipoproyectoController::class, 'store']);
    Route::post('/update/tipo-proyecto/{id}', [TipoproyectoController::class, 'update']);

    /* PLANIFICACION: TIPO DE UNIDADES */
    Route::get('/tipo-unidades', [TipoUnidadController::class, 'getTipoUnidades']);
    Route::post('/store/tipo-unidad', [TipoUnidadController::class, 'store']);
    Route::put('/update/tipo-unidad/{id}', [TipoUnidadController::class, 'update']);
    Route::put('/update/status/tipo-unidad/{id}', [TipoUnidadController::class, 'updateStatus']);


    /*PLANIFICACION: INSTRUMENTOS */
    Route::post('/instrumentos', [InstrumentoController::class, 'getInstrumentos']);
    Route::post('/store/instrumento', [InstrumentoController::class, 'store']);
    Route::put('/update/instrumento/{id}', [InstrumentoController::class, 'update']);

    /* PLANIFICACION: OBJETIVOS */
    Route::post('/objetivos', [ObjetivoController::class, 'getObjetivos']);
    Route::post('/store/objetivo', [ObjetivoController::class, 'store']);
    Route::put('/update/objetivo/{id}', [ObjetivoController::class, 'update']);
    Route::put('/update/status/objetivo/{id}', [ObjetivoController::class, 'update']);

    /* PLANIFICACION: PROGRAMAS */
    Route::post('/programas', [ProgramaController::class, 'getProgramas']);
    Route::post('/store/programa', [ProgramaController::class, 'store']);
    Route::put('/update/programa/{id}', [ProgramaController::class, 'update']);
    Route::put('/update/status/programa/{id}', [ProgramaController::class, 'update']);

    /* PLANIFICACION: TABLEROS */ //TODO: PODRIA MIGRAR ESTAS RUTAS A UN NUEVO ROLE: COORD_INSTI
    Route::post('/tableros', [TableroController::class, 'getTableros']);
    Route::post('/store/tablero', [TableroController::class, 'store']);
    Route::post('/update/tablero/{id}', [TableroController::class, 'update']);

    /* PLANIFICACION: TRIMESTRES */
    Route::get('/trimestres', [TrimestreController::class, 'getTrimestres']);
    Route::post('/store/trimestre', [TrimestreController::class, 'store']);
    Route::put('/update/trimestre/{id}', [TrimestreController::class, 'update']);
    Route::put('/update/status/trimestre/{id}', [TrimestreController::class, 'updateStatus']);
});
