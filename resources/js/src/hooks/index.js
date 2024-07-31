import { useAuthStore } from "./auth/useAuthStore";

/* LINEA ESTRATEGICAS DEL PDOT */
import { useLestrategiapdotStore } from "./lestrategiapdot/useLestrategiapdotStore";
import { useUiLestrategiapdot } from "./lestrategiapdot/useUiLestrategiapdot";

/* LINEAS DEL PDOT */
import { useLineapdotStore } from "./lineapdot/useLineapdotStore";
import { useUiLineapdot } from "./lineapdot/useUiLineapdot";

/* COMPONENTES DEL PDOT */
import { useComponentepdotStore } from "./componentepdot/useComponentepdotStore";
import { useUiComponentepdot } from "./componentepdot/useUiComponentepdot";

/* CATEGORIAS PDOT COTS */
import { useCategoriapdotStore } from "./categoriapdot/useCategoriapdotStore";
import { useUiCategoriapdot } from "./categoriapdot/useUiCategoriapdot";

/* COMPETENCIAS DEL PDOT */
import { useCompetenciapdotStore } from "./competenciapdot/useCompetenciapdotStore";
import { useUiCompetenciapdot } from "./competenciapdot/useUiCompetenciapdot";

/* EJES DEL GOBIERNO */
import { useEjeStore } from "./eje/useEjeStore";
import { useUiEje } from "./eje/useUiEje";

/* GOBIERNOS */
import { useGobiernoStore } from "./gobierno/useGobiernoStore";
import { useUiGobierno } from "./gobierno/useUiGobierno";

/* OBJETIVOS DEL PLAN NACIONAL DE DESARROLLO: OPN */
import { useOPNStore } from "./opn/useOPNStore";
import { useUiOPN } from "./opn/useUiOPN";


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

    /* LINEAS DEL PDOT */
    useLineapdotStore,
    useUiLineapdot,

    /* COMPONENTES DEL PDOT */
    useComponentepdotStore,
    useUiComponentepdot,

    /* CATEGORIAS DEL PDOT */
    useCategoriapdotStore,
    useUiCategoriapdot,

    /* COMPETENCIAS DEL PDOT */
    useCompetenciapdotStore,
    useUiCompetenciapdot,

    /* EJES DEL GOBIERNO */
    useEjeStore,
    useUiEje,

    /* GOBIERNO */
    useGobiernoStore,
    useUiGobierno,

    /* OBJETIVOS DEL PLAN NACIONAL DE DESARROLLO: OPN */
    useOPNStore,
    useUiOPN,

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
