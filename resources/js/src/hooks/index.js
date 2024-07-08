import { useAuthStore } from "./auth/useAuthStore";

/* GESTIONES: PROVEEDORES */
import { useProveedorStore } from "./gestiones/proveedor/useProveedorStore";
import { useUiProveedor } from "./gestiones/proveedor/useUiProveedor";


/* GESTIONES: PROYECTOS */
import { useProyectoStore } from "./gestiones/proyecto/useProyectoStore";
import { useUiProyecto } from "./gestiones/proyecto/useUiProyecto";

/* Error */
import { useErrorException } from "./error/useErrorException";


export {
    useAuthStore,

    /*GESTIONES: PROVEEDORES */
    useProveedorStore,
    useUiProveedor,

    /* GESTIONES: PROYECTOS */
    useProyectoStore,
    useUiProyecto,

    useErrorException
}
