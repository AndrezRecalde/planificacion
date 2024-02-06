import { Title, Text, Container } from "@mantine/core";
import { ChangePwdForm } from "../../components";
import { UserChangePwdProvider, useUserChangePwdForm } from "../../context";

export const ChangePwdPage = () => {
    const form = useUserChangePwdForm({
        initialValues: {
            password: "",
            password_confirmation: "",
        },
        /* validate: {
            password_confirmation: (value, values) =>
                value !== values.password
                    ? "Las contraseñas no coinciden"
                    : null,
        }, */
    });

    return (
        <Container size={560} my={30}>
            <Title order={2} ta="center">
                Cambiar Contraseña
            </Title>
            <Text c="dimmed" fz="sm" ta="center">
                Ingresa tu nueva contraseña y verificala.
            </Text>
            <UserChangePwdProvider form={form}>
                <ChangePwdForm />
            </UserChangePwdProvider>
        </Container>
    );
};
