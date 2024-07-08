import { useEffect } from "react";
import { Card, Container, Group, Image, LoadingOverlay, Skeleton } from "@mantine/core";
import { ProfileForm, TitlePage, TextSection } from "../../components";
import { useAuthStore } from "../../hooks";

import logo from "../../assets/images/icono.png";

export const ProfilePage = () => {
    const { startProfile, clearProfile, isLoading } = useAuthStore();
    useEffect(() => {
        startProfile();

        return () => {
            clearProfile();
        };
    }, []);

    return (
        <Container size="sm">
            <TitlePage order={2} size="h2">
                Perfil
            </TitlePage>
            <Card withBorder shadow="sm" radius="lg" p="lg" mt={20} mb={20}>
                <Skeleton visible={isLoading}>
                    <Card.Section withBorder inheritPadding py="xs">
                        <Group justify="space-between">
                            <TextSection fw={700} tt="" fz={16}>
                                Te damos la bienvenida.
                            </TextSection>
                            <Image maw={50} radius="xl" size="md" src={logo} />
                        </Group>
                    </Card.Section>
                    <Card.Section withBorder inheritPadding py="xs">
                        <LoadingOverlay
                            visible={isLoading}
                            zIndex={1000}
                            overlayProps={{ radius: "sm", blur: 2 }}
                        />
                        <ProfileForm />
                    </Card.Section>
                    <Card.Section withBorder inheritPadding py="xs">
                        <TextSection fs="italic" tt="">
                            Si usted desea modificar los datos, comuniquese con
                            el administrador.
                        </TextSection>
                    </Card.Section>
                </Skeleton>
            </Card>
        </Container>
    );
};
