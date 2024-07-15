import { useMantineReactTable } from "mantine-react-table";
import { useCallback, useMemo } from "react";
import { BtnActiveStatus, BtnSection, MenuTableEdit, TableContent } from "../../../../../components";
import { IconCopyPlus } from "@tabler/icons-react";

const categoriaspdot = [
    {
        id: 1,
        nombre_categoria: "4. La gestión ambiental provincial",
        activo: true,
    },
    {
        id: 2,
        nombre_categoria:
            "6.  Fomentar las actividades productivas provinciales, especialmente las agropecuarias; y, ",
        activo: true,
    },
    {
        id: 3,
        nombre_categoria:
            "1. Planificar, junto con otras instituciones del sector público y actores de la sociedad, el desarrollo provincial y formular los correspondientes planes de ordenamiento territorial.",
        activo: false,
    },
];

export const CategoriapdotTable = () => {

    const columns = useMemo(
        () => [
            {
                header: "Nombre Categoria",
                accessorKey: "nombre_categoria",
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
        [categoriaspdot]
    );

    const handleActive = useCallback(() => {
        console.log("clic");
    }, [categoriaspdot]);

    const handleAgregar = useCallback(() => {
        console.log("agregar");
    }, [categoriaspdot]);

    const handleEditar = useCallback(() => {
        console.log("editar");
    }, [categoriaspdot]);

    const table = useMantineReactTable({
        columns,
        data: categoriaspdot, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
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
