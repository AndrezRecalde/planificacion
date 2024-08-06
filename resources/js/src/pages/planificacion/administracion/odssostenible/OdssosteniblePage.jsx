import { Container, Divider } from "@mantine/core";
import { OdssostenibleTable, TitlePage } from "../../../../components";

export const OdssosteniblePage = () => {
    return (
        <Container size="xxl">
            <TitlePage order={2} ta="left">
                Objetivos de desarrollo Sostenible
            </TitlePage>
            <Divider my="md" />

            <OdssostenibleTable />
        </Container>
    );
};
