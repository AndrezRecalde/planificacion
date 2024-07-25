import { useEffect } from "react";
import { Container, Divider } from "@mantine/core";
import { EjeModal, EjeTable, TitlePage } from "../../../../components";
import { useEjeStore } from "../../../../hooks";
import Swal from "sweetalert2";

export const EjesPage = () => {
    const { startLoadEjes, startClearEjes, message, errores } = useEjeStore();

    useEffect(() => {
        startLoadEjes();

        return () => {
            startClearEjes();
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

    return (
        <Container size="xxl">
            <TitlePage order={2} ta="left">
                Ejes de Gobierno
            </TitlePage>
            <Divider my="md" />

            <EjeTable />

            <EjeModal />
        </Container>
    );
};
