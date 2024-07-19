import { useCallback, useMemo } from "react";
import {
    BtnActiveStatus,
    BtnSection,
    MenuTableEdit,
    TableContent,
} from "../../../../../components";
import { useMantineReactTable } from "mantine-react-table";
import { IconCopyPlus } from "@tabler/icons-react";
import {
    useLestrategiapdotStore,
    useUiLestrategiapdot,
} from "../../../../../hooks";

export const LineasEstrategicasTable = () => {
    const { lestrategias, isLoading } = useLestrategiapdotStore();
    const { modalActionLestrategiapdot, modalActionStatusLestrategiapdot } =
        useUiLestrategiapdot();

    const columns = useMemo(
        () => [
            {
                header: "Línea Estrategica",
                accessorKey: "linea_estrategica",
                minSize: 100, //min size enforced during resizing
                maxSize: 400, //max size enforced during resizing
                size: 300, //medium column
            },
            {
                header: "Nombre Línea",
                accessorKey: "nombre_linea",
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
        [lestrategias]
    );

    const handleActive = useCallback(() => {
        modalActionStatusLestrategiapdot(true);
    }, [lestrategias]);

    const handleAgregar = useCallback(() => {
        modalActionLestrategiapdot(true);
    }, [lestrategias]);

    const handleEditar = useCallback(() => {
        console.log("editar");
    }, [lestrategias]);

    const table = useMantineReactTable({
        columns,
        data: lestrategias, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
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
