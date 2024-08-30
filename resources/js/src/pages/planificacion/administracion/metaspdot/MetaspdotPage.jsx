import { Container, Divider } from "@mantine/core";
import {
    MetapdotModal,
    MetaspdotTable,
    StatusModal,
    TitlePage,
} from "../../../../components";
import { APP_WORDS } from "../../../../helpers";
import { useMetapdotStore, useUiMetapdot } from "../../../../hooks";
import { useEffect } from "react";
import Swal from "sweetalert2";

export const MetaspdotPage = () => {
    const {
        startLoadMetaspdot,
        startUpdateStatusMetapdot,
        startClearMetapdot,
        activateMetapdot,
        setActivateMetapdot,
        message,
        errores
    } = useMetapdotStore();

    const { isOpenModalStatusMetapdot, modalActionStatusMetapdot } =
        useUiMetapdot();

    useEffect(() => {
        startLoadMetaspdot({});

        return () => {
            startClearMetapdot();
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
                {APP_WORDS.METAPDOT_TITLE}
            </TitlePage>
            <Divider my="md" />
            <MetaspdotTable />

            <MetapdotModal />

            <StatusModal
                isOpenModal={isOpenModalStatusMetapdot}
                modalAction={modalActionStatusMetapdot}
                titleModal="Activar/Desactivar Elemento"
                startAction={startUpdateStatusMetapdot}
                activateElement={activateMetapdot}
                setActivate={setActivateMetapdot}
            />
        </Container>
    );
};
