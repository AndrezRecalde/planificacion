import { Container } from "@mantine/core";
import {
    ActividadesTable,
    BtnSection,
    TextSection,
    TitlePage,
} from "../../../components";
import classes from "../../../components/gestiones/proyecto/sections/SectionsModule/Section.module.css";

export const ActividadesPage = () => {
    return (
        <Container size="xl">
            <TitlePage order={2} ta="left">
                Todas las actividades
            </TitlePage>
            <TextSection tt="">
                GTIC tiene 16 actividades registradas
            </TextSection>
            <BtnSection mt={10} mb={10} heigh={40}>
                Agregar
            </BtnSection>
            <ActividadesTable classes={classes} />
        </Container>
    );
};
