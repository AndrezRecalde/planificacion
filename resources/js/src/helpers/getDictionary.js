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

    /* USUARIOS */
    GET_USUARIOS: "/usuarios",
    STORE_USUARIO: "/store/usuario",
    ASSIGN_PERMISSION: "/assign/permission/usuario",
    UPDATE_PERMISSION: "/update/permission/usuario",
    UPDATE_USUARIO: "/update/usuario",
    UPDATE_STATUS_USUARIO: "/update/status",
    DELETE_USUARIO: "/delete/usuario",

    /* PERMISSIONS */
    GET_PERMISSIONS: "/permissions",

    /* DEPARTAMENTOS */
    GET_DEPARTAMENTOS: "/departamentos",
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

    /* COMPONENTES DEL PDOT */
    GET_COMPONENTESPDOT: "/componentespdot",
    STORE_COMPONENTEPDOT: "/store/componentepdot",
    UPDATE_COMPONENTESPDOT: "/update/componentepdot",
    UPDATE_STATUS_COMPONENTESPDOT: "/update/status/componentepdot",
    DELETE_COMPONENTEPDOT: "/delete/componentepdot",

    /* CATEGORIAS DEL PDOT */
    GET_CATEGORIASPDOT: "/cotspdot",
    STORE_CATEGORIAPDOT: "/store/cotpdot",
    UPDATE_CATEGORIAPDOT: "/update/cotpdot",
    UPDATE_STATUS_CATEGORIAPDOT: "/update/status/cotpdot",
    DELETE_CATEGORIAPDOT: "/delete/cotpdot",

    /* COMPETENCIAS DEL PDOT */
    GET_COMPETENCIASPDOT: "/competenciaspdots",
    STORE_COMPETENCIAPDOT: "/store/competenciaspdot",
    UPDATE_COMPETENCIAPDOT: "/update/competenciapdot",
    UPDATE_STATUS_COMPETENCIAPDOT: "/update/status/competenciapdot",
    DELETE_COMPETENCIAPDOT: "/delete/competenciapdot",

    /* EJES DEL GOBIERNO */
    GET_EJES: "/ejes",
    STORE_EJE: "/store/eje",
    UPDATE_EJE: "/update/eje",
    DELETE_EJE: "/delete/eje",

    /* GOBIERNO */
    GET_GOBIERNOS: "/gobiernos",
    STORE_GOBIERNO: "/store/gobierno",
    UPDATE_GOBIERNO: "/update/gobierno",
    UPDATE_STATUS_GOBIERNO: "/update/status/gobierno",
    DELETE_GOBIERNO: "/delete/gobierno",

    /* OBJETIVOS DE DESARROLLO NACIONAL: OPN */
    GET_OPN: "/opndesarrollos",
    GET_GOBIERNO_PROYECTO: "/opndesarrollos-proyectos",
    STORE_OPN: "/store/opndesarrollo",
    UPDATE_OPN: "/update/opndesarrollo",
    DELETE_OPN: "/delete/opndesarrollo",

    /* OBJETIVOS DE DESARROLLO SOSTENIBLE: ODS */
    GET_ODS: "/odsostenibles",
    STORE_ODS: "/store/odsostenible",
    UPDATE_ODS: "/update/odsostenible",
    UPDATE_STATUS_ODS: "/update/status/odsostenible",
    DELETE_ODS: "/delete/odsostenible",

    /* INSTRUMENTOS DE PLANIFICACION */
    GET_INSTRUMENTOS: "/instrumentos",
    STORE_INSTRUMENTO: "/store/instrumento",
    UPDATE_INSTRUMENTO: "/update/instrumento",
    DELETE_INSTRUMENTO: "/delete/instrumento",
    DOWNLOAD_INSTRUMENTO: "",

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
    BTN_ADD: "Agregar",

    /* PROVEEDORES */
    PROVEEDOR_BTN_MODAL: "Agregar Proveedor",

    /* PROGRAMAS */
    PROGRAMA_SOLI_MODAL: "Solicitar Programa",

    /* PROYECTOS */



}

export const APP_WORDS = {

    /* PALABRAS DE ELEMENTOS */
    SELECT_PLACEHOLDER: "Elige una opción",
    NOTHING_FOUND: "Nada encontrado...",
    TITLE_MODALSTATUS: "Activar/Desactivar Elemento",


    /* AUTHENTICACION */
    ACCEDER: "Acceder",
    LOGIN_TITLE: "Inicial sesión",
    LOGIN_DNI_TEXT: "Cédula",
    LOGIN_PLACEHOLDER_DNI: "Digite su cédula",
    LOGIN_PWD_TEXT: "Contraseña",
    LOGIN_PLACEHOLDER_PWD: "Tu contraseña",


    /* LINEAS DEL PDOT */
    LINEAPDOT_TITLE_MODAL: "Ficha Lineas del PDOT",
    LINEAPDOT_TEXT_NOMBRELINEA: "Nombre de la línea",
    LINEAPDOT_PLACEHOLDER_NOMBRELINEA: "Digite el nombre",


    /* LINEAS ESTRATEGICAS */
    LINEASESTRATEGICAS_TITLE: "Lineas Estrategicas",
    LINEAESTRATEGICA_TITLE_MODAL: "Ficha Lineas Estrategicas del PDOT",
    LINEAESTRATEGICA_TEXT_NOMBRELINEA: "Nombre de la línea estrategica",
    LINEAESTRATEGICA_PLACEHOLDER_NOMBRELINEA: "Nombre de la línea estrategica",
    LINEAESTRATEGICA_SELECT_LINEAPDOT: "Elegir Línea del PDOT",


    /* OBJETIVOS PLAN NACIONAL DE DESARROLLO: OPN */
    OPN_TITLE_MODAL: "Ficha Objetivo Plan Nacional",


    /* INSTRUMENTOS DE PLANIFICACION */
    INSTRUMENTOS_TITLE: "Instrumentos de planificación",


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
