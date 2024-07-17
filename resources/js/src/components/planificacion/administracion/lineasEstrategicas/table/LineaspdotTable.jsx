import { useMantineReactTable } from "mantine-react-table";
import { useCallback, useMemo } from "react";
import {
    BtnSection,
    MenuTableEdit,
    TableContent,
} from "../../../../../components";
import { IconCopyPlus } from "@tabler/icons-react";
import { useLineapdotStore, useUiLineapdot } from "../../../../../hooks";

export const LineaspdotTable = () => {
    const { isLoading, lineaspdot, setActivateLineapdot } = useLineapdotStore();
    const { modalActionLineapdot } = useUiLineapdot();
    const columns = useMemo(
        () => [
            {
                header: "Nombre Línea",
                accessorKey: "nombre_linea",
            },
        ],
        [lineaspdot]
    );

    const handleAgregar = useCallback(() => {
        modalActionLineapdot(true);
    }, [lineaspdot]);

    const handleEditar = useCallback(
        (selected) => {
            setActivateLineapdot(selected);
            modalActionLineapdot(true);
        },
        [lineaspdot]
    );

    const table = useMantineReactTable({
        columns,
        data: lineaspdot, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        state: { showProgressBars: isLoading },
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
