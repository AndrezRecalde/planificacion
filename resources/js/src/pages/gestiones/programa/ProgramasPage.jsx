import { Container, Card } from "@mantine/core";
import { TableContent, TitlePage } from "../../../components";

export const ProgramasPage = () => {
    return (
        <Container size="xl">
            <TitlePage order={2} ta="left" title="Programas" />
            <Card withBorder shadow="sm" radius="md" mt={20} mb={20}>
                <Card.Section>
                    <TableContent  />
                </Card.Section>
            </Card>
        </Container>
    );
};
