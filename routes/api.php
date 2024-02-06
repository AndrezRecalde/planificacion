<?php

use App\Http\Controllers\Admin\AcronimoController;
use App\Http\Controllers\Admin\AdministrativoController;
use App\Http\Controllers\Admin\ApplicationController;
use App\Http\Controllers\Admin\DepartamentoController;
use App\Http\Controllers\Admin\GadController;
use App\Http\Controllers\Admin\GobiernoController;
use App\Http\Controllers\Admin\InstitucionController;
use App\Http\Controllers\Admin\UserController;
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
use App\Models\Componentepdot;
use App\Models\Proveedor;
use Illuminate\Http\Request;
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

Route::prefix('admin')->group(function () {
    /* ADMIN: APPLICATION */
    Route::get('/application', [ApplicationController::class, 'show']);
    Route::put('/update/application/{id}', [ApplicationController::class, 'update']);

    /* ADMIN: PERIODOS ADMINISTRATIVOS */
    Route::get('/administrativos', [AdministrativoController::class, 'getAdministrativosAdmin']);
    Route::post('/store/administrativo', [AdministrativoController::class, 'store']);
    Route::put('/update/administrativo/{id}', [AdministrativoController::class, 'update']);
    Route::put('/update/status/administrativo/{id}', [AdministrativoController::class, 'updateActivo']);
    Route::delete('/delete/administrativo/{id}', [AdministrativoController::class, 'destroy']);

    /* ADMIN: USUARIOS */
    Route::get('/usuarios', [UserController::class, 'getUsuariosAdmin']);
    Route::post('/store/usuario', [UserController::class, 'store']);



    /* ADMIN: ACRONIMOS */
    Route::get('/acronimos', [AcronimoController::class, 'getAcronimos']);
    Route::post('/store/acronimo', [AcronimoController::class, 'store']);
    Route::put('/update/acronimo/{id}', [AcronimoController::class, 'update']);
    Route::delete('/delete/acronimo/{id}', [AcronimoController::class, 'destroy']);

    /* ADMIN: TIPOS DE GADS */
    Route::get('/gads', [GadController::class, 'getGADS']);
    Route::post('/store/gad', [GadController::class, 'store']);
    Route::put('/update/gad/{id}', [GadController::class, 'update']);
    Route::delete('/delete/gad/{id}', [GadController::class, 'destroy']);

    /* ADMIN: INSTITUCIONES */
    Route::get('/instituciones', [InstitucionController::class, 'getInstitucionesAdmin']);
    Route::post('/store/institucion', [InstitucionController::class, 'store']);
    Route::put('/update/institucion/{id}', [InstitucionController::class, 'update']);
    Route::put('/update/status/institucion/{id}', [InstitucionController::class, 'updateActivo']);
    Route::delete('/delete/institucion/{id}', [InstitucionController::class, 'destroy']);

    /* ADMIN: DEPARTAMENTOS */
    Route::get('/departamentos', [DepartamentoController::class, 'getDepartamentosAdmin']);
    Route::post('/store/departamento', [DepartamentoController::class, 'store']);
    Route::put('/update/departamento/{id}', [DepartamentoController::class, 'update']);
    Route::put('/update/status/departamento/{id}', [DepartamentoController::class, 'updateActivo']);
    Route::put('/update/d/departamento/{id}', [DepartamentoController::class, 'addDirectores']);
    Route::delete('/delete/departamento/{id}', [DepartamentoController::class, 'destroy']);

    /* ADMIN: OBJETIVOS DE DESARROLLO SOSTENIBLE ODS */
    Route::post('/store/ods', [OdssostenibleController::class, 'store']);
    Route::put('/update/ods/{id}', [OdssostenibleController::class, 'update']);
    Route::delete('/delete/ods/{id}', [OdssostenibleController::class, 'destroy']);

    /* ADMIN: GOBIERNOS */
    Route::get('/gobiernos', [GobiernoController::class, 'getGobiernosAdmin']);
    Route::post('/store/gobierno', [GobiernoController::class, 'store']);
    Route::put('/update/gobierno/{id}', [GobiernoController::class, 'update']);
    Route::put('/update/status/gobierno/{id}', [GobiernoController::class, 'updateActivo']);
    Route::delete('/delete/gobierno/{id}', [GobiernoController::class, 'destroy']);

    /* ADMIN: EJES */
    Route::get('/ejes', [EjeController::class, 'getEjesAdmin']);
    Route::post('/store/eje', [EjeController::class, 'store']);
    Route::put('/update/eje/{id}', [EjeController::class, 'update']);
    Route::delete('/delete/eje/{id}', [EjeController::class, 'destroy']);

    /* ADMIN: OBJETIVO DE PLAN NACIONAL DE DESARROLLO SOSTENIBLE OPN */
    Route::get('/opns', [OpndesarrolloController::class, 'getOPNAdmin']);
    Route::post('/store/opn', [OpndesarrolloController::class, 'store']);
    Route::put('/update/opn/{id}', [OpndesarrolloController::class, 'update']);
    Route::delete('/delete/opn/{id}', [OpndesarrolloController::class, 'destroy']);

    /* ADMIN: LINEAS ESTRATEGICAS DEL PDOT */
    Route::get('/lestrategiapdots', [LestrategiapdotController::class, 'getEstrategiasPDOTAdmin']);

    /* ADMIN: COMPETENCIAS DEL PDOT */
    Route::get('/competenciapdots', [CompetenciapdotController::class, 'getCompetenciasAdmin']);
    Route::delete('/delete/competenciapdot/{id}', [CompetenciapdotController::class, 'destroy']);

    /* ADMIN: COMPONENTES PDOT */
    Route::get('/componentepdots', [ComponentepdotController::class, 'getComponentesAdmin']);
    Route::delete('/delete/componentepdot/{id}', [ComponentepdotController::class, 'destroy']);

    /* ADMIN: CATEGORIAS PDOT */
    Route::get('/cotpdots', [CotpdotController::class, 'getCotpdotsAdmin']);
    Route::delete('/delete/cotpdot', [CotpdotController::class, 'destroy']);

    /* ADMIN: OBJETIVOS ESTRATEGICOS PDOT - OEPDOT */
    Route::get('/oepdots', [OepdotController::class, 'getOEPDOTSAdmin']);
    Route::delete('/delete/oepdot/{id}', [OepdotController::class, 'destroy']);

    /* ADMIN: ARTICULACIONES DE LOS OBJETIVOS */
    Route::get('/earticulaciones', [EarticulacionController::class, 'getArticulacionesAdmin']);
    Route::delete('/delete/earticulacion/{id}', [EarticulacionController::class, 'destroy']);

    /* ADMIN: METAS PDOT */
    Route::get('/metapdots', [MetapdotController::class, 'getMetasPDOTAdmin']);
    Route::delete('/delete/metapdot/{id}', [MetapdotController::class, 'destroy']);

    /* ADMIN: MODELO DE GESTION PDOT */
    Route::get('/gestionpdots', [GestionpdotController::class, 'getGestionPDOTSAdmin']);
    Route::delete('/delete/gestionpdot', [GestionpdotController::class, 'destroy']);

    /* ADMIN: UNIFICACION DE OBJETIVOS */
    Route::get('/objetivos', [ObjetivoController::class, 'getObjetivosAdmin']);
    Route::delete('/delete/objetivo/{id}', [ObjetivoController::class, 'destroy']);

    /* === */

    /* ADMIN: PROGRAMAS  */
    Route::get('/programas', [ProgramaController::class, 'getProgramasAdmin']);
    Route::delete('/delete/programa', [ProgramaController::class, 'destroy']);

    /* ADMIN: PROYECTOS */
    Route::post('/proyectos', [ProyectoController::class, 'getProyectosAdmin']);
    Route::delete('/delete/proyecto/{id}', [ProyectoController::class, 'destroy']);

    /* ADMIN: ACTIV. TRIMESTRALES */
    Route::get('/actividades/trimestres', [AtrimestreController::class, 'getActivTrimestresAdmin']);
    Route::delete('/delete/actividad/trimestre/{id}', [AtrimestreController::class, 'destroy']);

    /* ADMIN: PROVEEDORES */
    Route::delete('/delete/proveedor/{id}', [ProveedorController::class, 'destroy']);

});

Route::prefix('general')->group(function () {

    /* GENERAL: PERIODOS ADMINISTRATIVOS ACTIVOS */
    Route::get('/administrativos', [AdministrativoController::class, 'getAdministrativos']);

    /* GENERAL: USUARIOS */
    Route::get('/usuarios', [UserController::class, 'getUsuarios']);


    /* GENERAL: INSTITUCIONES ACTIVOS */
    Route::get('/instituciones', [InstitucionController::class, 'getInstituciones']);

    /* GENERAL: DEPARTAMENTOS */
    Route::get('/departamentos', [DepartamentoController::class, 'getDepartamentos']);
    Route::post('departamentos/institucion', [DepartamentoController::class, 'getDepartamentosxInstitucion']);

    /* GENERAL: OBJETIVOS DE DESARROLLO SOSTENIBLE */
    Route::get('/ods', [OdssostenibleController::class, 'getObjetivosODS']);

    /* GENERAL: GOBIERNOS */
    Route::get('/gobiernos', [GobiernoController::class, 'getGobiernoActivo']);

    /* GENERAL: EJES */
    Route::post('/ejes', [EjeController::class, 'getEjes']);

    /* GENERAL: OBJETIVO DE PLAN NACIONAL DE DESARROLLO SOSTENIBLE OPN */
    Route::post('/opns', [OpndesarrolloController::class, 'getOPNForGobierno']);

    /* GENERAL: INSTRUMENTOS DE PLANIFICACION */
    Route::get('/instrumentos', [InstrumentoController::class, 'getInstrumentos']);
    Route::post('/store/instrumento', [InstrumentoController::class, 'store']);
    Route::put('/update/instrumento/{id}', [InstrumentoController::class, 'update']);
    Route::delete('/delete/instrumento/{id}', [InstrumentoController::class, 'destroy']);

    /* GENERAL: OBJETIVOS ESTRATEGICOS DEL PLAN INSTITUCIONAL OEPEI */
    Route::get('/oepeis', [OepeiController::class, 'getOepeis']);
    Route::post('/store/oepei', [OepeiController::class, 'store']);
    Route::put('/update/oepei/{id}', [OepeiController::class, 'update']);
    Route::put('/update/status/oepei/{id}', [OepeiController::class, 'updateActivo']);
    Route::delete('/delete/oepei/{id}', [OepeiController::class, 'destroy']);

    /* GENERAL: LINEAS DEL PDOT */
    Route::get('/lineas', [LineapdotController::class, 'getLineaspdot']);
    Route::post('/store/linea', [LineapdotController::class, 'store']);
    Route::put('/update/linea/{id}', [LineapdotController::class, 'update']);
    Route::delete('/delete/linea/{id}', [LineapdotController::class, 'destroy']);

    /* GENERAL: LINEAS ESTRATEGICAS DEL PDOT */
    Route::post('/lestrategias', [LestrategiapdotController::class, 'getEstrategiasForLineas']);
    Route::post('/store/lestrategia', [LestrategiapdotController::class, 'store']);
    Route::put('/update/lestrategia/{id}', [LestrategiapdotController::class, 'update']);
    Route::put('/update/status/lestrategia/{id}', [LestrategiapdotController::class, 'updateActivo']);
    Route::delete('/delete/lestrategia/{id}', [LestrategiapdotController::class, 'delete']);

    /* GENERAL: COMPETENCIAS DEL PDOT */
    Route::post('/competenciapdots', [CompetenciapdotController::class, 'getCompetenciasForEstrategia']);
    Route::post('/store/competenciapdot', [CompetenciapdotController::class, 'store']);
    Route::put('/update/competenciapdot/{id}', [CompetenciapdotController::class, 'update']);
    Route::put('/update/status/competenciapdot/{id}', [CompetenciapdotController::class, 'updateActivo']);

    /* GENERAL: COMPONENTES PDOT */
    Route::get('/componentepdots', [ComponentepdotController::class, 'getComponentesActivos']);
    Route::post('/componentepdots/competenciapdot', [ComponentepdotController::class, 'getComponentesForCompetencia']);
    Route::post('/store/componentepdot', [ComponentepdotController::class, 'store']);
    Route::put('/update/componentepdot/{id}', [ComponentepdotController::class, 'update']);
    Route::put('/update/status/componentepdot/{id}', [ComponentepdotController::class, 'updateActivo']);

    /* GENERAL: CATEGORIAS PDOT */
    Route::get('/cotpdots', [CotpdotController::class, 'getCotpdotsActivos']);
    Route::post('/cotpdots/competenciapdot', [CotpdotController::class, 'getCotpdotsForCompetencia']);
    Route::post('/store/cotpdot', [CotpdotController::class, 'store']);
    Route::put('/update/cotpdot/{id}', [CotpdotController::class, 'update']);
    Route::put('/update/status/cotpdot/{id}', [CotpdotController::class, 'updateActivo']);

    /* GENERAL: OBJETIVOS ESTRATEGICOS PDOT - OEPDOT */
    Route::get('/oepdots', [OepdotController::class, 'getOEPDOTS']);
    Route::post('/store/oepdot', [OepdotController::class, 'store']);
    Route::put('/update/oepdot/{id}', [OepdotController::class, 'update']);
    Route::put('/update/status/oepdot/{id}', [OepdotController::class, 'updateActivo']);

    /* GENERAL: ARTICULACIONES DE LOS OBJETIVOS */
    Route::post('/earticulaciones', [EarticulacionController::class, 'getArticulacionesForObjetivo']);
    Route::post('/store/earticulacion', [EarticulacionController::class, 'store']);
    Route::put('/update/earticulacion/{id}', [EarticulacionController::class, 'update']);

    /* GENERAL: METAS PDOT */
    Route::post('/metapdots', [MetapdotController::class, 'getMetasForArticulaciones']);
    Route::post('/store/metapdot', [MetapdotController::class, 'store']);
    Route::put('/update/metapdot/{id}', [MetapdotController::class, 'update']);

    /* GENERAL: MODELO DE GESTION PDOT */
    Route::get('/gestionpdots', [GestionpdotController::class, 'getGestionPDOTS']);
    Route::post('/store/gestionpdot', [GestionpdotController::class, 'store']);
    Route::put('/update/gestionpdot/{id}', [GestionpdotController::class, 'update']);
    Route::put('/update/status/gestionpdot/{id}', [GestionpdotController::class, 'updateActivo']);

    /* GENERAL: UNIFICACION DE OBJETIVOS */
    Route::post('/store/objetivo', [ObjetivoController::class, 'store']);
    Route::put('/update/objetivo/{id}', [ObjetivoController::class, 'update']);
    Route::put('/update/status/objetivo/{id}', [ObjetivoController::class, 'updateActivo']);


    /* GENERAL: PLANIFICACION TIPOS */
    Route::get('/planificacion/tipos', [PlanificaciontipoController::class, 'getTiposPlanificaciones']);

    /* === */

    /* GENERAL: PROGRAMAS  */
    Route::post('/programas/gestiones', [ProgramaController::class, 'getProgramasForGestion']);
    Route::post('/store/programa', [ProgramaController::class, 'store']);
    Route::put('/update/programa/{id}', [ProgramaController::class, 'update']);
    Route::put('/update/status/programa/{id}', [ProgramaController::class, 'updateActivo']);

    /* GENERAL: NIVELES */
    Route::get('/niveles', [NivelController::class, 'getNiveles']);

    /* GENERAL: PROYECTOS */
    Route::post('/proyectos/gestiones', [ProyectoController::class, 'getProyectosForGestion']);
    Route::post('/store/proyecto', [ProyectoController::class, 'store']);
    Route::put('/update/proyecto/{id}', [ProyectoController::class, 'update']);
    Route::put('/update/published/proyecto/{id}', [ProyectoController::class, 'updatePublished']);
    Route::put('/update/archivado/proyecto/{id}', [ProyectoController::class, 'updateArchivado']);

    /* GENERAL: ACTIVIDADES  */
    Route::post('/actividades/proyecto', [ActividadController::class, 'getActividadesForProyecto']);
    Route::post('/store/actividad', [ActividadController::class, 'store']);
    Route::put('/update/actividad/{id}', [ActividadController::class, 'update']);

    /* GENERAL: ACTIV. TRIMESTRALES */
    Route::post('/actividades/trimestres/activ', [AtrimestreController::class, 'getActivTrimestresForActividad']);
    Route::post('/store/actividad/trimestre', [AtrimestreController::class, 'store']);
    Route::put('/update/actividad/trimestre/{id}', [AtrimestreController::class, 'update']);

    /* GENERAL: PROVEEDORES */
    Route::get('/proveedores', [ProveedorController::class, 'getProveedores']);
    Route::post('/store/proveedor', [ProveedorController::class, 'store']);
    Route::put('/update/proveedor/{id}', [ProveedorController::class, 'update']);




});
