import { Container, Group } from "@mantine/core";
import { BtnSection, InstrumentosList, TitlePage } from "../../../components";
import { IconCopyPlus } from "@tabler/icons-react";

export const InstrumentosPage = () => {
    return (
        <Container size="xxl">
            <Group justify="space-between">
                <TitlePage order={2} ta="left">
                    Instrumentos de planificación
                </TitlePage>
                <BtnSection
                    mb={20}
                    icon={IconCopyPlus}
                    handleAction={() => console.log("clic")}
                >
                    Agregar
                </BtnSection>
            </Group>
            <InstrumentosList />
        </Container>
    );
};
