import { useForm } from "@mantine/form";
import {
    Text,
    Paper,
    Group,
    Divider,
    Box,
    Container,
} from "@mantine/core";
import { IconChevronsRight } from "@tabler/icons-react";
import { AuthForm, BtnServices, BtnSubmit } from "../../components";
import classes from "./AuthPageModule/AuthPageBackground.module.css";

export const AuthPage = () => {
    const form = useForm({
        initialValues: {
            email: "",
            name: "",
            password: "",
            terms: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
            password: (val) =>
                val.length <= 6
                    ? "Password should include at least 6 characters"
                    : null,
        },
    });

    return (
        <div className={classes.wrapper}>
            <Container size="xs" my={50}>
                <Paper radius="md" p="xl" withBorder>
                    <Text size="lg" fw={700}>
                        Sistema de Planificacion
                    </Text>
                    <BtnServices />
                    <Divider
                        label="Accede al sistema"
                        labelPosition="center"
                        my="lg"
                    />
                    <Box
                        component="form"
                        style={(theme) => ({
                            padding: theme.spacing.xs,
                        })}
                        onSubmit={form.onSubmit(() => {})}
                    >
                        <AuthForm form={form} />
                        <Group justify="flex-end" mt="lg">
                            <BtnSubmit
                                radius="xl"
                                text="Acceder"
                                LeftSection={IconChevronsRight}
                            />
                        </Group>
                    </Box>
                </Paper>
            </Container>
        </div>
    );
};
