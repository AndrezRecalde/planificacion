export const ROLES = {
    ADMIN: "ADMIN",
    DIR_PLANIFICACION: "DIR_PLANIFICACION",
    DIR_GESTION: "DIR_GESTION"
}

export const PREFIX_ROUTES = {
    ADMIN: "admin",
    GENERAL: "general",
    PLANIFICACION: "planificacion",
};

export const API_URL_ROUTES = {
    LOGIN: "/auth/login",
    REFRESH_TOKEN: "/refresh",
    PROFILE: "/profile",
    LOGOUT: "/auth/logout",

    /* DEPARTAMENTOS */
    GET_DEPARTAMENTOS: "/departamentos/institucion",
    STORE_DEPARTAMENT0: "/store/departamento",
    UPDATE_DEPARTAMENT0: "/update/departamento",
    UPDATE_STATUS_DEPARTAMENT0: "/update/status/departamento",
    DELETE_DEPARTAMENT0: "/delete/departamento",

    /* LINEAS DEL PDOT */
    GET_LINEASPDOT: "/lineaspdot",
    STORE_LINEAPDOT: "/store/lineapdot",
    UPDATE_LINEAPDOT: "/update/lineapdot",
    DELETE_LINEAPDOT: "/delete/lineapdot",

    /* LINEAS ESTRATEGICAS PDOT */
    GET_LESTRATEGIAPDOTS: "/lineasestrategicaspdot",
    STORE_LESTRATEGIAPDOTS: "/store/lineasestrategicaspdot",
    UPDATE_LESTRATEGIAPDOTS: "/update/lineaestrategicaspdot",
    UPDATE_STATUS_LESTRATEGIAPDOTS: "/update/status/lineaestrategicaspdot",
    DELETE_LESTRATEGIAPDOTS: "/delete/lineaestrategicapdot",


    /* TIPOS PROYECTOS */
    GET_TIPO_PROYECTOS: "/tipos-proyectos",
    STORE_TIPO_PROYECTO: "/store/tipo-planificacion",
    UPDATE_TIPO_PROYECTO: "/update/tipo-planificacion",
    DELETE_TIPO_PROYECTO: "/delete/tipo-proyecto",

    /* TIPO ACTIVIDADES */
    GET_TIPO_ACTIVIDADES: "/tipo-actividades",
    STORE_TIPO_ACTIVIDADES: "/store/tipo-actividad",
    UPDATE_TIPO_ACTIVIDADES: "/update/tipo-actividad",
    DELETE_TIPO_ACTIVIDADES: "/delete/tipo-actividad",


    /** PROVEEDORES */
    GET_PROVEEDORES: "/proveedores",
    STORE_PROVEEDOR: "/store/proveedor",
    UPDATE_PROVEEDOR: "/update/proveedor",
    DELETE_PROVEEDOR: "/delete/proveedor",

    /** PROYECTOS */
    GET_PROYECTOS: "/proyectos",
    STORE_PROYECTO: "/store/proyecto",
    UPDATE_PROYECTO: "/update/proyecto",
    DELETE_PROYECTO: "/delete/proyecto",
};

export const BTN_TITLES = {
    BTN_SAVE: "Guardar",
    BTN_EDIT: "Editar",
    BTN_SEARCH: "Buscar",

    /* PROVEEDORES */
    PROVEEDOR_BTN_MODAL: "Agregar Proveedor",

    /* PROGRAMAS */
    PROGRAMA_SOLI_MODAL: "Solicitar Programa",

    /* PROYECTOS */



}

export const APP_WORDS = {

    /* AUTHENTICACION */
    ACCEDER: "Acceder",
    LOGIN_TITLE: "Inicial sesión",
    LOGIN_DNI_TEXT: "Cédula",
    LOGIN_PLACEHOLDER_DNI: "Digite su cédula",
    LOGIN_PWD_TEXT: "Contraseña",
    LOGIN_PLACEHOLDER_PWD: "Tu contraseña",

    /* PROVEEDOR */
    PROVEEDOR_TITLE: "Proveedores",
    PROVEEDOR_TITLE_MODAL: "Ficha Proveedor",

    PROVEEDOR_TEXT_NAME: "Nombre del Proveedor",
    PROVEEDOR_PLACEHOLDER_NAME: "Digite el nombre del proveedor",

    PROVEEDOR_TEXT_RUC: "RUC",
    PROVEEDOR_PLACEHOLDER_RUC: "Digite el RUC",

    PROVEEDOR_TEXT_TELEFONO: "Teléfono",
    PROVEEDOR_PLACEHOLDER_TELEFONO: "Digite el teléfono",


    /* PROGRAMA */
    PROGRAMA_TITLE: "Programas",

    /* PROYECTO */
    PROYECTO_ADD_MENU: "Agregar proyecto",
    PROYECTO_TITLE_MODAL: "Ficha Proyecto",
    PROYECTO_TITLE_REFERENCED: "Proyectos Vinculados",

    /* ACTIVIDAD */
    ACTIVIDAD_TITLE_MODAL: "Ficha de Actividad",
}
