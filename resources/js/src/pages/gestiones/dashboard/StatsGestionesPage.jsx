import {
    Container,
    Group,
    Paper,
    SimpleGrid,
    Text,
    Progress,
    Box,
    rem,
    Grid,
    Card,
    Badge,
    ThemeIcon,
    Avatar,
    ScrollArea,
} from "@mantine/core";
import { TextSection, TitlePage } from "../../../components";
import {
    IconFiles,
    IconFolders,
    IconListTree,
    IconBrandCashapp,
    IconDeviceAnalytics,
    IconArrowUpRight,
    IconCash,
    IconReportMoney,
} from "@tabler/icons-react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import classes from "./DashboardModule/Dashboard.module.css";
import classess from "./DashboardModule/HeaderState.module.css";

const icons = {
    programas: IconFolders,
    proyectos: IconFiles,
    actividades: IconListTree,
    presupuesto: IconBrandCashapp,
};

const data1 = [
    { title: "Programas", icon: "programas", value: "12", diff: 34 },
    { title: "Proyectos", icon: "proyectos", value: "15", diff: -13 },
    { title: "Actividades", icon: "actividades", value: "120", diff: 18 },
    {
        title: "Presupuesto",
        icon: "presupuesto",
        value: "1.200,346.55",
        diff: -30,
    },
];

const data = [
    { label: "Mobile", count: "204,001", part: 59, color: "#47d6ab" },
    { label: "Desktop", count: "121,017", part: 35, color: "#03141a" },
    { label: "Tablet", count: "31,118", part: 6, color: "#4fcdf7" },
];

const data2 = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
        {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
        },
    ],
};

const PRIMARY_COL_HEIGHT = rem(300);

export const StatsGestionesPage = () => {
    ChartJS.register(ArcElement, Tooltip, Legend);

    /* Header Stats */
    const stats = data1.map((stat) => {
        const Icon = icons[stat.icon];

        return (
            <Paper withBorder p="md" radius="md" key={stat.title}>
                <Group justify="space-between">
                    <Text size="sm" c="dimmed" className={classes.title}>
                        {stat.title}
                    </Text>
                    <Icon className={classes.icon} size="1.5rem" stroke={1.9} />
                </Group>

                <Group align="flex-end" gap="xs" mt={15}>
                    <Text fz={16} className={classes.value}>
                        {stat.value}
                    </Text>
                </Group>

                <Text fz="xs" c="dimmed" mt={7}>
                    Compared to previous month
                </Text>
            </Paper>
        );
    });

    /* Progress BAR Actividades */
    const segments = data.map((segment) => (
        <Progress.Section
            value={segment.part}
            color={segment.color}
            key={segment.color}
        >
            {segment.part > 10 && (
                <Progress.Label>{segment.part}%</Progress.Label>
            )}
        </Progress.Section>
    ));

    const descriptions = data.map((stat) => (
        <Box
            key={stat.label}
            style={{ borderBottomColor: stat.color }}
            className={classes.stat}
        >
            <Text tt="uppercase" fz="xs" c="dimmed" fw={700}>
                {stat.label}
            </Text>

            <Group justify="space-between" align="flex-end" gap={0}>
                <Text fw={700}>{stat.count}</Text>
                <Text
                    c={stat.color}
                    fw={700}
                    size="sm"
                    className={classes.statCount}
                >
                    {stat.part}%
                </Text>
            </Group>
        </Box>
    ));

    return (
        <Container size="xl" my="md">
            <TitlePage order={2} ta="left" title="Dashboard" />
            <TextSection
                fz={18}
                fw={500}
                tt=""
                fs="italic"
                title="Bienvenido, Cristhian Recalde"
            />
            <div className={classes.root}>
                {/* Header Stats */}
                <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }} mb={20}>
                    {stats}
                </SimpleGrid>

                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" mb={20}>
                    <Card withBorder shadow="sm" radius="md">
                        <Card.Section withBorder inheritPadding py="xs">
                            Centro de actividades global
                        </Card.Section>
                        <Card.Section withBorder inheritPadding py="xs">
                            <ScrollArea h={400}>
                                <div>
                                    <Group>
                                        <Avatar
                                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
                                            alt="Jacob Warnhalter"
                                            radius="xl"
                                        />
                                        <div>
                                            <Text size="sm">
                                                Jacob Warnhalter
                                            </Text>
                                            <Text size="xs" c="dimmed">
                                                10 minutes ago
                                            </Text>
                                        </div>
                                    </Group>
                                    <Text mb={20} pl={54} pt="sm" size="sm">
                                        This Pokémon likes to lick its palms
                                        that accurate.
                                    </Text>
                                </div>
                                <div>
                                    <Group>
                                        <Avatar
                                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
                                            alt="Jacob Warnhalter"
                                            radius="xl"
                                        />
                                        <div>
                                            <Text size="sm">
                                                Jacob Warnhalter
                                            </Text>
                                            <Text size="xs" c="dimmed">
                                                10 minutes ago
                                            </Text>
                                        </div>
                                    </Group>
                                    <Text mb={20} pl={54} pt="sm" size="sm">
                                        This Pokémon likes to lick its palms
                                        that accurate.
                                    </Text>
                                </div>
                                <div>
                                    <Group>
                                        <Avatar
                                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
                                            alt="Jacob Warnhalter"
                                            radius="xl"
                                        />
                                        <div>
                                            <Text size="sm">
                                                Jacob Warnhalter
                                            </Text>
                                            <Text size="xs" c="dimmed">
                                                10 minutes ago
                                            </Text>
                                        </div>
                                    </Group>
                                    <Text mb={20} pl={54} pt="sm" size="sm">
                                        This Pokémon likes to lick its palms
                                        that accurate.
                                    </Text>
                                </div>
                                <div>
                                    <Group>
                                        <Avatar
                                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
                                            alt="Jacob Warnhalter"
                                            radius="xl"
                                        />
                                        <div>
                                            <Text size="sm">
                                                Jacob Warnhalter
                                            </Text>
                                            <Text size="xs" c="dimmed">
                                                10 minutes ago
                                            </Text>
                                        </div>
                                    </Group>
                                    <Text mb={20} pl={54} pt="sm" size="sm">
                                        This Pokémon likes to lick its palms
                                        that accurate.
                                    </Text>
                                </div>
                                <div>
                                    <Group>
                                        <Avatar
                                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
                                            alt="Jacob Warnhalter"
                                            radius="xl"
                                        />
                                        <div>
                                            <Text size="sm">
                                                Jacob Warnhalter
                                            </Text>
                                            <Text size="xs" c="dimmed">
                                                10 minutes ago
                                            </Text>
                                        </div>
                                    </Group>
                                    <Text mb={20} pl={54} pt="sm" size="sm">
                                        This Pokémon likes to lick its palms
                                        that accurate.
                                    </Text>
                                </div>
                                <div>
                                    <Group>
                                        <Avatar
                                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
                                            alt="Jacob Warnhalter"
                                            radius="xl"
                                        />
                                        <div>
                                            <Text size="sm">
                                                Jacob Warnhalter
                                            </Text>
                                            <Text size="xs" c="dimmed">
                                                10 minutes ago
                                            </Text>
                                        </div>
                                    </Group>
                                    <Text mb={20} pl={54} pt="sm" size="sm">
                                        This Pokémon likes to lick its palms
                                        that accurate.
                                    </Text>
                                </div>

                            </ScrollArea>
                        </Card.Section>
                    </Card>

                    <Grid gutter="md">
                        <Grid.Col span={6}>
                            <Paper
                                radius="md"
                                withBorder
                                className={classess.card}
                                mt={20}
                            >
                                <ThemeIcon
                                    className={classess.icon}
                                    size={60}
                                    radius={60}
                                >
                                    <IconCash
                                        style={{
                                            width: rem(32),
                                            height: rem(32),
                                        }}
                                        stroke={1.5}
                                    />
                                </ThemeIcon>

                                <Text
                                    ta="center"
                                    fw={700}
                                    className={classess.title}
                                >
                                    Presupuesto Planeado
                                </Text>
                                <Text
                                    mt={20}
                                    fw={700}
                                    c="dimmed"
                                    ta="center"
                                    fz="md"
                                >
                                    250.456.75 $
                                </Text>

                                <Group justify="space-between" mt="xs">
                                    <Text fz="sm" c="dimmed">
                                        Progreso
                                    </Text>
                                    <Text fz="sm" c="dimmed">
                                        62%
                                    </Text>
                                </Group>

                                <Progress value={62} mt={5} />
                            </Paper>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Paper
                                radius="md"
                                withBorder
                                className={classess.card}
                                mt={20}
                            >
                                <ThemeIcon
                                    className={classess.icon}
                                    size={60}
                                    radius={60}
                                >
                                    <IconReportMoney
                                        style={{
                                            width: rem(32),
                                            height: rem(32),
                                        }}
                                        stroke={1.5}
                                    />
                                </ThemeIcon>

                                <Text
                                    ta="center"
                                    fw={700}
                                    className={classess.title}
                                >
                                    Presupuesto Ejecutado
                                </Text>
                                <Text
                                    mt={20}
                                    fw={700}
                                    c="dimmed"
                                    ta="center"
                                    fz="md"
                                >
                                    250.456.75 $
                                </Text>

                                <Group justify="space-between" mt="xs">
                                    <Text fz="sm" c="dimmed">
                                        Progress
                                    </Text>
                                    <Text fz="sm" c="dimmed">
                                        38%
                                    </Text>
                                </Group>

                                <Progress value={38} mt={5} />
                            </Paper>
                        </Grid.Col>
                        <Grid.Col>
                            <Paper withBorder p="md" radius="md">
                                <Group justify="space-between">
                                    <Group align="flex-end" gap="xs">
                                        <Text fz="xl" fw={700}>
                                            Progreso del departamento
                                        </Text>

                                    </Group>
                                    <IconDeviceAnalytics
                                        size="1.4rem"
                                        className={classes.icon}
                                        stroke={1.5}
                                    />
                                </Group>

                                <Progress.Root
                                    size={34}
                                    classNames={{
                                        label: classes.progressLabel,
                                    }}
                                    mt={40}
                                >
                                    {segments}
                                </Progress.Root>
                                <SimpleGrid cols={{ base: 1, xs: 3 }} mt="xl">
                                    {descriptions}
                                </SimpleGrid>
                            </Paper>
                        </Grid.Col>
                    </Grid>
                </SimpleGrid>

                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                    <Card withBorder shadow="sm" radius="md">
                        <Card.Section withBorder inheritPadding py="xs">
                            <TextSection
                                fz="sm"
                                tt="uppercase"
                                fw={700}
                                title="Distribución de proyectos"
                            />
                        </Card.Section>
                        <Card.Section withBorder inheritPadding py="xs">
                            <Pie
                                data={data2}
                                height={400}
                                options={{ maintainAspectRatio: false }}
                            />
                        </Card.Section>
                    </Card>
                    <Card withBorder shadow="sm" radius="md">
                        <Card.Section withBorder inheritPadding py="xs">
                            <TextSection
                                fz="sm"
                                tt="uppercase"
                                fw={700}
                                title="Distribución de actividades"
                            />
                        </Card.Section>
                        <Card.Section withBorder inheritPadding py="xs">
                            <Pie
                                data={data2}
                                height={400}
                                options={{ maintainAspectRatio: false }}
                            />
                        </Card.Section>
                    </Card>
                </SimpleGrid>
            </div>
        </Container>
    );
};
