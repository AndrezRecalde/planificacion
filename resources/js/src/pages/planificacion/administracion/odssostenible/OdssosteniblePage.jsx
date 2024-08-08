import { useEffect } from "react";
import { Container, Divider } from "@mantine/core";
import {
    OdssostenibleModal,
    OdssostenibleTable,
    StatusModal,
    TitlePage,
} from "../../../../components";
import { useOdssostenibleStore, useUiOdssostenible } from "../../../../hooks";
import Swal from "sweetalert2";

export const OdssosteniblePage = () => {
    const {
        startLoadOdssostenibles,
        startUpdateStatusOdssostenible,
        startClearOdssostenibles,
        setActivateOdssostenible,
        activateOdssostenible,
        message,
        errores,
    } = useOdssostenibleStore();
    const { isOpenModalStatusOdssostenible, modalActionStatusOdssostenible } =
        useUiOdssostenible();

    useEffect(() => {
        startLoadOdssostenibles({});

        return () => {
            startClearOdssostenibles();
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
                Objetivos de desarrollo Sostenible
            </TitlePage>
            <Divider my="md" />

            <OdssostenibleTable />

            <OdssostenibleModal />

            <StatusModal
                isOpenModal={isOpenModalStatusOdssostenible}
                modalAction={modalActionStatusOdssostenible}
                titleModal="Activar/Desactivar Elemento"
                startAction={startUpdateStatusOdssostenible}
                activateElement={activateOdssostenible}
                setActivate={setActivateOdssostenible}
            />
        </Container>
    );
};
