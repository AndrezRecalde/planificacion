import { useCallback, useMemo } from "react";
import { BtnActiveStatus, BtnSection, MenuTableEdit, TableContent } from "../../../../../components"
import { IconCopyPlus } from "@tabler/icons-react";
import { useMantineReactTable } from "mantine-react-table";

const odssostenibles = [

];

export const OdssostenibleTable = () => {

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

        },
        [odssostenibles]
    );

    const handleAgregar = useCallback(() => {

    }, [odssostenibles]);

    const handleEditar = useCallback(
        (selected) => {

        },
        [odssostenibles]
    );

    const table = useMantineReactTable({
        columns,
        data: odssostenibles, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        //state: { showProgressBars: isLoading },
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
