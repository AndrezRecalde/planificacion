import { useAuthStore } from "./auth/useAuthStore";

/* LINEA ESTRATEGICAS DEL PDOT */
import { useLestrategiapdotStore } from "./lestrategiapdot/useLestrategiapdotStore";
import { useUiLestrategiapdot } from "./lestrategiapdot/useUiLestrategiapdot";


/* TIPO DE PROYECTOS */
import { useTipoProyectoStore } from "./tipo_proyecto/useTipoProyectoStore";
import { useUiTipoProyecto } from "./tipo_proyecto/useUiTipoProyecto";


/* TIPO DE ACTIVIDADES */
import { useTipoActividadStore } from "./tipo_actividad/useTipoActividadStore";
import { useUiTipoActividad } from "./tipo_actividad/useUiTipoActividad";


/* DEPARTAMENTOS */
import { useDepartamentoStore } from "./departamento/useDepartamentoStore";
import { useUiDepartamento } from "./departamento/useUiDepartamento";

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

    /* LINEA ESTRATEGICAS DEL PDOT */
    useLestrategiapdotStore,
    useUiLestrategiapdot,

    /* TIPO DE PROYECTOS */
    useTipoProyectoStore,
    useUiTipoProyecto,

    /* TIPO DE ACTIVIDADES */
    useTipoActividadStore,
    useUiTipoActividad,

    /* DEPARTAMENTO */
    useDepartamentoStore,
    useUiDepartamento,

    /*GESTIONES: PROVEEDORES */
    useProveedorStore,
    useUiProveedor,

    /* GESTIONES: PROYECTOS */
    useProyectoStore,
    useUiProyecto,

    useErrorException
}
