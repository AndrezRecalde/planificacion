import { useMemo } from "react";
import { useMantineReactTable } from "mantine-react-table";
import { MenuTableEdit, ProgressProyecto, TableContent } from "../../../../components";

const data = [
    {
        proyecto: "Nombre de proyecto 1 de gestion de TIC",
        tipo: "PDOT",
        nivel: "MEDIA",
        ponderacion: 10,
        progress: 40,
        status: "Open"
    },
    {
        proyecto: "Nombre de proyecto 2 de Gestion de TIC",
        tipo: "PDOT",
        nivel: "ALTA",
        ponderacion: 20,
        progress: 20,
        status: "En progreso"
    },
];

export const ProyectoTable = (props) => {
    const columns = useMemo(
        () => [
            {
                accessorKey: "proyecto", //access nested data with dot notation
                header: "Nombre de proyecto",
            },
            {
                accessorKey: "tipo", //access nested data with dot notation
                header: "Tipo de proyecto",
            },
            {
                accessorKey: "nivel", //normal accessorKey
                header: "Nivel",
                filterVariant: 'autocomplete',
            },
            {
                accessorKey: "ponderacion",
                header: "Ponderación",
            },
            {
                accessorKey: "progress",
                header: "Progreso",
                Cell: ({ cell }) => (
                    <ProgressProyecto cell={cell} classes={props} />
                ),
            },
            {
                accessorKey: "status",
                header: "Status",
                filterVariant: 'autocomplete',
            },
        ],
        []
    );

    const table = useMantineReactTable({
        columns,
        data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        enableFacetedValues: true,
        enableRowActions: true,

        /* renderTopToolbarCustomActions: ({ table }) => (
            <BtnSection heigh={45} variant="light" icon={IconLibraryPlus}>Nuevo Proyecto</BtnSection>
        ), */
        renderRowActionMenuItems: ({ row }) => (
            <MenuTableEdit />
        ),
    });

  return (
    <TableContent table={table} />
  )
}
