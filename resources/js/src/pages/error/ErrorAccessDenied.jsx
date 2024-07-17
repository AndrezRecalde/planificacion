import { Container, Group } from "@mantine/core";
import { BtnSection, TextSection, TitlePage } from "../../components";
import { useNavigate } from "react-router-dom";
import { IconBackground } from "@tabler/icons-react";
import classes from "../../assets/styles/error/AccessDenied.module.css";

export const ErrorAccessDenied = () => {
    const navigate = useNavigate();
    const handleAction = () => {
        navigate("/space/profile");
    };

    return (
        <Container className={classes.root}>
            <div className={classes.label}>401</div>
            <TitlePage className={classes.title}>Acceso Denegado.</TitlePage>
            <TextSection
                tt=""
                color="dimmed"
                fz={22}
                ta="center"
                className={classes.description}
            >
                Unfortunately, this is only a 404 page. You may have mistyped
                the address, or the page has been moved to another URL.
            </TextSection>
            <Group justify="center">
                <BtnSection
                    variant="subtle"
                    icon={IconBackground}
                    handleAction={handleAction}
                >
                    Take me back to home page
                </BtnSection>
            </Group>
        </Container>
    );
};
