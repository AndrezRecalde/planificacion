import { useCallback, useMemo } from "react";
import {
    MenuTableAddPermissions,
    MenuTableEdit,
    TableContent,
    TextSection,
} from "../../../../components";
import { useMantineReactTable } from "mantine-react-table";
import { Badge, List } from "@mantine/core";
import { useUiUsuario, useUsuarioStore } from "../../../../hooks";

export const PermissionsTable = () => {
    const { isLoading, usuarios, setActivateUsuario } = useUsuarioStore();
    const { modalActionAddPermissions } = useUiUsuario();

    const columns = useMemo(
        () => [
            {
                header: "Departamento",
                accessorKey: "departamento",
            },
            {
                header: "Usuario",
                id: "usuarios",
                accessorFn: (row) => (
                    <TextSection fz={14} fw={500}>
                        {row.apellidos + " " + row.nombres}
                    </TextSection>
                ),
            },
            {
                header: "Roles",
                id: "roles",
                accessorFn: (row) => (
                    <Badge color="cyan.5" variant="light">
                        {row.roles?.map((role) => role?.name)}
                    </Badge>
                ),
            },
            {
                header: "Permisos",
                id: "permisos",
                accessorFn: (row) => (
                    <List>
                        {row.permissions?.map((permission, index) => (
                            <List.Item key={index}>
                                {permission?.name}
                            </List.Item>
                        ))}
                    </List>
                ),
            },
        ],
        [usuarios]
    );

    const handleAddPermission = useCallback(
        (selected) => {
            console.log("clic");
            modalActionAddPermissions(true);
            setActivateUsuario(selected);
        },
        [usuarios]
    );

    const table = useMantineReactTable({
        columns,
        data: usuarios, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        state: { showProgressBars: isLoading },
        enableFacetedValues: true,
        enableDensityToggle: false,
        enableRowActions: true,
        renderRowActionMenuItems: ({ row }) => (
            <MenuTableAddPermissions row={row} handleAddPermission={handleAddPermission} />
        ),
        mantineTableProps: {
            withColumnBorders: true,
            withTableBorder: true,
            sx: {
                "thead > tr": {
                    backgroundColor: "inherit",
                },
                "thead > tr > th": {
                    backgroundColor: "inherit",
                },
                "tbody > tr > td": {
                    backgroundColor: "inherit",
                },
            },
        },
    });

    return <TableContent table={table} />;
};
