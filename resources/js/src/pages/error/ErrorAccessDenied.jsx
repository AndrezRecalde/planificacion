import { Container, Group, Image } from "@mantine/core";
import { BtnSection, TextSection, TitlePage } from "../../components";
import { useNavigate } from "react-router-dom";
import { IconChevronsRight } from "@tabler/icons-react";
import classes from "../../assets/styles/error/AccessDenied.module.css";

export const ErrorAccessDenied = () => {
    const navigate = useNavigate();
    const handleAction = () => {
        navigate("/space/profile");
    };

    return (
        <Container className={classes.root}>
            <div className={classes.label}>403</div>
            <TitlePage className={classes.title}>Acceso Denegado.</TitlePage>

            <Image
                h={300}
                fit="contain"
                src="https://prefecturadeesmeraldas.gob.ec/wp-content/uploads/2024/07/9011709.jpg"
                className={classes.desktopImage}
            />
            <TextSection
                tt=""
                color="dimmed"
                fz={18}
                ta="center"
                className={classes.description}
            >
                No tienes los permisos necesarios para acceder a esta página o
                realizar esta acción. Si crees que esto es un error, por favor
                contacta al administrador del sistema.
            </TextSection>
            <Image
                src="https://prefecturadeesmeraldas.gob.ec/wp-content/uploads/2024/07/9011709.jpg"
                className={classes.mobileImage}
            />
            <Group justify="center">
                <BtnSection
                    variant="white"
                    heigh={50}
                    fontSize={18}
                    icon={IconChevronsRight}
                    handleAction={handleAction}
                >
                    Regresar al perfil
                </BtnSection>
            </Group>
        </Container>
    );
};
