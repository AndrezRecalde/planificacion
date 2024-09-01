import { configureStore } from "@reduxjs/toolkit";
import {
    authSlice,
    categoriapdotSlice,
    competenciapdotSlice,
    componentepdotSlice,
    departamentoSlice,
    earticulacionSlice,
    ejeSlice,
    gobiernoSlice,
    instrumentoSlice,
    lestrategiapdotSlice,
    lineapdotSlice,
    metapdotSlice,
    odssostenibleSlice,
    opnSlice,
    permissionSlice,
    planificacionTipoSlice,
    proveedorSlice,
    proyectoSlice,
    tipoActividadSlice,
    tipoProyectoSlice,
    uiCategoriapdotSlice,
    uiCompetenciapdotSlice,
    uiComponentepdotSlice,
    uiDepartamentoSlice,
    uiEarticulacionSlice,
    uiEjeSlice,
    uiGobiernoSlice,
    uiInstrumentoSlice,
    uiLestrategiapdotSlice,
    uiLineapdotSlice,
    uiMetapdotSlice,
    uiOdssostenibleSlice,
    uiOpnSlice,
    uiPermissionSlice,
    uiPlanificacionTipoSlice,
    uiProveedorSlice,
    uiProyectoSlice,
    uiTipoActividadSlice,
    uiTipoProyectoSlice,
    uiUserSlice,
    userSlice,
} from "../store";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,

        /* Usuarios */
        usuario: userSlice.reducer,
        uiUsuario: uiUserSlice.reducer,

        /* Permission */
        permission: permissionSlice.reducer,
        uiPermission: uiPermissionSlice.reducer,

        /* Lineas del PDOT */
        lineapdot: lineapdotSlice.reducer,
        uiLineapdot: uiLineapdotSlice.reducer,

        /* Lineas estrategicas del PDOT */
        lestrategiapdot: lestrategiapdotSlice.reducer,
        uiLestrategiapdot: uiLestrategiapdotSlice.reducer,

        /* Componentes del pdot */
        componentepdot: componentepdotSlice.reducer,
        uiComponentepdot: uiComponentepdotSlice.reducer,

        /* Categorias del pdot: Cotpots */
        categoriapdot: categoriapdotSlice.reducer,
        uiCategoriapdot: uiCategoriapdotSlice.reducer,

        /* Competencias del pdot */
        competenciapdot: competenciapdotSlice.reducer,
        uiCompetenciapdot: uiCompetenciapdotSlice.reducer,

        /* Ejes de Gobierno */
        eje: ejeSlice.reducer,
        uiEje: uiEjeSlice.reducer,

        /* Gobiernos */
        gobierno: gobiernoSlice.reducer,
        uiGobierno: uiGobiernoSlice.reducer,

        /* Objetivos de desarrollo Nacional: OPN */
        opn: opnSlice.reducer,
        uiOPN: uiOpnSlice.reducer,

        /* Objetivos de desarrollo Sostenible */
        odssostenible: odssostenibleSlice.reducer,
        uiOdssostenible: uiOdssostenibleSlice.reducer,

        /* Estrategias de Articulacion */
        earticulacion: earticulacionSlice.reducer,
        uiEarticulacion: uiEarticulacionSlice.reducer,

        /* Metas del PDOT */
        metapdot: metapdotSlice.reducer,
        uiMetapdot: uiMetapdotSlice.reducer,

        /* Instrumentos de planificacion */
        instrumento: instrumentoSlice.reducer,
        uiInstrumento: uiInstrumentoSlice.reducer,

        /* Tipos de Planificacion */
        planificacionTipo: planificacionTipoSlice.reducer,
        uiPlanificacionTipo: uiPlanificacionTipoSlice.reducer,

        /* Departamentos */
        departamento: departamentoSlice.reducer,
        uiDepartamento: uiDepartamentoSlice.reducer,

        /* Tipo de Proyectos */
        tipoProyecto: tipoProyectoSlice.reducer,
        uiTipoProyecto: uiTipoProyectoSlice.reducer,

        /* Tipo Actividades */
        tipoActividad: tipoActividadSlice.reducer,
        uiTipoActividad: uiTipoActividadSlice.reducer,

        /*Proveedores */
        proveedor: proveedorSlice.reducer,
        uiProveedor: uiProveedorSlice.reducer,

        /* Proyectos */
        proyecto: proyectoSlice.reducer,
        uiProyecto: uiProyectoSlice.reducer,
    },
});
