import { useCallback, useMemo } from "react";
import { BtnActiveStatus, BtnSection, MenuTableEdit, TableContent } from "../../../../../components";
import { useMantineReactTable } from "mantine-react-table";
import { IconCopyPlus } from "@tabler/icons-react";

const componentespdot = [
    {
        id: 1,
        nombre_componente: "4. La gestión ambiental provincial",
        activo: true,
    },
    {
        id: 2,
        nombre_componente:
            "6.  Fomentar las actividades productivas provinciales, especialmente las agropecuarias; y, ",
        activo: true,
    },
    {
        id: 3,
        nombre_componente:
            "1. Planificar, junto con otras instituciones del sector público y actores de la sociedad, el desarrollo provincial y formular los correspondientes planes de ordenamiento territorial.",
        activo: false,
    },
];

export const ComponentepdotTable = () => {

    const columns = useMemo(
        () => [
            {
                header: "Nombre Competencia",
                accessorKey: "nombre_componente",
                minSize: 100, //min size enforced during resizing
                maxSize: 400, //max size enforced during resizing
                size: 300, //medium column
            },
            {
                accessorKey: "activo",
                header: "Activo",
                Cell: ({ cell }) => (
                    <BtnActiveStatus cell={cell} handleActive={handleActive} />
                ),
            },
        ],
        [componentespdot]
    );

    const handleActive = useCallback(() => {
        console.log("clic");
    }, [componentespdot]);

    const handleAgregar = useCallback(() => {
        console.log("agregar");
    }, [componentespdot]);

    const handleEditar = useCallback(() => {
        console.log("editar");
    }, [componentespdot]);

    const table = useMantineReactTable({
        columns,
        data: componentespdot, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        enableFacetedValues: true,
        enableDensityToggle: false,
        defaultColumn: { minSize: 80, maxSize: 200, size: 100 },

        //enableColumnFilters: false,
        //enablePagination: false,
        //enableSorting: false,
        enableRowActions: true,
        renderRowActionMenuItems: ({ row }) => (
            <MenuTableEdit row={row} handleEditar={handleEditar} />
        ),
        renderTopToolbarCustomActions: ({ table }) => (
            <BtnSection
                heigh={30}
                fontSize={12}
                icon={IconCopyPlus}
                handleAction={handleAgregar}
            >
                Agregar
            </BtnSection>
        ),
    });

    return <TableContent table={table} />;
};
