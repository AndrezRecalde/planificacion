import { Container, Divider, Group } from "@mantine/core";
import {
    ActividadesTable,
    BtnActividadSection,
    TextSection,
    TitlePage,
} from "../../../components";

import classes from "../../../components/gestiones/proyecto/sections/SectionsModule/Section.module.css";

export const ActividadesPage = () => {
    return (
        <Container size={1500}>
            <Group justify="space-between">
                <div>
                    <TitlePage order={2} ta="left">
                        Todas las actividades
                    </TitlePage>
                    <TextSection tt="">
                        Espacio de trabajo: Tablero GTIC-2024-05
                    </TextSection>
                </div>
                <div>
                    <BtnActividadSection/>
                </div>
            </Group>
            <Divider my="md" />
            <ActividadesTable classes={classes} />
        </Container>
    );
};
