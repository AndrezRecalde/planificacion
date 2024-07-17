import { Container, Divider } from "@mantine/core";
import { PlanificaciontiposTable, TitlePage } from "../../../../components";

export const PlanificacionTiposPage = () => {
    return (
        <Container size="xxl">
            <TitlePage order={2} ta="left">
                Tipos de planificación
            </TitlePage>
            <Divider my="md" />
            <PlanificaciontiposTable />
        </Container>
    );
};
