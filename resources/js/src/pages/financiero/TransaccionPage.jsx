import { Container, SimpleGrid } from "@mantine/core";
import { CardGestiones, TitlePage } from "../../components";

export const TransaccionPage = () => {
    return (
        <Container size="lg">
            <TitlePage order={2} size="h2">
                Transacciones de presupuesto
            </TitlePage>

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
