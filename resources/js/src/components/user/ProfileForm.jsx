import { Grid, Text } from "@mantine/core";

export const ProfileForm = () => {
    return (
        <Grid>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                <Text fz="md" fw={700}>
                    Recalde Solano Cristhian Andrés
                </Text>
                <Text fz="xs" tt="uppercase" fw={600} c="dimmed">
                    Apellidos y Nombres
                </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                <Text fz="md" fw={700}>
                    0802704171
                </Text>
                <Text fz="xs" tt="uppercase" fw={600} c="dimmed">
                    Nº Cédula
                </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
                <Text fz="md" fw={700}>
                    crecalde@gadpe.gob.ec
                </Text>
                <Text fz="xs" tt="uppercase" fw={600} c="dimmed">
                    Correo
                </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
                <Text fz="md" fw={700}>
                    Gobierno Autónomo Descentralizado de la Provincia de
                    Esmeraldas
                </Text>
                <Text fz="xs" tt="uppercase" fw={600} c="dimmed">
                    Institución
                </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
                <Text fz="md" fw={700}>
                    Gestión de Tecnologías de la Información y Comunicación
                </Text>
                <Text fz="xs" tt="uppercase" fw={600} c="dimmed">
                    Departamento
                </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 6, md: 6, lg: 6 }}>
                <Text fz="md" fw={700}>
                    062453139
                </Text>
                <Text fz="xs" tt="uppercase" fw={600} c="dimmed">
                    Teléfono
                </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 6, md: 6, lg: 6 }}>
                <Text fz="md" fw={700}>
                    133 - 134
                </Text>
                <Text fz="xs" tt="uppercase" fw={600} c="dimmed">
                    Extensión
                </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 6, md: 6, lg: 6 }}>
                <Text fz="md" fw={700}>
                    2022
                </Text>
                <Text fz="xs" tt="uppercase" fw={600} c="dimmed">
                    Inicio Periodo Administrativo
                </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 6, md: 6, lg: 6 }}>
                <Text fz="md" fw={700}>
                    2026
                </Text>
                <Text fz="xs" tt="uppercase" fw={600} c="dimmed">
                    Fin Periodo Administrativo
                </Text>
            </Grid.Col>
        </Grid>
    );
};
