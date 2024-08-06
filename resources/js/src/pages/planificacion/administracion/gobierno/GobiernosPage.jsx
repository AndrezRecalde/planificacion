import { useEffect } from "react";
import { Container, Divider } from "@mantine/core";
import {
    GobiernoModal,
    GobiernoTable,
    GobiernoWithOPNModal,
    StatusModal,
    TitlePage,
} from "../../../../components";
import { useGobiernoStore, useUiGobierno } from "../../../../hooks";
import Swal from "sweetalert2";

export const GobiernosPage = () => {
    const {
        startLoadGobiernos,
        startClearGobiernos,
        startUpdateStatusGobierno,
        activateGobierno,
        setActivateGobierno,
        message,
        errores,
    } = useGobiernoStore();

    const { isOpenModalStatusGobierno, modalActionStatusGobierno } =
        useUiGobierno();

    useEffect(() => {
        startLoadGobiernos({});

        return () => {
            startClearGobiernos();
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
                Gobiernos
            </TitlePage>
            <Divider my="md" />

            <GobiernoTable />

            <GobiernoModal />
            <GobiernoWithOPNModal />
            <StatusModal
                isOpenModal={isOpenModalStatusGobierno}
                modalAction={modalActionStatusGobierno}
                titleModal="Activar/Desactivar Elemento"
                startAction={startUpdateStatusGobierno}
                activateElement={activateGobierno}
                setActivate={setActivateGobierno}
            />
        </Container>
    );
};
