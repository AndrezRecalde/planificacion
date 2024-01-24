import { ActionIcon, Card, Container, Group, Text, Menu, rem, Button } from "@mantine/core";
import { useMemo } from "react";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import {
    IconDiscountCheckFilled,
    IconEditCircle,
    IconInfoOctagon,
    IconProgressAlert,
    IconTrash,
} from "@tabler/icons-react";
import classes from "./SectionsModule/Section.module.css";
import { IconPencilStar } from "@tabler/icons-react";
import { TitlePage } from "../../../../components";

const data = [
    {
        nombre_actividad: "261 Battle Ford",
        ponderacion: 10,
        status: 1,
        proyecto_id: 1,
    },
    {
        nombre_actividad: "566 Brakus Inlet",
        ponderacion: 20,
        status: 2,
        proyecto_id: 1,
    },
    {
        nombre_actividad: "7777 Kuhic Knoll",
        ponderacion: 20,
        status: 2,
        proyecto_id: 1,
    },
    {
        nombre_actividad: "722 Emie Stream",
        ponderacion: 20,
        status: 2,
        proyecto_id: 1,
    },
    {
        nombre_actividad: "1 Kuhic Knoll",
        ponderacion: 10,
        status: 3,
        proyecto_id: 1,
    },
];

const stats = [
    { title: "Planeado", value: "5" },
    { title: "Ejecutado", value: "4" },
];

export const ActivitiesProyecto = () => {
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
                header: "Actividad",
            },
            {
                accessorKey: "ponderacion",
                header: "Ponderación",
            },
            {
                accessorKey: "status", //normal accessorKey
                header: "Estado",
                Cell: ({ cell }) => (
                    <>
                        <ActionIcon
                            radius="xl"
                            variant="light"
                            onClick={(e) => console.log("clic")}
                            color={
                                cell.row.original.status === 1
                                    ? "teal"
                                    : cell.row.original.status === 2
                                    ? "orange"
                                    : "indigo"
                            }
                        >
                            {cell.row.original.status === 1 ? (
                                <IconInfoOctagon />
                            ) : cell.row.original.status === 2 ? (
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
        enableRowActions: true,
/*         renderTopToolbarCustomActions: ({ table }) => (
            <Button variant="light" color="indigo">
                Agregar Actividad
            </Button>
        ), */
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
        <Container size="xl" my="md">
            <Group justify="space-between" mb={20}>
            <TitlePage order={4} ta="left" title="Actividades del proyecto" />
            <Button variant="light" color="indigo.7">Agregar actividad</Button>
            </Group>
            <MantineReactTable table={table} />
        </Container>
    );
};
