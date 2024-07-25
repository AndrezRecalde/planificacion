import { useCallback, useMemo } from "react";
import { useMantineReactTable } from "mantine-react-table";
import { BtnSection, MenuTableEdit, TableContent } from "../../../../../components";
import { useEjeStore, useUiEje } from "../../../../../hooks";
import { IconCopyPlus } from "@tabler/icons-react";

export const EjeTable = () => {

    const { isLoading, ejes, setActivateEje } = useEjeStore();
    const { modalActionEje } = useUiEje();

        const columns = useMemo(
            () => [
                {
                    header: "Nombre Eje",
                    accessorKey: "nombre_eje",
                    minSize: 100, //min size enforced during resizing
                    maxSize: 400, //max size enforced during resizing
                    size: 300, //medium column
                },
            ],
            [ejes]
        );


    const handleAgregar = useCallback(() => {
        modalActionEje(true);
    }, [ejes]);

    const handleEditar = useCallback((selected) => {
        setActivateEje(selected);
        modalActionEje(true);
    }, [ejes]);

    const table = useMantineReactTable({
        columns,
        data: ejes, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
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

  return (
    <TableContent table={table} />
  )
}
