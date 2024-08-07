import { configureStore } from "@reduxjs/toolkit";
import {
    authSlice,
    categoriapdotSlice,
    competenciapdotSlice,
    componentepdotSlice,
    departamentoSlice,
    ejeSlice,
    gobiernoSlice,
    lestrategiapdotSlice,
    lineapdotSlice,
    odssostenibleSlice,
    opnSlice,
    proveedorSlice,
    proyectoSlice,
    tipoActividadSlice,
    tipoProyectoSlice,
    uiCategoriapdotSlice,
    uiCompetenciapdotSlice,
    uiComponentepdotSlice,
    uiDepartamentoSlice,
    uiEjeSlice,
    uiGobiernoSlice,
    uiLestrategiapdotSlice,
    uiLineapdotSlice,
    uiOdssostenibleSlice,
    uiOpnSlice,
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
