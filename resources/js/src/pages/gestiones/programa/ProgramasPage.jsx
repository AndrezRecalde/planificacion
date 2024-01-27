import { Container, Card } from "@mantine/core";
import { TableContent, TextSection, TitlePage } from "../../../components";
import { ProgramaTable } from "../../../components";

export const ProgramasPage = () => {
    return (
        <Container size="xl">
            <TitlePage order={2} ta="left" title="Programas" />
            <TextSection title="GTIC tiene 6 programas activos" tt="" />
            <Card withBorder shadow="sm" radius="md" mt={20} mb={20}>
                <Card.Section>
                    <ProgramaTable  />
                </Card.Section>
            </Card>
        </Container>
    );
};
