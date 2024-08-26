import { useEffect } from "react";
import { Container, Group } from "@mantine/core";
import {
    BtnSection,
    InstrumentoModal,
    InstrumentosList,
    TitlePage,
} from "../../../components";
import { IconCopyPlus } from "@tabler/icons-react";
import { APP_WORDS, BTN_TITLES } from "../../../helpers";
import { useInstrumentoStore, useUiInstrumento } from "../../../hooks";
import Swal from "sweetalert2";

export const InstrumentosPage = () => {
    const { startLoadInstrumentos, startClearInstrumentos, message, errores } =
        useInstrumentoStore();
    const { modalActionInstrumento } = useUiInstrumento();

    useEffect(() => {
        startLoadInstrumentos({ fecha_inicio: new Date() });

        return () => {
            startClearInstrumentos();
        };
    }, []);

    useEffect(() => {
        if (message !== undefined) {
            Swal.fire({
                icon: message.status,
                text: message.msg,
                showConfirmButton: false,
                timer: 1500,
            });
            return;
        }
    }, [message]);

    useEffect(() => {
        if (errores !== undefined) {
            Swal.fire({
                icon: "error",
                title: "Opps...",
                text: errores,
                showConfirmButton: false,
                timer: 1500,
            });
            return;
        }
    }, [errores]);

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
