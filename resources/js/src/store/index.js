/* Auth */
import { authSlice } from "./auth/authSlice";

/* LINEAS ESTRATEGIAS DEL PDOT */
import { lestrategiapdotSlice } from "./lestrategia/lestrategiapdotSlice";
import { uiLestrategiapdotSlice } from "./lestrategia/uiLestrategiapdotSlice";

/* LINEAS DEL PDOT */
import { lineapdotSlice } from "./lineas_pdot/lineapdotSlice";
import { uiLineapdotSlice } from "./lineas_pdot/uiLineapdotSlice";

/* COMPONENTES DEL PDOT */
import { componentepdotSlice } from "./componentepdot/componentepdotSlice";
import { uiComponentepdotSlice } from "./componentepdot/uiComponentepdotSlice";


/* TIPO DE PROYECTOS */
import { tipoProyectoSlice } from "./tipo_proyecto/tipoProyectoSlice";
import { uiTipoProyectoSlice } from "./tipo_proyecto/uiTipoProyectoSlice";


/* TIPO ACTIVIDADES */
import { tipoActividadSlice } from "./tipo_actividad/tipoActividadSlice";
import { uiTipoActividadSlice } from "./tipo_actividad/uiTipoActividadSlice";


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

    /* LINEAS ESTRATEGICAS DEL PDOT */
    lestrategiapdotSlice,
    uiLestrategiapdotSlice,

    /* LINEAS DEL PDOT */
    lineapdotSlice,
    uiLineapdotSlice,

    /* COMPONENTES DEL PDOT */
    componentepdotSlice,
    uiComponentepdotSlice,

    /* TIPO DE PROYECTOS */
    tipoProyectoSlice,
    uiTipoProyectoSlice,

    /* TIPO ACTIVIDADES */
    tipoActividadSlice,
    uiTipoActividadSlice,

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
};
