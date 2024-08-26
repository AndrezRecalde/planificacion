import { Container, Divider } from "@mantine/core";
import {
    EarticulacionModal,
    EarticulacionTable,
    StatusModal,
    TitlePage,
} from "../../../../components";
import { APP_WORDS } from "../../../../helpers";
import { useEarticulacionStore, useUiEarticulacion } from "../../../../hooks";
import { useEffect } from "react";
import Swal from "sweetalert2";

export const EarticulacionPage = () => {
    const {
        activateEarticulacion,
        setActivateEarticulacion,
        startLoadEarticulaciones,
        startClearEarticulaciones,
        startUpdateStatusEarticulaciones,
        message,
        errores,
    } = useEarticulacionStore();

    const { isOpenModalStatusEarticulacion, modalActionStatusEarticulacion } = useUiEarticulacion();

    useEffect(() => {
        startLoadEarticulaciones({});

        return () => {
            startClearEarticulaciones();
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
                {APP_WORDS.EARTICULACION_TITLE}
            </TitlePage>
            <Divider my="md" />

            <EarticulacionTable />

            <EarticulacionModal />

            <StatusModal
                isOpenModal={isOpenModalStatusEarticulacion}
                modalAction={modalActionStatusEarticulacion}
                titleModal="Activar/Desactivar Elemento"
                startAction={startUpdateStatusEarticulaciones}
                activateElement={activateEarticulacion}
                setActivate={setActivateEarticulacion}
            />
        </Container>
    );
};
