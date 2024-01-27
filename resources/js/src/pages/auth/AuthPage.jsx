import { useForm } from "@mantine/form";
import { useDocumentTitle } from "@mantine/hooks";
import { Paper, Text } from "@mantine/core";
import { AuthForm, BtnServicesApps, Logo, TitlePage } from "../../components";
import classes from "./AuthPageModule/AuthPageBackground.module.css";

export const AuthPage = () => {
    useDocumentTitle("Login");
    const form = useForm({
        initialValues: {
            email: "",
            password: "",
            remember: true,
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
            <TitlePage
                title="Sistema de Planificación"
                ta="center"
                className={classes.title}
            />
            <Logo height={70} width={200} />
            <Paper
                withBorder
                shadow="md"
                p={30}
                mt={20}
                radius="md"
                className={classes.wrapper_paper}
            >
                <Text size="lg" fw={500} mb={15}>
                    Iniciar sesión
                </Text>
                <AuthForm form={form} />
                <BtnServicesApps />
            </Paper>
        </div>
    );
};
