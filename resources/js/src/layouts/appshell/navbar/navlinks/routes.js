import { IconBuilding, IconCategoryPlus, IconChartPie, IconCheckupList, IconFiles, IconFolders, IconListCheck, IconTrendingUp } from "@tabler/icons-react";
import { ROLES } from "../../../../helpers";


export const routes = [
    /* GESTIONES */
    {
        label: "Dashboard",
        icon: IconChartPie,
        initiallyOpened: true,
        links: [{ label: "Inicio", link: "/stats/gestion" }],
        role: ROLES.DIR_GESTION,
    },
    {
        label: "Proveedores",
        icon: IconBuilding,
        initiallyOpened: true,
        links: [{ label: "Ver proveedores", link: "/proveedores" }],
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
        links: [{ label: "Ver proyectos", link: "/proyectos" }],
        role: ROLES.DIR_GESTION,
    },
    {
        label: "Espacio de trabajo",
        icon: IconCategoryPlus,
        initiallyOpened: true,
        links: [{ label: "Ver mi espacio", link: "/tableros" }],
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
                    { label: "Objetivos Estrategicos PDOT", link: "/" },
                    { label: "Estrategias de Articulación", link: "/" },
                    { label: "Metas PDOT", link: "/" },
                    { label: "Modelo de Gestiones", link: "/" },
                    { label: "Tipos de Planificación", link: "/" },
                    { label: "Realización de Objetivos", link: "/" },
                    { label: "Programas", link: "/" },
                ],
            },
        ],
    }
];
