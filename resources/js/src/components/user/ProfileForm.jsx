import { useMemo } from "react";
import { Grid, Text } from "@mantine/core";
import { useAuthStore } from "../../hooks";

export const ProfileForm = () => {
    const { profile } = useAuthStore();
    const { administrativos } = profile;
    const periodo = useMemo(() => administrativos?.slice(-1)[0], [profile]);
    console.log(profile);
    return (
        <Grid>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                <Text fz="md" fw={700}>
                    {`${profile.nombres} ${profile.apellidos}`}
                </Text>
                <Text fz="xs" tt="uppercase" fw={600} c="dimmed">
                    Apellidos y Nombres
                </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                <Text fz="md" fw={700}>
                    {profile?.roles?.map((r) => r.name).join(", ")}
                </Text>
                <Text fz="xs" tt="uppercase" fw={600} c="dimmed">
                    Role(s)
                </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                <Text fz="md" fw={700}>
                    {profile.dni}
                </Text>
                <Text fz="xs" tt="uppercase" fw={600} c="dimmed">
                    Nº Cédula
                </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                <Text fz="md" fw={700}>
                    {profile.email}
                </Text>
                <Text fz="xs" tt="uppercase" fw={600} c="dimmed">
                    Nº Cédula
                </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
                <Text fz="md" fw={700}>
                    {profile.nombre_institucion}
                </Text>
                <Text fz="xs" tt="uppercase" fw={600} c="dimmed">
                    Institución {profile.tipo_gad}
                </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
                <Text fz="md" fw={700}>
                    {profile.nombre_departamento}
                </Text>
                <Text fz="xs" tt="uppercase" fw={600} c="dimmed">
                    Departamento
                </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 6, md: 6, lg: 6 }}>
                <Text fz="md" fw={700}>
                    {profile.telefono}
                </Text>
                <Text fz="xs" tt="uppercase" fw={600} c="dimmed">
                    Teléfono
                </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 6, md: 6, lg: 6 }}>
                <Text fz="md" fw={700}>
                    {profile.extension}
                </Text>
                <Text fz="xs" tt="uppercase" fw={600} c="dimmed">
                    Extensión
                </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 6, md: 6, lg: 6 }}>
                <Text fz="md" fw={700}>
                    {periodo?.inicio_periodo}
                </Text>
                <Text fz="xs" tt="uppercase" fw={600} c="dimmed">
                    Inicio Periodo Administrativo
                </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 6, md: 6, lg: 6 }}>
                <Text fz="md" fw={700}>
                    {periodo?.fin_periodo}
                </Text>
                <Text fz="xs" tt="uppercase" fw={600} c="dimmed">
                    Fin Periodo Administrativo
                </Text>
            </Grid.Col>
        </Grid>
    );
};
