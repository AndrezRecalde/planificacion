import { Button, Menu, Progress, Group, Text, rem } from "@mantine/core";
import { IconEditCircle, IconTrash } from "@tabler/icons-react";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { useMemo } from "react";

const data = [
    {
        proyecto: "Nombre de proyecto 1 de gestion de TIC",
        tipo: "PDOT",
        nivel: "MEDIA",
        ponderacion: 10,
        progress: 40,
        status: "Open"
    },
    {
        proyecto: "Nombre de proyecto 2 de Gestion de TIC",
        tipo: "PDOT",
        nivel: "ALTA",
        ponderacion: 20,
        progress: 20,
        status: "En progreso"
    },
];

export const TableContent = (props) => {
    const columns = useMemo(
        () => [
            {
                accessorKey: "proyecto", //access nested data with dot notation
                header: "Nombre de proyecto",
            },
            {
                accessorKey: "tipo", //access nested data with dot notation
                header: "Tipo de proyecto",
            },
            {
                accessorKey: "nivel", //normal accessorKey
                header: "Nivel",
                filterVariant: 'autocomplete',
            },
            {
                accessorKey: "ponderacion",
                header: "Ponderación",
            },
            {
                accessorKey: "progress",
                header: "Progreso",
                Cell: ({ cell }) => (
                    <>
                        <Group justify="space-between">
                            <Text fz="xs" c="teal" fw={700}>
                                {cell.getValue()}%
                            </Text>
                            <Text fz="xs" c="red" fw={700}>
                                {100 - cell.getValue()}%
                            </Text>
                        </Group>
                        <Progress.Root>
                            <Progress.Section
                                {...props}
                                value={cell.getValue()}
                                color="teal"
                            />

                            <Progress.Section
                                {...props}
                                value={100 - cell.getValue()}
                                color="red"
                            />
                        </Progress.Root>
                    </>
                ),
            },
            {
                accessorKey: "status",
                header: "Status",
                filterVariant: 'autocomplete',
            },
        ],
        []
    );

    const table = useMantineReactTable({
        columns,
        data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        enableFacetedValues: true,
        enableRowActions: true,

        renderTopToolbarCustomActions: ({ table }) => (
            <Button variant="light" color="indigo">
                Nuevo Proyecto
            </Button>
        ),
        renderRowActionMenuItems: ({ row }) => (
            <>
                <Menu.Item
                    leftSection={
                        <IconEditCircle
                            style={{ width: rem(15), height: rem(15) }}
                        />
                    }
                    onClick={() => console.info("editar")}
                >
                    Editar
                </Menu.Item>
                <Menu.Item
                    leftSection={
                        <IconTrash
                            style={{ width: rem(15), height: rem(15) }}
                        />
                    }
                    onClick={() => console.info("eliminar")}
                >
                    Eliminar
                </Menu.Item>
            </>
        ),
    });

    return <MantineReactTable table={table} />;
};
