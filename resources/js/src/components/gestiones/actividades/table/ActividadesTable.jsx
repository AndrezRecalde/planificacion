import { useMemo } from "react";
import { ActionIcon, Card, Group, Text, Menu, rem } from "@mantine/core";
import { useMantineReactTable, MantineReactTable } from "mantine-react-table";
import {
    IconDiscountCheckFilled,
    IconEditCircle,
    IconInfoOctagon,
    IconPencilStar,
    IconProgressAlert,
    IconTrash,
} from "@tabler/icons-react";

const data = [
    {
        nombre_actividad: "Nombre de actividad 1 de gestion de TIC",
        ponderacion: 5,
        status_id: 1,
        proyecto_id: "Proyecto numero 1 de GTIC",
    },
    {
        nombre_actividad: "Nombre de actividad 2 de Gestion de TIC",
        ponderacion: 20,
        status_id: 2,
        proyecto_id: "Proyecto numero 2 de GTIC",
    },
    {
        nombre_actividad: "Nombre de actividad 2 de Gestion de TIC",
        ponderacion: 10,
        status_id: 1,
        proyecto_id: "Proyecto numero 2 de GTIC",
    },
    {
        nombre_actividad: "Nombre de actividad 2 de Gestion de TIC",
        ponderacion: 10,
        status_id: 3,
        proyecto_id: "Proyecto numero 2 de GTIC",
    },
    {
        nombre_actividad: "Nombre de actividad 2 de Gestion de TIC",
        ponderacion: 20,
        status_id: 2,
        proyecto_id: "Proyecto numero 2 de GTIC",
    },
];

const stats = [
    { title: "Planeado", value: "5" },
    { title: "Ejecutado", value: "4" },
];

export const ActividadesTable = ({ classes }) => {

    const items = stats.map((stat) => (
        <div key={stat.title}>
            <Text size="xs" c="dimmed">
                {stat.title}
            </Text>
            <Text fw={500} size="sm">
                {stat.value}
            </Text>
        </div>
    ));

    const columns = useMemo(
        () => [
            {
                accessorKey: "nombre_actividad", //access nested data with dot notation
                header: "Nombre de actividad",
            },
            {
                accessorKey: "ponderacion", //access nested data with dot notation
                header: "Ponderación",
            },
            {
                accessorKey: "status_id", //normal accessorKey
                header: "Estado",
                Cell: ({ cell }) => (
                    <>
                        <ActionIcon
                            radius="xl"
                            variant="light"
                            onClick={(e) => console.log("clic")}
                            color={
                                cell.row.original.status_id === 1
                                    ? "teal"
                                    : cell.row.original.status_id === 2
                                    ? "orange"
                                    : "indigo"
                            }
                        >
                            {cell.row.original.status_id === 1 ? (
                                <IconInfoOctagon />
                            ) : cell.row.original.status_id === 2 ? (
                                <IconProgressAlert />
                            ) : (
                                <IconDiscountCheckFilled />
                            )}
                        </ActionIcon>
                    </>
                ),
            },
        ],
        []
    );

    const table = useMantineReactTable({
        columns,
        data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        enableFacetedValues: true,
        enableRowActions: true,
        renderDetailPanel: ({ row }) => (
            <Group grow>
                <Card withBorder padding="lg" className={classes.card}>
                    <Text fz="sm" mb={10} fw={700} className={classes.title}>
                        Primer Trimestre (I)
                    </Text>
                    <Card.Section className={classes.footer}>
                        {items}
                    </Card.Section>
                </Card>
                <Card withBorder padding="lg" className={classes.card}>
                    <Text fz="sm" mb={10} fw={700} className={classes.title}>
                        Segundo Trimestre (II)
                    </Text>
                    <Card.Section className={classes.footer}>
                        {items}
                    </Card.Section>
                </Card>
                <Card withBorder padding="lg" className={classes.card}>
                    <Text fz="sm" mb={10} fw={700} className={classes.title}>
                        Tercer Trimestre (III)
                    </Text>
                    <Card.Section className={classes.footer}>
                        {items}
                    </Card.Section>
                </Card>
                <Card withBorder padding="lg" className={classes.card}>
                    <Text fz="sm" mb={10} fw={700} className={classes.title}>
                        Cuarto Trimestre (IV)
                    </Text>
                    <Card.Section className={classes.footer}>
                        {items}
                    </Card.Section>
                </Card>
            </Group>
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
                        <IconPencilStar
                            style={{ width: rem(15), height: rem(15) }}
                        />
                    }
                    onClick={() => console.info("editar")}
                >
                    Asignar trimestre
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

    return (
        <MantineReactTable table={table} />
    );
};
