import {
    Anchor,
    Box,
    Button,
    Center,
    Group,
    Paper,
    PasswordInput,
    Stack,
    rem,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import classes from "./UserModule/ChangePwd.module.css";

export const ChangePwdForm = () => {
    return (
        <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
            <Stack>
                <PasswordInput
                    label="Digita tu nueva contraseña"
                    required
                />
                <PasswordInput
                    label="Confirma tu nueva contraseña"
                    required
                />
            </Stack>
            <Group justify="space-between" mt="lg" className={classes.controls}>
                <Anchor c="dimmed" size="sm" className={classes.control}>
                    <Center inline>
                        <IconArrowLeft
                            style={{ width: rem(12), height: rem(12) }}
                            stroke={1.5}
                        />
                        <Box ml={5}>Regresar a mi perfil</Box>
                    </Center>
                </Anchor>
                <Button className={classes.control}>Cambiar contraseña</Button>
            </Group>
        </Paper>
    );
};
