import { useCallback } from "react";
import { MenuTableEdit, TableContent } from "../../../../components"
import { useMantineReactTable } from "mantine-react-table";

export const PermissionsTable = () => {

    const columns = useMemo(
        () => [
            {
                header: "Departamento",
                accessorKey: "nombre_departamento",
            },
            {
                header: "Usuario",
                accessorFn: (row) => row.apellidos + row.nombres,
            },
            {
                header: "Role",
                accessorFn: (row) => row.roles.map(role => role.name),
            },
        ],
        [opndesarrollos]
    );

    const handleEditar = useCallback(
        (selected) => {
            setActivateOPN(selected);
            modalActionOPN(true);
        },
        [opndesarrollos]
    );

    const table = useMantineReactTable({
        columns,
        data: usuarios, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        state: { showProgressBars: isLoading },
        enableFacetedValues: true,
        enableDensityToggle: false,
        enableRowActions: true,
        renderRowActionMenuItems: ({ row }) => (
            <MenuTableEdit row={row} handleEditar={handleEditar} />
        ),
    });

  return (
    <TableContent table={table} />
  )
}
