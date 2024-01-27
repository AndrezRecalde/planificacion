import { Button, Container } from "@mantine/core";
import { InstrumentosList, TitlePage } from "../../../components";
import { IconPlus } from "@tabler/icons-react";

export const InstrumentosPage = () => {
    return (
        <Container size="xl">
            <TitlePage
                order={2}
                ta="left"
                title="Instrumentos de planificación"
            />
            <Button
                variant="light"
                mt="md"
                mb="md"
                size="md"
                radius="md"
                leftSection={<IconPlus size="1.2rem" />}
            >
                Agregar
            </Button>
            <InstrumentosList />
        </Container>
    );
};
