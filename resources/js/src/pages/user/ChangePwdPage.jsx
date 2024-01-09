import { Title, Text, Container } from "@mantine/core";
import { ChangePwdForm } from "../../components";

export const ChangePwdPage = () => {
    return (
        <Container size={560} my={30}>
            <Title order={2} ta="center">
                Cambiar Contraseña
            </Title>
            <Text c="dimmed" fz="sm" ta="center">
                Ingresa tu nueva contraseña y verificala.
            </Text>
            <ChangePwdForm />
        </Container>
    );
};
