import {
    Card,
    Grid,
    Group,
    List,
    Paper,
    RingProgress,
    Text,
    ThemeIcon,
    rem,
} from "@mantine/core";
import { TextSection } from "../../../../../components";
import {
    IconBuildingBank,
    IconListTree,
    IconLocationCheck,
} from "@tabler/icons-react";
import classes from "./OverviewModule/Overview.module.css";

export const HeaderOverview = () => {
    return (
        <Card withBorder shadow="sm" radius="md">
            <Card.Section withBorder inheritPadding py="xs">
                <Grid>
                    <Grid.Col span={{ base: 6, xs: 3 }}>
                        <TextSection
                            fz="xs"
                            tt="uppercase"
                            fw={700}
                            title="Tipo de proyecto"
                        />
                        <TextSection
                            fz="md"
                            fw={500}
                            tt=""
                            title="PDOT"
                            color=""
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 6, xs: 3 }}>
                        <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                            Nivel
                        </Text>
                        <Text fz="md" fw={500}>
                            MEDIO
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={{ base: 6, xs: 3 }}>
                        <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                            Ponderación
                        </Text>
                        <Text fz="md" fw={500}>
                            10
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={{ base: 6, xs: 3 }}>
                        <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                            Tiempo en meses
                        </Text>
                        <Text fz="md" fw={500}>
                            12
                        </Text>
                    </Grid.Col>
                </Grid>
            </Card.Section>
        </Card>
    );
};

export const ProgressProyect = () => {
    return (
        <Card withBorder shadow="sm" radius="md">
            <Card.Section withBorder inheritPadding py="xs">
                <Group justify="center">
                    <RingProgress
                        size={150}
                        thickness={15}
                        sections={[
                            { value: 40, color: "cyan" },
                            { value: 15, color: "orange" },
                            { value: 15, color: "grape" },
                        ]}
                        label={
                            <TextSection
                                c="dimmed"
                                fw={700}
                                ta="center"
                                fz={20}
                                title="60%"
                            />
                        }
                    />
                </Group>
            </Card.Section>
            <Card.Section withBorder inheritPadding py="xs">
                <Grid>
                    <Grid.Col span={{ base: 6, xs: 6 }}>
                        <TextSection
                            fz="xs"
                            tt="uppercase"
                            fw={700}
                            color="dimmed"
                            title="Fecha inicial"
                        />
                        <TextSection
                            fz="md"
                            color=""
                            fw={500}
                            title="2023-05-11"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 6, xs: 6 }}>
                        <TextSection
                            fz="xs"
                            tt="uppercase"
                            fw={700}
                            color="dimmed"
                            title="Fecha límite"
                        />
                        <TextSection
                            fz="md"
                            color=""
                            fw={500}
                            title="2023-08-10"
                        />
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
    );
};

export const ProgressActivities = () => {
    return (
        <Card withBorder shadow="sm" radius="md">
            <Card.Section withBorder inheritPadding py="xs">
                <Group justify="center">
                    <RingProgress
                        size={250}
                        thickness={25}
                        sections={[
                            { value: 40, color: "cyan" },
                            { value: 15, color: "orange" },
                            { value: 15, color: "grape" },
                        ]}
                        label={
                            <TextSection
                                c="dimmed"
                                fw={700}
                                ta="center"
                                size="xl"
                                title="60%"
                            />
                        }
                    />
                </Group>
            </Card.Section>
            <Card.Section withBorder inheritPadding py="xs">
                <TextSection
                    fz="xs"
                    tt="uppercase"
                    fw={700}
                    c="dimmed"
                    title="Resumen del progreso"
                />
            </Card.Section>
        </Card>
    );
};

export const ActividadesOverview = () => {
    return (
        <Card withBorder shadow="sm" radius="md" mb="lg">
            <Card.Section withBorder inheritPadding py="xs">
                Actividades
            </Card.Section>
            <Card.Section withBorder inheritPadding py="xs">
                <List
                    spacing="md"
                    size="md"
                    center
                    icon={
                        <ThemeIcon color="teal" size={24} radius="xl">
                            <IconListTree
                                style={{
                                    width: rem(16),
                                    height: rem(16),
                                }}
                            />
                        </ThemeIcon>
                    }
                >
                    <List.Item>
                        Clone or download repository from GitHub
                    </List.Item>
                    <List.Item>Install dependencies with yarn</List.Item>
                    <List.Item>
                        To start development server run npm start command
                    </List.Item>
                    <List.Item>
                        Run tests to make sure your changes do not break the
                        build
                    </List.Item>
                </List>
            </Card.Section>
        </Card>
    );
};

export const DetailProyect = () => {
    return (
        <Card withBorder shadow="sm" radius="md" mb="lg">
            <Card.Section withBorder inheritPadding py="xs">
                <TextSection
                    fz="xs"
                    tt="uppercase"
                    fw={700}
                    c="dimmed"
                    title="Objetivo Estrategico"
                />

                <TextSection
                    fz="md"
                    fw={500}
                    title="2. Desarrollar la conectividad tecnologica y movilidad entre
                    los centros poblados, zonas productivas rurales y/o urbanas
                    para el intercambio de bienes y servicios."
                    color=""
                    tt=""
                />
            </Card.Section>
            <Card.Section withBorder inheritPadding py="xs">
                <TextSection
                    fz="xs"
                    tt="uppercase"
                    fw={700}
                    c="dimmed"
                    title="Tipo de Programa"
                />
                <TextSection fz="md" fw={500} title="PDOT" color="" tt="" />
            </Card.Section>
            <Card.Section withBorder inheritPadding py="xs">
                <TextSection
                    fz="xs"
                    tt="uppercase"
                    fw={700}
                    c="dimmed"
                    title="Programa"
                />
                <TextSection
                    fz="md"
                    fw={500}
                    color=""
                    tt=""
                    title="Alfabetización para mayor accecibilidad al conocimiento"
                />
            </Card.Section>
            <Card.Section withBorder inheritPadding py="xs">
                <TextSection
                    fz="xs"
                    tt="uppercase"
                    fw={700}
                    c="dimmed"
                    title="Línea Base"
                />

                <TextSection
                    fz="md"
                    fw={500}
                    color=""
                    tt=""
                    title="200 usuarios capacitados"
                />
            </Card.Section>
            <Card.Section withBorder inheritPadding py="xs">
                <TextSection
                    fz="xs"
                    tt="uppercase"
                    fw={700}
                    c="dimmed"
                    title="Meta"
                />
                <TextSection
                    fz="md"
                    fw={500}
                    color=""
                    tt=""
                    title="200 usuarios capacitados"
                />
            </Card.Section>
            <Card.Section withBorder inheritPadding py="xs">
                <TextSection
                    fz="xs"
                    tt="uppercase"
                    fw={700}
                    c="dimmed"
                    title="Indicador"
                />

                <TextSection
                    fz="md"
                    fw={500}
                    color=""
                    tt=""
                    title="200 usuarios capacitados"
                />
            </Card.Section>
        </Card>
    );
};

export const ActivitiesCenter = () => {
    return (
        <Card withBorder shadow="xl" radius="md">
            <Card.Section withBorder inheritPadding py="xs">
                Centro de actividades
            </Card.Section>
            <Card.Section withBorder inheritPadding py="xs">
                <List
                    spacing="md"
                    size="md"
                    center
                    icon={
                        <ThemeIcon color="indigo.7" size={24} radius="xl">
                            <IconLocationCheck
                                style={{
                                    width: rem(16),
                                    height: rem(16),
                                }}
                            />
                        </ThemeIcon>
                    }
                >
                    <List.Item>
                        Clone or download repository from GitHub
                    </List.Item>
                    <List.Item>Install dependencies with yarn</List.Item>
                    <List.Item>
                        To start development server run npm start command
                    </List.Item>
                    <List.Item>
                        Run tests to make sure your changes do not break the
                        build
                    </List.Item>
                </List>
            </Card.Section>
        </Card>
    );
};

export const SupplierStat = () => {
    return (
        <Paper
            radius="md"
            shadow="sm"
            withBorder
            className={classes.card}
            mt={40}
            mb={20}
        >
            <ThemeIcon
                className={classes.icon}
                color="indigo.7"
                size={60}
                radius={60}
            >
                <IconBuildingBank
                    style={{ width: rem(32), height: rem(32) }}
                    stroke={1.5}
                />
            </ThemeIcon>

            <Grid>
                <Grid.Col span={{ base: 12, xs: 6 }}>
                    <TextSection
                        ta="center"
                        fw={700}
                        className={classes.title}
                        title="El proyecto es"
                        fz="sm"
                        color=""
                    />
                    <TextSection
                        ta="center"
                        fz="md"
                        tt=""
                        title="Presupuestario"
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 6 }}>
                    <TextSection
                        ta="center"
                        fw={700}
                        className={classes.title}
                        title="Proveedor"
                        fz="sm"
                        color=""
                    />
                    <TextSection
                        ta="center"
                        fz="md"
                        tt=""
                        title="Protelcotelsa S.A"
                    />
                </Grid.Col>
            </Grid>
        </Paper>
    );
};
