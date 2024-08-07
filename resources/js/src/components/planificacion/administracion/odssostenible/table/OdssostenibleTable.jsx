import { useCallback, useMemo } from "react";
import { BtnActiveStatus, BtnSection, MenuTableEdit, TableContent } from "../../../../../components"
import { IconCopyPlus } from "@tabler/icons-react";
import { useMantineReactTable } from "mantine-react-table";
import { useOdssostenibleStore, useUiOdssostenible } from "../../../../../hooks";

const odssostenibles = [

];

export const OdssostenibleTable = () => {
    const { isLoading, odssostenibles, setActivateOdssostenible } = useOdssostenibleStore();
    const { modalActionOdssostenible } = useUiOdssostenible();

    const columns = useMemo(
        () => [
            {
                header: "Objetivo desarrollo sostenible",
                accessorKey: "nombre_ods",
            },
            {
                header: "Logo",
                accessorKey: "imagen_url",
            },
            {
                accessorKey: "activo",
                header: "Activo",
                Cell: ({ cell }) => (
                    <BtnActiveStatus cell={cell} handleActive={handleActive} />
                ),
            },
        ],
        [odssostenibles]
    );

    const handleActive = useCallback(
        (selected) => {
            //setActivateOdssostenible(selected);
        },
        [odssostenibles]
    );

    const handleAgregar = useCallback(() => {
        modalActionOdssostenible(true);
    }, [odssostenibles]);

    const handleEditar = useCallback(
        (selected) => {
            setActivateOdssostenible(selected);
            modalActionOdssostenible(true);
        },
        [odssostenibles]
    );

    const table = useMantineReactTable({
        columns,
        data: odssostenibles, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        state: { showProgressBars: isLoading },
        enableFacetedValues: true,
        enableDensityToggle: false,
        enableRowActions: true,
        renderRowActionMenuItems: ({ row }) => (
            <MenuTableEdit
                row={row}
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

  return (
    <TableContent table={table} />
  )
}
