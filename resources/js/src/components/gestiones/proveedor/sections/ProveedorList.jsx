import { useCallback, useMemo } from "react";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { MenuTableEdit, TextSection } from "../../../../components";
import { IconCheck } from "@tabler/icons-react";
import { useProveedorStore, useUiProveedor } from "../../../../hooks";


export const ProveedorList = () => {
    const { isLoading, proveedores, setActivateProveedor, startDeleteProveedor } = useProveedorStore();
    const { modalActionProveedor } = useUiProveedor();
    const columns = useMemo(
        () => [
            {
                header: "Inicial",
                id: "inicial",
                accessorFn: (row) => row.nombre_proveedor.trim()[0],
                enableColumnFilter: false,
            },
            {
                header: "Nombre Proveedor",
                accessorFn: (row) => <TextSection fz={14} fw={700}>{row.nombre_proveedor}</TextSection>,
                enableGrouping: false, //do not let this column be grouped
            },
            {
                header: "Ruc",
                accessorKey: "ruc",
                enableGrouping: false, //do not let this column be grouped
            },
            {
                header: "Número de teléfono",
                accessorKey: "telefono",
                enableGrouping: false, //do not let this column be grouped
            },
        ],
        []
    );

    const handleEditar = useCallback((selected) => {
        setActivateProveedor(selected);
        modalActionProveedor(1);
    }, []);

    const handleEliminar = useCallback((selected) => {
        setActivateProveedor(selected);
        startDeleteProveedor(selected);
    }, []);

    const table = useMantineReactTable({
        columns,
        data: proveedores,
        state: { showProgressBars: isLoading },
        enableRowActions: true,
        enableGrouping: true,
        enableStickyHeader: true,
        enableStickyFooter: true,
        globalFilterFn: 'contains',
        renderRowActionMenuItems: ({ row }) => (
            <MenuTableEdit row={row} handleEditar={handleEditar} />
        ),
        initialState: {
            density: "xs",
            expanded: true,
            grouping: ["inicial"],
            pagination: { pageIndex: 0, pageSize: 10 },
            sorting: [{ id: "inicial", desc: false }],
        },
        mantineToolbarAlertBannerBadgeProps: {
            rightSection: <IconCheck size="1rem" />,
            color: "indigo",
            variant: "light",
        },
        mantineTableContainerProps: { sx: { maxHeight: 700 } },
    });

    return <MantineReactTable table={table} />;
};
