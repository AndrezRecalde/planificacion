import { Avatar, Card, Container, Group } from "@mantine/core";
import { ProfileForm, TitlePage, TextSection } from "../../components";
import logo from "../../assets/images/icono.png";

export const ProfilePage = () => {
    return (
        <Container size="sm">
            <TitlePage title="Perfil" order={2} size="h2" />
            <Card withBorder shadow="sm" radius="md" p="lg" mt={20} mb={20}>
                <Card.Section withBorder inheritPadding py="xs">
                    <Group justify="space-between">
                        <TitleSection
                            fw={700}
                            title="Te damos la bienvenida."
                            tt=""
                            fz={16}
                        />
                        <Avatar
                            variant="transparent"
                            radius="xl"
                            size="md"
                            src={logo}
                        />
                    </Group>
                </Card.Section>
                <Card.Section withBorder inheritPadding py="xs">
                    <ProfileForm />
                </Card.Section>
                <Card.Section withBorder inheritPadding py="xs">
                    <TextSection
                        fs="italic"
                        tt=""
                        title="Si usted desea modificar los datos, comuniquese con el administrador."
                    />
                </Card.Section>
            </Card>
        </Container>
    );
};
