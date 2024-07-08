import { useDocumentTitle } from "@mantine/hooks";
import { Paper, Text } from "@mantine/core";
import { AuthForm, BtnServicesApps, Logo, TitlePage } from "../../components";
import classes from "../../assets/styles/auth/AuthPageBackground.module.css";

export const AuthPage = () => {
    useDocumentTitle("Login");

    return (
        <div className={classes.wrapper}>
            <TitlePage ta="center" className={classes.title}>
                Sistema de Planificación
            </TitlePage>
            <Logo height={50} width={150} />
            <Paper
                withBorder
                shadow="lg"
                p={30}
                mt={20}
                radius="lg"
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
