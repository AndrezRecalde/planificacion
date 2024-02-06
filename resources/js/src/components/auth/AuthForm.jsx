import { useEffect } from "react";
import {
    Anchor,
    Box,
    Checkbox,
    Group,
    LoadingOverlay,
    PasswordInput,
    Stack,
    TextInput,
} from "@mantine/core";
import { AlertSection, BtnSubmit } from "../../components";
import { IconChevronsRight, IconInfoCircle } from "@tabler/icons-react";
import { useAuthStore } from "../../hooks/auth/useAuthStore";
import { useForm } from "@mantine/form";

export const AuthForm = () => {
    const { startLogin, isLoading, validate, errores } = useAuthStore();

    const form = useForm({
        initialValues: {
            dni: "",
            password: "",
            remember: true,
        },
/*         validate: {
            dni: isNotEmpty("Por favor digite el DNI"),
            password: isNotEmpty("Por favor digite la contraseña"),
        } */
    });

    useEffect(() => {
        if (validate !== undefined) {
            form.setErrors(validate);
            return;
        }
        return () => {
            form.clearErrors();
        };
    }, [validate]);

    const handleLogin = (e) => {
        e.preventDefault();
        startLogin(form.values);
    };

    return (
        <Box
            pos="relative"
            component="form"
            onSubmit={form.onSubmit((_, e) => handleLogin(e))}
        >
            <LoadingOverlay
                visible={isLoading}
                zIndex={1000}
                overlayProps={{ radius: "sm", blur: 2 }}
            />
            <Stack>
                <TextInput
                    label="Cédula"
                    placeholder="Digite su cédula"
                    {...form.getInputProps("dni")}
                />
                <PasswordInput
                    label="Contraseña"
                    placeholder="Tu contraseña"
                    {...form.getInputProps("password")}
                />
                {errores ? (
                    <AlertSection
                        variant="light"
                        color="red.8"
                        icon={IconInfoCircle}
                        title="Error"
                        text={errores}
                    />
                ) : null}
                <Group justify="space-between" mt="lg">
                    <Checkbox
                        label="Remember me"
                        {...form.getInputProps("remember", { type: 'checkbox' })}
                    />
                    <Anchor component="button" size="sm">
                        ¿Olvidó su contraseña?
                    </Anchor>
                </Group>
                <BtnSubmit text="Acceder" IconSection={IconChevronsRight} />
            </Stack>
        </Box>
    );
};
