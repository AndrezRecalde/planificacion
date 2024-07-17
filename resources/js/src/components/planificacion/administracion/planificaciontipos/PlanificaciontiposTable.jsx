import { useCallback, useMemo } from "react";
import { useMantineReactTable } from "mantine-react-table";
import {
    BtnActiveStatus,
    MenuTableEdit,
    BtnSection,
    TableContent,
} from "../../../../components";
import { IconCopyPlus } from "@tabler/icons-react";

const planificaciontipos = [
    {
        id: 1,
        nombre_planificacion: "PEI",
        activo: true,
    },
    {
        id: 2,
        nombre_planificacion: "PDOT",
        activo: true,
    },
];

export const PlanificaciontiposTable = () => {
    const columns = useMemo(
        () => [
            {
                header: "Tipo de planificación",
                accessorKey: "nombre_planificacion",
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
        [planificaciontipos]
    );

    const handleActive = useCallback(() => {
        console.log("clic");
    }, [planificaciontipos]);

    const handleAgregar = useCallback(() => {
        console.log("agregar");
    }, [planificaciontipos]);

    const handleEditar = useCallback(() => {
        console.log("editar");
    }, [planificaciontipos]);

    const table = useMantineReactTable({
        columns,
        data: planificaciontipos, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
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
