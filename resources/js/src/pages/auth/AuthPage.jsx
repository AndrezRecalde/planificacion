import { useDocumentTitle } from "@mantine/hooks";
import { Paper, Text } from "@mantine/core";
import { AuthForm, BtnServicesApps, Logo, TitlePage } from "../../components";
import classes from "./AuthPageModule/AuthPageBackground.module.css";

export const AuthPage = () => {
    useDocumentTitle("Login");

    return (
        <div className={classes.wrapper}>
            <TitlePage ta="center" className={classes.title}>
                Sistema de Planificación
            </TitlePage>
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
                <AuthForm />
                <BtnServicesApps />
            </Paper>
        </div>
    );
};
