import { Container, Divider } from "@mantine/core";
import { CompetenciapdotTable, TitlePage } from "../../../../components";

export const CompetenciaspdotPage = () => {
    return (
        <Container size="xxl">
            <TitlePage order={2} ta="left">
                Competencias del PDOT
            </TitlePage>
            <Divider my="md" />

            <CompetenciapdotTable />
        </Container>
    );
};
