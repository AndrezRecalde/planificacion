/* Auth */
import { authSlice } from "./auth/authSlice";

/* GESTIONES */
/* PROVEEDORES */
import { proveedorSlice } from "./gestion/proveedor/proveedorSlice";
import { uiProveedorSlice } from "./gestion/proveedor/uiProveedorSlice";

/* PROYECTOS */
import { proyectoSlice } from "./gestion/proyecto/proyectoSlice";
import { uiProyectoSlice } from "./gestion/proyecto/uiProyectoSlice";

import { store } from "./store";

export {
    store,

    /* GESTIONES: PROVEEDORES */
    proveedorSlice,
    uiProveedorSlice,

    /* GESTIONES: PROYECTOS */
    proyectoSlice,
    uiProyectoSlice,

    /* Auth */
    authSlice,
};
