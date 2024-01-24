import {
    Anchor,
    Box,
    Checkbox,
    Group,
    PasswordInput,
    Stack,
    TextInput,
} from "@mantine/core";
import { BtnSubmit } from "../../components";
import { IconChevronsRight } from "@tabler/icons-react";

export const AuthForm = ({ form }) => {
    return (
        <Box
            component="form"
            onSubmit={form.onSubmit((_, e) => console.log("clic"))}
        >
            <Stack>
                <TextInput
                    required
                    label="Correo electrónico"
                    placeholder="hello@gadpe.gob.ec"
                    value={form.values.email}
                    onChange={(event) =>
                        form.setFieldValue("email", event.currentTarget.value)
                    }
                    error={form.errors.email && "Invalid email"}
                />
                <PasswordInput
                    required
                    label="Contraseña"
                    placeholder="Tu contraseña"
                    value={form.values.password}
                    onChange={(event) =>
                        form.setFieldValue(
                            "password",
                            event.currentTarget.value
                        )
                    }
                    error={
                        form.errors.password &&
                        "Password should include at least 6 characters"
                    }
                />
                <Group justify="space-between" mt="lg">
                    <Checkbox label="Remember me" />
                    <Anchor component="button" size="sm">
                        ¿Olvidó su contraseña?
                    </Anchor>
                </Group>
                <BtnSubmit text="Acceder" IconSection={IconChevronsRight} />
            </Stack>
        </Box>
    );
};
