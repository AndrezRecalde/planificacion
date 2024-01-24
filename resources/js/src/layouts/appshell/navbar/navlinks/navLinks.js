import {
    IconArrowsRightLeft,
    IconCategoryPlus,
    IconChartPie,
    IconCheckupList,
    IconFiles,
    IconFolders,
    IconListCheck,
    IconListTree,
    IconNews,
    IconTrendingUp,
    IconUsers,
} from "@tabler/icons-react";

export const lFinanciero = [
    {
        label: "Transacciones",
        icon: IconArrowsRightLeft,
        links: [{ label: "Realizar transacción", link: "/" }],
    },
    {
        label: "Reformas",
        icon: IconCheckupList,
        links: [{ label: "Administrar Reformas", link: "/" }],
    },
    {
        label: "Seguimiento",
        icon: IconCheckupList,
        links: [{ label: "Seguimiento de gestiones", link: "/" }],
    },
];

export const lCoprasPublicas = [
    {
        label: "Dashboard",
        icon: IconUsers,
        links: [{ label: "Inicio", link: "/" }],
    },
    {
        label: "Seguimiento",
        icon: IconCheckupList,
        links: [
            { label: "Seguimiento de gestiones", link: "/" }

        ],
    },
    {
        label: "Catálogo de PAC",
        icon: IconCategoryPlus,
        links: [{ label: "Gestionar PAC", link: "/" }],
    },
    {
        label: "Blog de clasificados",
        icon: IconNews,
        links: [{ label: "Gestionar Noticias", link: "/" }],
    },
];

export const lPlanificacion = [
    {
        label: "Dashboard",
        icon: IconUsers,
        links: [{ label: "Inicio", link: "/" }],
    },
    {
        label: "Planificacion",
        icon: IconCheckupList,
        links: [
            { label: "Instrumentos", link: "/" },
            { label: "Objetivos estratégicos y metas", link: "/" },
        ],
    },
    {
        label: "Plan de inversión",
        icon: IconFolders,
        links: [
            { label: "Programas y/o proyectos", link: "/" },
            { label: "Consolidado de programas y/o proyectos", link: "/" },
        ],
    },
    {
        label: "Avance de programas",
        icon: IconTrendingUp,
        links: [
            { label: "Programación y avance físico", link: "/" },
            { label: "Programacion y avance presupuestario", link: "/" },
        ],
    },
    {
        label: "Administrar Planificación",
        icon: IconListCheck,
        links: [
            { label: "Lineas Estrategicas", link: "/" },
            { label: "Competencias PDOT", link: "/" },
            { label: "Componentes PDOT", link: "/" },
            { label: "Categorias PDOT", link: "/" },
            { label: "Objetivos Estrategicos PDOT", link: "/" },
            { label: "Estrategias de Articulación", link: "/" },
            { label: "Metas PDOT", link: "/" },
            { label: "Modelo de Gestiones", link: "/" },
            { label: "Tipos de Planificación", link: "/" },
            { label: "Realización de Objetivos", link: "/" },
            { label: "Programas", link: "/" },
        ],
    },
];

export const lGestiones = [
    {
        label: "Dashboard",
        icon: IconChartPie,
        links: [{ label: "Inicio", link: "/" }],
    },
    {
        label: "Proveedores",
        icon: IconUsers,
        links: [{ label: "Ver proveedores", link: "/" }],
    },
    {
        label: "Programas",
        icon: IconFolders,
        initiallyOpened: true,
        links: [{ label: "Ver programas", link: "/" }],
    },
    {
        label: "Proyectos",
        icon: IconFiles,
        links: [{ label: "Ver proyectos", link: "/" }],
    },
    {
        label: "Actividades",
        icon: IconListTree,
        links: [{ label: "Ver actividades", link: "/" }],
    },
];

export const lMaximaAutoridad = [
    {
        label: "Dashboard",
        icon: IconUsers,
        links: [{ label: "Inicio", link: "/" }],
    },
];
