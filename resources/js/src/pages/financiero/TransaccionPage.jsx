import { Container, SimpleGrid } from "@mantine/core";
import { CardGestiones, TitlePage } from "../../components";

export const TransaccionPage = () => {
    return (
        <Container size="lg">
            <TitlePage
                title="Transacciones de presupuesto"
                order={2}
                size="h2"
            />

            <SimpleGrid cols={3} mt={20}>
                <CardGestiones />
                <CardGestiones />
                <CardGestiones />
                <CardGestiones />
                <CardGestiones />
                <CardGestiones />
            </SimpleGrid>
        </Container>
    );
};
