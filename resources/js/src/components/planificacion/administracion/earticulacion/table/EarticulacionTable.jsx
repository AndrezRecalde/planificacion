import { useCallback, useMemo } from "react";
import {
    BtnActiveStatus,
    BtnSection,
    MenuTableEdit,
    TableContent,
} from "../../../../../components";
import { useMantineReactTable } from "mantine-react-table";
import { IconCopyPlus } from "@tabler/icons-react";
import { useEarticulacionStore, useUiEarticulacion } from "../../../../../hooks";

export const EarticulacionTable = () => {
    const { isLoading, earticulaciones, setActivateEarticulacion } = useEarticulacionStore();
    const { modalActionEarticulacion, modalActionStatusEarticulacion } = useUiEarticulacion();
    const columns = useMemo(
        () => [
            {
                header: "Nombre Categoria",
                accessorKey: "nombre_articulacion",
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
        [earticulaciones]
    );

    const handleActive = useCallback((selected) => {
        console.log("clic");
        setActivateEarticulacion(selected);
        modalActionStatusEarticulacion(true);
    }, [earticulaciones]);

    const handleAgregar = useCallback(() => {
        modalActionEarticulacion(true);
    }, [earticulaciones]);

    const handleEditar = useCallback((selected) => {
        console.log("editar");
        setActivateEarticulacion(selected);
        modalActionEarticulacion(true);
    }, [earticulaciones]);

    const table = useMantineReactTable({
        columns,
        data: earticulaciones, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        state: { showProgressBars: isLoading },
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
