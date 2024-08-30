import { useCallback, useMemo } from "react";
import {
    BtnActiveStatus,
    BtnSection,
    MenuTableEdit,
    TableContent,
} from "../../../../../components";
import { useMantineReactTable } from "mantine-react-table";
import { IconCopyPlus } from "@tabler/icons-react";
import { useMetapdotStore, useUiMetapdot } from "../../../../../hooks";


export const MetaspdotTable = () => {
    const { isLoading, metaspdot, setActivateMetapdot } = useMetapdotStore();
    const { modalActionMetapdot, modalActionStatusMetapdot } = useUiMetapdot();
    const columns = useMemo(
        () => [
            {
                header: "Estrategia de articulación",
                accessorKey: "nombre_articulacion",
                minSize: 100, //min size enforced during resizing
                maxSize: 400, //max size enforced during resizing
                size: 300, //medium column
                filterVariant: "autocomplete",
            },
            {
                header: "Meta del PDOT",
                accessorKey: "nombre_meta",
                minSize: 100, //min size enforced during resizing
                maxSize: 400, //max size enforced during resizing
                size: 300, //medium column
                filterVariant: "autocomplete",
            },
            {
                accessorKey: "activo",
                header: "Activo",
                Cell: ({ cell }) => (
                    <BtnActiveStatus cell={cell} handleActive={handleActive} />
                ),

            },
        ],
        [metaspdot]
    );

    const handleActive = useCallback((selected) => {
        setActivateMetapdot(selected);
        modalActionStatusMetapdot(true);
    }, [metaspdot]);

    const handleAgregar = useCallback(() => {
        modalActionMetapdot(true);
    }, [metaspdot]);

    const handleEditar = useCallback((selected) => {
        setActivateMetapdot(selected);
        modalActionMetapdot(true);
    }, [metaspdot]);

    const table = useMantineReactTable({
        columns,
        data: metaspdot, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
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
