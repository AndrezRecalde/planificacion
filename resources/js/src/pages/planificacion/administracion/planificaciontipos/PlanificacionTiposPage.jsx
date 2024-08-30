import { Container, Divider } from "@mantine/core";
import { PlanificaciontiposTable, TitlePage } from "../../../../components";
import { APP_WORDS } from "../../../../helpers";

export const PlanificacionTiposPage = () => {
    return (
        <Container size="xxl">
            <TitlePage order={2} ta="left">
                {APP_WORDS.TIPOSPLANIFICACION_TITLE}
            </TitlePage>
            <Divider my="md" />
            <PlanificaciontiposTable />
        </Container>
    );
};
