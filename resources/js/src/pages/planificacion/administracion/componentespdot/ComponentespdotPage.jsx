import { Container, Divider } from "@mantine/core";
import { ComponentepdotTable, TitlePage } from "../../../../components";

export const ComponentespdotPage = () => {


    return (
        <Container size="xxl">
            <TitlePage order={2} ta="left">
                Componentes del PDOT
            </TitlePage>
            <Divider my="md" />

            <ComponentepdotTable />
        </Container>
    );
};
