import { IconBuilding, IconBuildingBank, IconCategoryPlus, IconChartPie, IconCheckupList, IconFiles, IconFolders, IconListCheck, IconManualGearbox, IconTrendingUp } from "@tabler/icons-react";
import { ROLES } from "../../../../helpers";


export const routes = [
    /* GESTIONES */
    {
        label: "Dashboard",
        icon: IconChartPie,
        initiallyOpened: true,
        links: [{ label: "Inicio", link: "/gestion/stats/gestion" }],
        role: ROLES.DIR_GESTION,
    },
    {
        label: "Proveedores",
        icon: IconBuilding,
        initiallyOpened: true,
        links: [{ label: "Ver proveedores", link: "/gestion/proveedores" }],
        role: ROLES.DIR_GESTION,
    },
    /* {
        label: "Programas",
        icon: IconFolders,
        initiallyOpened: true,
        links: [{ label: "Ver programas", link: "/programas" }],
        role: ROLES.DIR_GESTION,
    }, */
    {
        label: "Proyectos",
        icon: IconFiles,
        initiallyOpened: true,
        links: [{ label: "Ver proyectos", link: "/gestion/proyectos" }],
        role: ROLES.DIR_GESTION,
    },
    {
        label: "Espacio de trabajo",
        icon: IconCategoryPlus,
        initiallyOpened: true,
        links: [{ label: "Ver mi espacio", link: "/gestion/tableros" }],
        role: ROLES.DIR_GESTION,
    },

    /* PLANIFICACION */
    {
        role: ROLES.DIR_PLANIFICACION,
        gestion: [
            {
                label: "Dashboard",
                icon: IconChartPie,
                initiallyOpened: true,
                links: [{ label: "Inicio", link: "/" }],
            },
            {
                label: "Planificacion",
                icon: IconCheckupList,
                initiallyOpened: true,
                links: [
                    { label: "Instrumentos", link: "/gpla/instrumentos" },
                    { label: "Objetivos estratégicos y metas", link: "/gpla/objetivos" },
                ],
            },
            {
                label: "Plan de inversión",
                icon: IconFolders,
                initiallyOpened: true,
                links: [
                    { label: "Programas y/o proyectos", link: "/gpla/programas" },
                    { label: "Consolidado de programas y/o proyectos", link: "/gpla/consolidados" },
                ],
            },
            {
                label: "Avance de programas",
                icon: IconTrendingUp,
                initiallyOpened: true,
                links: [
                    { label: "Programación y avance físico", link: "/" },
                    { label: "Programacion y avance presupuestario", link: "/" },
                ],
            },
        ],
        administrar: [
            {
                label: "Administrar",
                icon: IconListCheck,
                initiallyOpened: true,
                links: [
                    //{ label: "Lineas PDOT", link: "/" },
                    { label: "Lineas Estrategicas", link: "/gpla/lineas-estrategicas" },
                    { label: "Componentes PDOT", link: "/gpla/componentes-pdot" },
                    { label: "Categorias PDOT", link: "/gpla/categorias-pdot" },
                    { label: "Competencias PDOT", link: "/gpla/competencias-pdot" },
                    { label: "Estrategias de Articulación", link: "/gpla/estrategias-articulacion" },
                    { label: "Metas PDOT", link: "/gpla/metas-pdot" },
                    { label: "Tipos de Planificación", link: "/gpla/tipos-planificacion" },
                    { label: "Programas", link: "/gpla/planificar-programas" },
                ],
            },
            {
                label: "Gestionar Gobierno",
                icon: IconBuildingBank,
                initiallyOpened: false,
                links: [
                    //{ label: "Lineas PDOT", link: "/" },
                    { label: "Gestionar Gobierno", link: "/gpla/lineas-estrategicas" },
                    { label: "Gestionar Objetivos", link: "/gpla/componentes-pdot" },
                    { label: "Objetivos Sostenibles", link: "/gpla/componentes-pdot" },


                ],
            },
            {
                label: "Gestionar Permisos",
                icon: IconManualGearbox,
                initiallyOpened: false,
                links: [
                    //{ label: "Lineas PDOT", link: "/" },
                    { label: "Gestionar Usuarios", link: "/gpla/lineas-estrategicas" },
                ],
            },
        ],
    }
];
