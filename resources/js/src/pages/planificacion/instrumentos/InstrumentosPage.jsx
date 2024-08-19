import { useEffect } from "react";
import { Container, Group } from "@mantine/core";
import { BtnSection, InstrumentoModal, InstrumentosList, TitlePage } from "../../../components";
import { IconCopyPlus } from "@tabler/icons-react";
import { APP_WORDS, BTN_TITLES } from "../../../helpers";
import { useInstrumentoStore, useUiInstrumento } from "../../../hooks";

export const InstrumentosPage = () => {
    const { startLoadInstrumentos, startClearInstrumentos } =
        useInstrumentoStore();
    const { modalActionInstrumento } = useUiInstrumento();

    useEffect(() => {
        startLoadInstrumentos({ fecha_inicio: new Date() });

        return () => {
            startClearInstrumentos();
        };
    }, []);

    const handleOpenModal = (e) => {
        e.preventDefault();
        modalActionInstrumento(true);
    };

    return (
        <Container size="xxl">
            <Group justify="space-between">
                <TitlePage order={2} ta="left">
                    {APP_WORDS.INSTRUMENTOS_TITLE}
                </TitlePage>
                <BtnSection
                    mb={20}
                    icon={IconCopyPlus}
                    handleAction={handleOpenModal}
                >
                    {BTN_TITLES.BTN_ADD}
                </BtnSection>
            </Group>
            <InstrumentosList />

            <InstrumentoModal />
        </Container>
    );
};
