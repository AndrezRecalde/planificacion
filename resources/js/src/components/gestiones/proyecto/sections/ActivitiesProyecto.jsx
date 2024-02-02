import { Container, Group, Button } from "@mantine/core";
import { ActividadesTable, TitlePage } from "../../../../components";
import classes from "./SectionsModule/Section.module.css";

export const ActivitiesProyecto = () => {
    return (
        <Container size="xl" my="md">
            <Group justify="space-between" mb={20}>
                <TitlePage order={4} ta="left">
                    Actividades del proyecto
                </TitlePage>
                <Button variant="light" color="indigo.7">
                    Agregar actividad
                </Button>
            </Group>
            <ActividadesTable classes={classes} />
        </Container>
    );
};
