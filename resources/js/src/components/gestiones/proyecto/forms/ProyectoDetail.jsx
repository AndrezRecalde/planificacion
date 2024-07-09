import {
    ActionIcon,
    Avatar,
    Badge,
    Card,
    Grid,
    Group,
    List,
    RingProgress,
    SimpleGrid,
    Text,
    Tooltip,
} from "@mantine/core";
import { TextSection } from "../../../../components";

import classes from "../../../../assets/styles/gestiones/proyecto/ProyectoDetail.module.css";
import { IconCopyPlus } from "@tabler/icons-react";

export const ProyectoDetail = () => {
    return (
        <Card padding="md">
            <Card.Section inheritPadding py="xs">
                <Group justify="space-between">
                    <Group>
                        <Badge variant="light" color="indigo.7" radius="sm">
                            PRESUPUESTARIO
                        </Badge>
                        <Badge variant="light" color="teal" radius="sm">
                            PDOT
                        </Badge>
                    </Group>
                    <Tooltip.Group openDelay={300} closeDelay={100}>
                        <Avatar.Group spacing="sm">
                            <Tooltip label="Fin de la pobreza" withArrow>
                                <Avatar
                                    src="https://prefecturadeesmeraldas.gob.ec/wp-content/uploads/2024/07/findelapobreza.jpg"
                                    radius="xl"
                                />
                            </Tooltip>
                            <Tooltip label="Educacion de calidad" withArrow>
                                <Avatar
                                    src="https://prefecturadeesmeraldas.gob.ec/wp-content/uploads/2024/07/S_SDG_Icons-01-04.jpg"
                                    radius="xl"
                                />
                            </Tooltip>
                            <Tooltip label="Trabajo crecimiento" withArrow>
                                <Avatar
                                    src="https://prefecturadeesmeraldas.gob.ec/wp-content/uploads/2024/07/S_SDG_Icons-01-08.jpg"
                                    radius="xl"
                                />
                            </Tooltip>
                            <Tooltip
                                withArrow
                                label={
                                    <>
                                        <div>John Outcast</div>
                                        <div>Levi Capitan</div>
                                    </>
                                }
                            >
                                <Avatar radius="xl">+2</Avatar>
                            </Tooltip>
                        </Avatar.Group>
                    </Tooltip.Group>
                </Group>
            </Card.Section>
            <Card.Section withBorder inheritPadding py="xs">
                <Grid>
                    <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
                        <TextSection fz={12} fw={700} color="dimmed">
                            Programa:
                        </TextSection>
                        <TextSection
                            tt=""
                            fz={14}
                            className={classes.justificado}
                        >
                            Incorporar Infraestructura acorde con el incremento
                            de capacidades, carga de trabajo, almacenamiento
                            contingencias y ciclos de vida de los recursos
                            tecnologicos.
                        </TextSection>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
                        <TextSection fz={12} fw={700} color="dimmed">
                            Objetivo Estrategico:
                        </TextSection>
                        <TextSection
                            tt=""
                            fz={14}
                            className={classes.justificado}
                        >
                            4. Posicionar al Gobierno Provincial como una
                            institución eficiente, eficaz e innovadora.
                        </TextSection>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
                        <TextSection fz={12} fw={700} color="dimmed">
                            Proyecto:
                        </TextSection>
                        <TextSection
                            tt=""
                            fz={14}
                            className={classes.justificado}
                        >
                            Automatización de procesos internos a traves del
                            desarrollo de soluciones de informáticas
                        </TextSection>
                    </Grid.Col>
                </Grid>
            </Card.Section>
            <Card.Section withBorder inheritPadding py="xs">
                <SimpleGrid cols={2}>
                    <div>
                        <TextSection fz={12} fw={700} color="dimmed">
                            Fecha inicio:
                        </TextSection>
                        <TextSection
                            tt=""
                            fz={14}
                            className={classes.justificado}
                        >
                            2024-05-26
                        </TextSection>
                    </div>
                    <div>
                        <TextSection fz={12} fw={700} color="dimmed">
                            Fecha Finalizacion:
                        </TextSection>
                        <TextSection
                            tt=""
                            fz={14}
                            className={classes.justificado}
                        >
                            2024-06-12
                        </TextSection>
                    </div>
                </SimpleGrid>
            </Card.Section>
            <Card.Section withBorder inheritPadding py="xs">
                <SimpleGrid cols={3}>
                    <div>
                        <TextSection fz={12} fw={700} color="dimmed">
                            Nivel:
                        </TextSection>
                        <Badge
                            size="md"
                            color="indigo.7"
                            radius="sm"
                            variant="light"
                        >
                            Alto
                        </Badge>
                    </div>
                    <div>
                        <TextSection fz={12} fw={700} color="dimmed">
                            Ponderacion:
                        </TextSection>
                        <TextSection
                            tt=""
                            fz={14}
                            className={classes.justificado}
                        >
                            10
                        </TextSection>
                    </div>
                    <div>
                        <TextSection fz={12} fw={700} color="dimmed">
                            Tiempo (Meses):
                        </TextSection>
                        <TextSection
                            tt=""
                            fz={14}
                            className={classes.justificado}
                        >
                            36
                        </TextSection>
                    </div>
                </SimpleGrid>
            </Card.Section>
            <Card.Section withBorder inheritPadding py="xs">
                <TextSection fz={12} fw={700} color="dimmed">
                    Objetivos del Plan Nacional de Desarrollo:
                </TextSection>
                <TextSection tt="" fz={14} className={classes.justificado}>
                    Incrementar y fomentar, de manera inclusiva, las
                    oportunidades de empleo y las condiciones laborales.
                </TextSection>
            </Card.Section>
            <Card.Section withBorder inheritPadding py="xs">
                <TextSection fz={12} fw={700} color="dimmed">
                    Descripcion:
                </TextSection>
                <TextSection tt="" fz={14} className={classes.justificado}>
                    Incorporacion de mauinarias a la infraestructura
                    tecnologica.
                </TextSection>
            </Card.Section>
            <Card.Section withBorder inheritPadding py="xs">
                <Group justify="space-between">
                    <TextSection fz={12} fw={700} color="dimmed">
                        Actividades:
                    </TextSection>
                    <ActionIcon
                        variant="light"
                        radius="lg"
                        size="md"
                        aria-label="Settings"
                    >
                        <IconCopyPlus
                            style={{ width: "80%", height: "70%" }}
                            stroke={1.5}
                        />
                    </ActionIcon>
                </Group>
                <List mt={5} size="sm" withPadding>
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
                    <List.Item>
                        Submit a pull request once you are done
                    </List.Item>
                </List>
            </Card.Section>
            <Card.Section withBorder inheritPadding py="xs">
                <TextSection fz={12} fw={700} color="dimmed">
                    Avance general de actividades:
                </TextSection>
                <Group justify="center">
                    <RingProgress
                        roundCaps
                        size={130}
                        thickness={12}
                        sections={[{ value: 40, color: "blue" }]}
                        label={
                            <Text c="blue" fw={700} ta="center" size="xl">
                                40%
                            </Text>
                        }
                    />
                </Group>
            </Card.Section>
        </Card>
    );
};
