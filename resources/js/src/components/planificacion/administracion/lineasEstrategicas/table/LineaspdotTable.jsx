import { useMantineReactTable } from "mantine-react-table";
import { useCallback, useMemo } from "react";
import {
    BtnSection,
    MenuTableEdit,
    TableContent,
} from "../../../../../components";
import { IconCopyPlus } from "@tabler/icons-react";

const lineaspdot = [
    {
        id: 1,
        nombre_linea: "Linea_1",
    },
    {
        id: 2,
        nombre_linea: "Linea_2",
    },
    {
        id: 3,
        nombre_linea: "Linea_3",
    },
];

export const LineaspdotTable = () => {
    const columns = useMemo(
        () => [
            {
                header: "Nombre Línea",
                accessorKey: "nombre_linea",
            },
        ],
        [lineaspdot]
    );

    const handleAgregar = useCallback(
        () => {
          console.log('agregar')
        },
        [lineaspdot],
      )

    const handleEditar = useCallback(() => {
        console.log("editar");
    }, [lineaspdot]);

    const table = useMantineReactTable({
        columns,
        data: lineaspdot, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        initialState: { density: "xs" },
        enableDensityToggle: false,
        enableColumnFilters: false,
        enablePagination: false,
        enableSorting: false,
        enableRowActions: true,
        renderRowActionMenuItems: ({ row }) => (
            <MenuTableEdit row={row} handleEditar={handleEditar} />
        ),
        renderTopToolbarCustomActions: ({ table }) => (
            <BtnSection heigh={30} fontSize={12} icon={IconCopyPlus} handleAction={handleAgregar}>
                Agregar
            </BtnSection>
        ),
    });

    return <TableContent table={table} />;
};
