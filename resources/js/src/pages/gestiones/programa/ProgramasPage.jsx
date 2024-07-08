import { Container, Card, Divider, Group } from "@mantine/core";
import { BtnSection, ProyectoModal, TextSection, TitlePage } from "../../../components";
import { ProgramaTable } from "../../../components";
import { IconBrandTelegram } from "@tabler/icons-react";
import { APP_WORDS, BTN_TITLES } from "../../../helpers";

export const ProgramasPage = () => {
    return (
        <Container size="xl">
            <Group justify="space-between">
                <div>
                    <TitlePage order={2} ta="left">
                        {APP_WORDS.PROGRAMA_TITLE}
                    </TitlePage>
                    <TextSection tt="">
                        GTIC tiene 6 programas activos
                    </TextSection>
                </div>
                <div>
                    <BtnSection
                        variant="default"
                        radius="xs"
                        icon={IconBrandTelegram}
                        heigh={45}
                    >
                        {BTN_TITLES.PROGRAMA_SOLI_MODAL}
                    </BtnSection>
                </div>
            </Group>
            <Divider my="md" />
            <Card withBorder shadow="sm" radius="md" mt={20} mb={20}>
                <Card.Section>
                    <ProgramaTable />
                </Card.Section>
            </Card>
            <ProyectoModal />
        </Container>
    );
};
