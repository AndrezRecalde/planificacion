import { Container, Card, Divider, Group } from "@mantine/core";
import {
    BtnSection,
    FilterFormProyectos,
    ProyectoTable,
    TitlePage,
} from "../../../components";
import classes from "./ProyectoModule/Proyecto.module.css";
import { IconLibraryPlus } from "@tabler/icons-react";

export const ProyectosPage = () => {
    return (
        <Container size="xl">
            <Group justify="space-between">
                <TitlePage order={2} ta="left">
                    Proyectos
                </TitlePage>
                <BtnSection heigh={45} variant="default" icon={IconLibraryPlus} handleAction={() => console.log('clic')}>
                    Nuevo Proyecto
                </BtnSection>
            </Group>
            <Divider my="md" />
            <FilterFormProyectos />
            <Card withBorder shadow="sm" radius="md" mt={20} mb={20}>
                <Card.Section>
                    <ProyectoTable classes={classes} />
                </Card.Section>
            </Card>
        </Container>
    );
};
