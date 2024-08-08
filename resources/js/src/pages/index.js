/* Error */
import { ErrorNotFound } from "./error/ErrorNotFound";
import { ErrorAccessDenied } from "./error/ErrorAccessDenied";


import { AuthPage } from "./auth/AuthPage";
import { ProfilePage } from "./user/ProfilePage";
import { ChangePwdPage } from "./user/ChangePwdPage";
import { PermissionsPage } from "./user/permissions/PermissionsPage";

/* Financiero */
import { TransaccionPage } from "./financiero/TransaccionPage";
import { ReformasPage } from "./financiero/ReformasPage";

/* GESTIONES */
import { DashGestionesPage } from "./gestiones/dashboard/DashGestionesPage";
import { ProgramasPage } from "./gestiones/programa/ProgramasPage";
import { ProyectosPage } from "./gestiones/proyecto/ProyectosPage";
import { ProveedorPage } from "./gestiones/proveedor/ProveedorPage";
import { ActividadesPage } from "./gestiones/actividades/ActividadesPage";
import { ViewTablerosPage } from "./gestiones/tablero/ViewTablerosPage";
import { KanbanActividadesPage } from "./gestiones/actividades/KanbanActividadesPage";

import { WorkspacesPage } from "./gestiones/workspace/WorkspacesPage";

/* PLANIFICACION */
import { InstrumentosPage } from "./planificacion/instrumentos/InstrumentosPage";
import { ObjetivosEstrategicosPage } from "./planificacion/objetivos/ObjetivosEstrategicosPage";
import { ProgramasPlanPage } from "./planificacion/programas/ProgramasPlanPage";
import { ConsolidadosPage } from "./planificacion/consolidado/ConsolidadosPage";

/* PLANIFICACION: ADMINISTRACION */
import { LineasEstrategicasPage } from "./planificacion/administracion/lineasEstrategicas/LineasEstrategicasPage";
import { CompetenciaspdotPage } from "./planificacion/administracion/competenciaspdot/CompetenciaspdotPage";
import { ComponentespdotPage } from "./planificacion/administracion/componentespdot/ComponentespdotPage";
import { CategoriaspdotPage } from "./planificacion/administracion/categoriaspdot/CategoriaspdotPage";
import { EarticulacionPage } from "./planificacion/administracion/earticulacion/EarticulacionPage";
import { MetaspdotPage } from "./planificacion/administracion/metaspdot/MetaspdotPage";
import { PlanificacionTiposPage } from "./planificacion/administracion/planificaciontipos/PlanificacionTiposPage";
import { ProgramasAdminPage } from "./planificacion/administracion/programas/ProgramasAdminPage";
import { EjesPage } from "./planificacion/administracion/eje/EjesPage";
import { GobiernosPage } from "./planificacion/administracion/gobierno/GobiernosPage";
import { ObjetivosPlanNacional } from "./planificacion/administracion/opn/ObjetivosPlanNacional";
import { OdssosteniblePage } from "./planificacion/administracion/odssostenible/OdssosteniblePage";

export {
    ErrorNotFound,
    ErrorAccessDenied,

    AuthPage,
    ProfilePage,
    ChangePwdPage,
    PermissionsPage,

    /* Financiero */
    TransaccionPage,
    ReformasPage,

    /* Gestiones */
    DashGestionesPage,
    ProgramasPage,
    ProyectosPage,
    ProveedorPage,
    ActividadesPage,
    ViewTablerosPage,
    KanbanActividadesPage,
    WorkspacesPage,

    /* Planificacion */
    InstrumentosPage,
    ObjetivosEstrategicosPage,
    ProgramasPlanPage,
    ConsolidadosPage,

    /*Planificacion: Administracion */
    LineasEstrategicasPage,
    CompetenciaspdotPage,
    ComponentespdotPage,
    CategoriaspdotPage,
    EarticulacionPage,
    MetaspdotPage,
    PlanificacionTiposPage,
    ProgramasAdminPage,
    EjesPage,
    GobiernosPage,
    ObjetivosPlanNacional,
    OdssosteniblePage

 };
