import { Container, Divider, Group } from "@mantine/core";
import { BtnSection, TextSection, TitlePage } from "../../../components";
import { ObjetivosEstrategicosTable } from "../../../components";
import { IconCopyPlus } from "@tabler/icons-react";

export const ObjetivosEstrategicosPage = () => {
    return (
        <Container size="xxl">
            <Group justify="space-between">
                <div>
                    <TitlePage order={2} ta="left">
                        Objetivos estrategicos
                    </TitlePage>
                    <TextSection fw={500} tt="">
                        GPLA tiene 5 objetivos estrategicos documentados
                    </TextSection>
                </div>
                <div>
                    <BtnSection
                        mb={20}
                        icon={IconCopyPlus}
                        handleAction={() => console.log("clic")}
                    >
                        Agregar
                    </BtnSection>
                </div>
            </Group>
            <Divider my="md" />
            <ObjetivosEstrategicosTable />
        </Container>
    );
};
