import { Container, Divider } from "@mantine/core";
import { EarticulacionTable, TitlePage } from "../../../../components";

export const EarticulacionPage = () => {
    return (
        <Container size="xxl">
            <TitlePage order={2} ta="left">
                Estrategias de Articulacion
            </TitlePage>
            <Divider my="md" />

        <EarticulacionTable />
        </Container>
    );
};
