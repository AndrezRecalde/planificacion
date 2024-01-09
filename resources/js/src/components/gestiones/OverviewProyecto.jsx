import {
    Card,
    Container,
    Grid,
    Group,
    Paper,
    RingProgress,
    Skeleton,
    Stack,
    Text,
} from "@mantine/core";

export const OverviewProyecto = () => {
    const child = <Skeleton height={140} radius="md" animate={false} />;

    return (
        <Container size="lg" my="md">
            <Grid>
                <Grid.Col span={{ base: 12, xs: 4 }}>
                    <Card withBorder shadow="sm" radius="md">
                        <Card.Section withBorder inheritPadding py="xs">
                            <Group justify="center">
                                <RingProgress
                                    size={200}
                                    thickness={15}
                                    roundCaps
                                    sections={[
                                        { value: 40, color: "cyan" },
                                        { value: 15, color: "orange" },
                                        { value: 15, color: "grape" },
                                    ]}
                                    label={
                                        <Text
                                            c="dimmed"
                                            fw={700}
                                            ta="center"
                                            size="xl"
                                        >
                                            60%
                                        </Text>
                                    }
                                />
                            </Group>
                        </Card.Section>
                        <Card.Section withBorder inheritPadding py="xs">
                            <Grid>
                                <Grid.Col span={{ base: 6, xs: 6 }}>
                                    <Text
                                        fz="xs"
                                        tt="uppercase"
                                        fw={700}
                                        c="dimmed"
                                    >
                                        Fecha Inicial
                                    </Text>
                                    <Text fz="md" fw={500}>
                                        2023-05-11
                                    </Text>
                                </Grid.Col>
                                <Grid.Col span={{ base: 6, xs: 6 }}>
                                    <Text
                                        fz="xs"
                                        tt="uppercase"
                                        fw={700}
                                        c="dimmed"
                                    >
                                        Fecha Límite
                                    </Text>
                                    <Text fz="md" fw={500}>
                                        2023-08-10
                                    </Text>
                                </Grid.Col>
                            </Grid>
                        </Card.Section>
                        <Card.Section withBorder inheritPadding py="xs">
                            <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                                Estado del proyecto
                            </Text>
                            <Text fz="md" fw={500}>
                                Abierto
                            </Text>
                        </Card.Section>
                    </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 8 }}>
                    <Card withBorder shadow="sm" radius="md">
                        <Card.Section withBorder inheritPadding py="xs">
                            <Grid>
                                <Grid.Col span={{ base: 3, xs: 3 }}>
                                    <Text
                                        fz="xs"
                                        tt="uppercase"
                                        fw={700}
                                        c="dimmed"
                                    >
                                        Tipo de Proyecto
                                    </Text>
                                    <Text fz="md" fw={500}>
                                        PDOT
                                    </Text>
                                </Grid.Col>
                                <Grid.Col span={{ base: 3, xs: 3 }}>
                                    <Text
                                        fz="xs"
                                        tt="uppercase"
                                        fw={700}
                                        c="dimmed"
                                    >
                                        Nivel
                                    </Text>
                                    <Text fz="md" fw={500}>
                                        MEDIO
                                    </Text>
                                </Grid.Col>
                                <Grid.Col span={{ base: 3, xs: 3 }}>
                                    <Text
                                        fz="xs"
                                        tt="uppercase"
                                        fw={700}
                                        c="dimmed"
                                    >
                                        Ponderación
                                    </Text>
                                    <Text fz="md" fw={500}>
                                        10
                                    </Text>
                                </Grid.Col>
                                <Grid.Col span={{ base: 3, xs: 3 }}>
                                    <Text
                                        fz="xs"
                                        tt="uppercase"
                                        fw={700}
                                        c="dimmed"
                                    >
                                        Tiempo en meses
                                    </Text>
                                    <Text fz="md" fw={500}>
                                        12
                                    </Text>
                                </Grid.Col>
                            </Grid>
                        </Card.Section>
                        <Card.Section withBorder inheritPadding py="xs">
                            <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                                Objetivo Estrategico
                            </Text>
                            <Text fz="md" fw={500}>
                                2. Desarrollar la conectividad tecnologica y
                                movilidad entre los centros poblados, zonas
                                productivas rurales y/o urbanas para el
                                intercambio de bienes y servicios
                            </Text>
                        </Card.Section>
                        <Card.Section withBorder inheritPadding py="xs">
                            <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                                Programa
                            </Text>
                            <Text fz="md" fw={500}>
                                Alfabetización para mayor accecibilidad al
                                conocimiento
                            </Text>
                        </Card.Section>
                        <Card.Section withBorder inheritPadding py="xs">
                            <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                                Programa
                            </Text>
                            <Text fz="md" fw={500}>
                                Alfabetización para mayor accecibilidad al
                                conocimiento
                            </Text>
                        </Card.Section>
                    </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
                <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
                {/* <Grid.Col span={{ base: 12, xs: 3 }}>{child}</Grid.Col>
                <Grid.Col span={{ base: 12, xs: 3 }}>{child}</Grid.Col>
                <Grid.Col span={{ base: 12, xs: 6 }}>{child}</Grid.Col> */}
            </Grid>
        </Container>
    );
};
