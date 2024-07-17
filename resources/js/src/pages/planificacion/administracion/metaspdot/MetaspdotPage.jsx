import { Container, Divider } from "@mantine/core";
import { MetaspdotTable, TitlePage } from "../../../../components";

export const MetaspdotPage = () => {
    return (
        <Container size="xxl">
            <TitlePage order={2} ta="left">
                Metas del PDOT
            </TitlePage>
            <Divider my="md" />
            <MetaspdotTable />
        </Container>
    );
};
