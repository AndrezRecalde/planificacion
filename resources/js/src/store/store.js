import { configureStore } from "@reduxjs/toolkit";
import {
    authSlice,
    proveedorSlice,
    proyectoSlice,
    uiProveedorSlice,
    uiProyectoSlice,
} from "../store";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,

        /*Proveedores */
        proveedor: proveedorSlice.reducer,
        uiProveedor: uiProveedorSlice.reducer,

        /* Proyectos */
        proyecto: proyectoSlice.reducer,
        uiProyecto: uiProyectoSlice.reducer,
    },
});
