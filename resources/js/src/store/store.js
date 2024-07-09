import { configureStore } from "@reduxjs/toolkit";
import {
    authSlice,
    departamentoSlice,
    lestrategiapdotSlice,
    proveedorSlice,
    proyectoSlice,
    tipoActividadSlice,
    tipoProyectoSlice,
    uiDepartamentoSlice,
    uiLestrategiapdotSlice,
    uiProveedorSlice,
    uiProyectoSlice,
    uiTipoActividadSlice,
    uiTipoProyectoSlice,
} from "../store";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,

        /* Lineas estrategicas del PDOT */
        lestrategiapdot: lestrategiapdotSlice.reducer,
        uiLestrategiapdot: uiLestrategiapdotSlice.reducer,

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
