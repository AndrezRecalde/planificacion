import { useEffect } from "react";
import { Container, Divider } from "@mantine/core";
import {
    ComponentepdotModal,
    ComponentepdotTable,
    StatusModal,
    TitlePage,
} from "../../../../components";
import { useComponentepdotStore, useUiComponentepdot } from "../../../../hooks";
import Swal from "sweetalert2";

export const ComponentespdotPage = () => {
    const {
        startLoadComponentespdot,
        startClearComponentepdot,
        startUpdateStatusComponentepdot,
        activateComponentepdot,
        setActivateComponentepdot,
        message,
        errores,
    } = useComponentepdotStore();
    const { isOpenModalStatusComponentepdot, modalActionStatusComponentepdot } =
        useUiComponentepdot();

    useEffect(() => {
        startLoadComponentespdot({});

        return () => {
            startClearComponentepdot();
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
                Componentes del PDOT
            </TitlePage>
            <Divider my="md" />

            <ComponentepdotTable />
            <ComponentepdotModal />
            <StatusModal
                isOpenModal={isOpenModalStatusComponentepdot}
                modalAction={modalActionStatusComponentepdot}
                titleModal="Activar/Desactivar Elemento"
                startAction={startUpdateStatusComponentepdot}
                activateElement={activateComponentepdot}
                setActivate={setActivateComponentepdot}
            />
        </Container>
    );
};
