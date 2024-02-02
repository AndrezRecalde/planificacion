import { Avatar, Card, Container, Group } from "@mantine/core";
import { ProfileForm, TitlePage, TextSection } from "../../components";
import logo from "../../assets/images/icono.png";

export const ProfilePage = () => {
    return (
        <Container size="sm">
            <TitlePage order={2} size="h2">
                Perfil
            </TitlePage>
            <Card withBorder shadow="sm" radius="md" p="lg" mt={20} mb={20}>
                <Card.Section withBorder inheritPadding py="xs">
                    <Group justify="space-between">
                        <TextSection fw={700} tt="" fz={16}>
                            Te damos la bienvenida.
                        </TextSection>
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
                    <TextSection fs="italic" tt="">
                        Si usted desea modificar los datos, comuniquese con el
                        administrador.
                    </TextSection>
                </Card.Section>
            </Card>
        </Container>
    );
};
