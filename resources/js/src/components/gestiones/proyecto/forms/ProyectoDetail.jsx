import { Badge, Card, Grid, Group, Text } from "@mantine/core";
import { TextSection } from "../../../../components";

import classes from "../../../../assets/styles/gestiones/proyecto/ProyectoDetail.module.css";

export const ProyectoDetail = () => {
    return (
        <Card padding="lg">
            <Card.Section inheritPadding py="xs">
                <Group>
                    <Badge variant="light" color="indigo" radius="sm">
                        PRESUPUESTARIO
                    </Badge>
                    <Badge variant="light" color="teal" radius="sm">
                        PDOT
                    </Badge>
                </Group>
            </Card.Section>
            <Card.Section withBorder inheritPadding py="xs">
                <Grid>
                    <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
                        <Text fw={700} size="xs" c="dimmed">
                            Programa
                        </Text>
                        <Text size="sm" className={classes.justificado}>
                            Incorporar Infraestructura acorde con el incremento
                            de capacidades, carga de trabajo, almacenamiento
                            contingencias y ciclos de vida de los recursos
                            tecnologicos.
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
                        <Text fw={700} size="xs" c="dimmed">
                            Proyecto
                        </Text>
                        <Text size="sm" className={classes.justificado}>
                            Automatización de procesos internos a traves del
                            desarrollo de soluciones de informáticas
                        </Text>
                    </Grid.Col>
                </Grid>
            </Card.Section>
        </Card>
    );
};
