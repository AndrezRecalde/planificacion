import { useCallback, useMemo } from "react";
import { BtnActiveStatus, BtnSection, MenuTableEdit, TableContent } from "../../../../../components";
import { useMantineReactTable } from "mantine-react-table";
import { IconCopyPlus } from "@tabler/icons-react";
import { useComponentepdotStore, useUiComponentepdot } from "../../../../../hooks";

export const ComponentepdotTable = () => {
    const { modalActionComponentepdot, modalActionStatusComponentepdot } = useUiComponentepdot();
    const { componentespdot, isLoading, setActivateComponentepdot } = useComponentepdotStore();

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

    const handleActive = useCallback((selected) => {
        setActivateComponentepdot(selected);
        modalActionStatusComponentepdot(true);
    }, [componentespdot]);

    const handleAgregar = useCallback(() => {
        modalActionComponentepdot(true);
    }, [componentespdot]);

    const handleEditar = useCallback((selected) => {
        setActivateComponentepdot(selected);
        modalActionComponentepdot(true);
    }, [componentespdot]);

    const table = useMantineReactTable({
        columns,
        data: componentespdot, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        state: { showProgressBars: isLoading },
        enableFacetedValues: true,
        enableDensityToggle: false,
        defaultColumn: { minSize: 80, maxSize: 200, size: 100 },
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
