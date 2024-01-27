import { Container, Card } from "@mantine/core";
import { FilterFormProyectos, ProyectoTable, TitlePage } from "../../../components";
import classes from "./ProyectoModule/Proyecto.module.css";

export const ProyectosPage = () => {
    return (
        <Container size="xl">
            <TitlePage order={2} ta="left" title="Proyectos" />
            <FilterFormProyectos />
            <Card withBorder shadow="sm" radius="md" mt={20} mb={20}>
                <Card.Section>
                   <ProyectoTable classes={classes} />
                </Card.Section>
            </Card>
        </Container>
    );
};
