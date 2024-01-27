import { useMemo } from "react";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { IconCheck } from "@tabler/icons-react";
import { MenuTable } from "../../../elements/tables/MenuTable";

const contactos = [
    {
        id: 1,
        nombre_proveedor: "Protelcotelsa",
        ruc: "0802704171",
        numero: "0939242242",
        departamento_id: 1,
    },
    {
        id: 1,
        nombre_proveedor: "Banecuador",
        ruc: "0802704444",
        numero: "0939242242",
        departamento_id: 1,
    },
    {
        id: 1,
        nombre_proveedor: "Mercado Libre",
        ruc: "0802704656",
        numero: "0939242242",
        departamento_id: 1,
    },
    {
        id: 1,
        nombre_proveedor: "Ecodep",
        ruc: "080270417655",
        numero: "0939242242",
        departamento_id: 1,
    },
    {
        id: 1,
        nombre_proveedor: "Petroecuador",
        ruc: "080270417335",
        numero: "093924277",
        departamento_id: 1,
    },
];

export const ProveedorList = () => {
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
                accessorKey: "nombre_proveedor",
                enableGrouping: false, //do not let this column be grouped
            },
            {
                header: "Ruc",
                accessorKey: "ruc",
                enableGrouping: false, //do not let this column be grouped
            },
            {
                header: "Número de teléfono",
                accessorKey: "numero",
                enableGrouping: false, //do not let this column be grouped
            },
        ],
        []
    );

    const table = useMantineReactTable({
        columns,
        data: contactos,
        enableRowActions: true,
        enableGrouping: true,
        enableStickyHeader: true,
        enableStickyFooter: true,
        globalFilterFn: 'contains',
        renderRowActionMenuItems: ({ row }) => (
            <MenuTable />
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
