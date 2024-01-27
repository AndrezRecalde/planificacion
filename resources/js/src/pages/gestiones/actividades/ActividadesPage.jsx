import { Container } from "@mantine/core";
import { ActividadesTable, BtnSection, TextSection, TitlePage } from "../../../components";
import classes from "../../../components/gestiones/proyecto/sections/SectionsModule/Section.module.css";

export const ActividadesPage = () => {
    return (
        <Container size="xl">
            <TitlePage order={2} ta="left" title="Todas las actividades" />
            <TextSection title="GTIC tiene 16 actividades registradas" tt="" />
            <BtnSection mt={10} mb={10} heigh={40}>
                Agregar
            </BtnSection>
            <ActividadesTable classes={classes} />
        </Container>
    );
};
