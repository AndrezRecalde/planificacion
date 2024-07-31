import { useCallback, useMemo } from "react";
import {
    BtnSection,
    MenuTableEdit,
    TableContent,
} from "../../../../../components";
import { useMantineReactTable } from "mantine-react-table";
import { IconCopyPlus } from "@tabler/icons-react";
import { useOPNStore, useUiOPN } from "../../../../../hooks";

export const ObjetivosPlanNacionalTable = () => {
    const { isLoading, OPN: opndesarrollos, setActivateOPN } = useOPNStore();
    const { modalActionOPN } = useUiOPN();

    const columns = useMemo(
        () => [
            {
                header: "Gobierno",
                accessorKey: "nombre_gobierno",
            },
            {
                header: "Objetivo",
                accessorKey: "objetivo_opn",
            },
            {
                header: "Eje",
                accessorKey: "nombre_eje",
            },
        ],
        [opndesarrollos]
    );

    const handleAgregar = useCallback(() => {
        modalActionOPN(true);
    }, [opndesarrollos]);

    const handleEditar = useCallback(
        (selected) => {
            setActivateOPN(selected);
            modalActionOPN(true);
        },
        [opndesarrollos]
    );

    const table = useMantineReactTable({
        columns,
        data: opndesarrollos, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        state: { showProgressBars: isLoading },
        enableFacetedValues: true,
        enableDensityToggle: false,
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
