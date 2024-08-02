import { useCallback, useMemo } from "react";
import { useMantineReactTable } from "mantine-react-table";
import {
    BtnActiveStatus,
    BtnSection,
    MenuActionsVE,
    TableContent,
} from "../../../../../components";
import { useGobiernoStore, useUiGobierno } from "../../../../../hooks";
import { IconCopyPlus } from "@tabler/icons-react";

export const GobiernoTable = () => {
    const { isLoading, gobiernos, setActivateGobierno } = useGobiernoStore();
    const { modalActionGobierno, modalActionStatusGobierno } = useUiGobierno();

    const columns = useMemo(
        () => [
            {
                header: "Gobierno",
                accessorKey: "nombre_gobierno",
            },
            {
                header: "Presidente",
                accessorKey: "presidente",
            },
            {
                header: "Inicio periodo",
                accessorKey: "fecha_inicio",
            },
            {
                header: "Fin periodo",
                accessorKey: "fecha_fin",
            },
            {
                accessorKey: "activo",
                header: "Activo",
                Cell: ({ cell }) => (
                    <BtnActiveStatus cell={cell} handleActive={handleActive} />
                ),
            },
        ],
        [gobiernos]
    );

    const handleActive = useCallback(
        (selected) => {
            setActivateGobierno(selected);
            modalActionStatusGobierno(true);
        },
        [gobiernos]
    );

    const handleAgregar = useCallback(() => {
        modalActionGobierno(true);
    }, [gobiernos]);

    const handleEditar = useCallback(
        (selected) => {
            setActivateGobierno(selected);
            modalActionGobierno(true);
        },
        [gobiernos]
    );

    const table = useMantineReactTable({
        columns,
        data: gobiernos, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        state: { showProgressBars: isLoading },
        enableFacetedValues: true,
        enableDensityToggle: false,
        enableRowActions: true,
        renderRowActionMenuItems: ({ row }) => (
            <MenuActionsVE
                row={row}
                handleView={() => console.log("clic view")}
                handleEditar={handleEditar}
            />
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
