/* AUTH */
import { authSlice } from "./auth/authSlice";

/* STORAGE FIELDS */
import { storageFieldsSlice } from "./storage/storageFieldsSlice";

/* USUARIOS */
import { userSlice } from "./user/userSlice";
import { uiUserSlice } from "./user/uiUserSlice";

/* PERMISSIONS */
import { permissionSlice } from "./permission/permissionSlice";
import { uiPermissionSlice } from "./permission/uiPermissionSlice";

/* LINEAS ESTRATEGIAS DEL PDOT */
import { lestrategiapdotSlice } from "./lestrategia/lestrategiapdotSlice";
import { uiLestrategiapdotSlice } from "./lestrategia/uiLestrategiapdotSlice";

/* LINEAS DEL PDOT */
import { lineapdotSlice } from "./lineas_pdot/lineapdotSlice";
import { uiLineapdotSlice } from "./lineas_pdot/uiLineapdotSlice";

/* COMPONENTES DEL PDOT */
import { componentepdotSlice } from "./componentepdot/componentepdotSlice";
import { uiComponentepdotSlice } from "./componentepdot/uiComponentepdotSlice";

/* CATEGORIAS DEL PDOT */
import { categoriapdotSlice } from "./categoriapdot/categoriapdotSlice";
import { uiCategoriapdotSlice } from "./categoriapdot/uiCategoriapdotSlice";

/* COMPETENCIAS DEL PDOT */
import { competenciapdotSlice } from "./competenciapdot/competenciapdotSlice";
import { uiCompetenciapdotSlice } from "./competenciapdot/uiCompetenciapdotSlice";

/* EJES DE GOBIERNO */
import { ejeSlice } from "./eje/ejeSlice";
import { uiEjeSlice } from "./eje/uiEjeSlice";

/* GOBIERNOS */
import { gobiernoSlice } from "./gobierno/gobiernoSlice";
import { uiGobiernoSlice } from "./gobierno/uiGobiernoSlice";

/* OBJETIVOS DE DESARROLLO NACIONAL: OPN */
import { opnSlice } from "./opn/opnSlice";
import { uiOpnSlice } from "./opn/uiOpnSlice";

/* OBJETIVOS DE DESARROLLO SOSTENIBLE */
import { odssostenibleSlice } from "./odssostenible/odssostenibleSlice";
import { uiOdssostenibleSlice } from "./odssostenible/uiOdssostenibleSlice";

/* INSTRUMENTOS DE PLANIFICACION */
import { instrumentoSlice } from "./instrumento/instrumentoSlice";
import { uiInstrumentoSlice } from "./instrumento/uiInstrumentoSlice";

/* ESTRATEGIAS DE ARTICULACION */
import { earticulacionSlice } from "./earticulacion/earticulacionSlice";
import { uiEarticulacionSlice } from "./earticulacion/uiEarticulacionSlice";

/* METAS DEL PDOT */
import { metapdotSlice } from "./metapdot/metapdotSlice";
import { uiMetapdotSlice } from "./metapdot/uiMetapdotSlice";


/* TIPO DE PROYECTOS */
import { tipoProyectoSlice } from "./tipo_proyecto/tipoProyectoSlice";
import { uiTipoProyectoSlice } from "./tipo_proyecto/uiTipoProyectoSlice";

/* TIPO ACTIVIDADES */
import { tipoActividadSlice } from "./tipo_actividad/tipoActividadSlice";
import { uiTipoActividadSlice } from "./tipo_actividad/uiTipoActividadSlice";

/* TIPOS DE PLANIFICACION */
import { planificacionTipoSlice } from "./planificaciontipo/planificacionTipoSlice";
import { uiPlanificacionTipoSlice } from "./planificaciontipo/uiPlanificacionTipoSlice";

/* PROGRAMAS */
import { programaSlice } from "./programa/programaSlice";
import { uiProgramaSlice } from "./programa/uiProgramaSlice";

/* OBJETIVOS */
import { objetivoSlice } from "./objetivo/objetivoSlice";
import { uiObjetivoSlice } from "./objetivo/uiObjetivoSlice";

/* PROVEEDORES */
import { proveedorSlice } from "./proveedor/proveedorSlice";
import { uiProveedorSlice } from "./proveedor/uiProveedorSlice";

/* PROYECTOS */
import { proyectoSlice } from "./proyecto/proyectoSlice";
import { uiProyectoSlice } from "./proyecto/uiProyectoSlice";

/* DEPARTAMENTOS */
import { departamentoSlice } from "./departamento/departamentoSlice";
import { uiDepartamentoSlice } from "./departamento/uiDepartamentoSlice";

import { store } from "./store";

export {
    store,

    /* STORAGE FIELDS */
    storageFieldsSlice,

    /* LINEAS ESTRATEGICAS DEL PDOT */
    lestrategiapdotSlice,
    uiLestrategiapdotSlice,

    /* LINEAS DEL PDOT */
    lineapdotSlice,
    uiLineapdotSlice,

    /* COMPONENTES DEL PDOT */
    componentepdotSlice,
    uiComponentepdotSlice,

    /* CATEGORIAS DEL PDOT */
    categoriapdotSlice,
    uiCategoriapdotSlice,

    /* COMPETENCIAS DEL PDOT */
    competenciapdotSlice,
    uiCompetenciapdotSlice,

    /* EJE DE GOBIERNOS */
    ejeSlice,
    uiEjeSlice,

    /* GOBIERNOS */
    gobiernoSlice,
    uiGobiernoSlice,

    /* OBJETIVOS DE DESARROLLO NACIONAL: OPN */
    opnSlice,
    uiOpnSlice,

    /* OBJETIVOS DE DESARROLLO SOSTENIBLE: ODS */
    odssostenibleSlice,
    uiOdssostenibleSlice,

    /* INSTRUMENTOS DE PLANIFICACION */
    instrumentoSlice,
    uiInstrumentoSlice,

    /* ESTRATEGIAS DE ARTICULACION */
    earticulacionSlice,
    uiEarticulacionSlice,

    /* METAS DEL PDOT */
    metapdotSlice,
    uiMetapdotSlice,

    /* TIPO DE PROYECTOS */
    tipoProyectoSlice,
    uiTipoProyectoSlice,

    /* TIPO ACTIVIDADES */
    tipoActividadSlice,
    uiTipoActividadSlice,

    /* TIPO DE PLANIFICACION */
    planificacionTipoSlice,
    uiPlanificacionTipoSlice,

    /* PROGRAMAS */
    programaSlice,
    uiProgramaSlice,

    /* OBJETIVOS */
    objetivoSlice,
    uiObjetivoSlice,

    /* GESTIONES: PROVEEDORES */
    proveedorSlice,
    uiProveedorSlice,

    /* GESTIONES: PROYECTOS */
    proyectoSlice,
    uiProyectoSlice,

    /* DEPARTAMENTOS */
    departamentoSlice,
    uiDepartamentoSlice,

    /* Auth */
    authSlice,

    /* USUARIOS */
    userSlice,
    uiUserSlice,

    /* PERMISSIONS */
    permissionSlice,
    uiPermissionSlice,
};
