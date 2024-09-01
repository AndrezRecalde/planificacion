import { useEffect } from "react";
import { Container, Divider } from "@mantine/core";
import {
    PlanificacionTipoModal,
    PlanificaciontiposTable,
    StatusModal,
    TitlePage,
} from "../../../../components";
import { APP_WORDS } from "../../../../helpers";
import {
    usePlanificacionTipoStore,
    useUiPlanificacionTipo,
} from "../../../../hooks";
import Swal from "sweetalert2";

export const PlanificacionTiposPage = () => {
    const {
        startLoadPlanificacionTipos,
        startClearPlanificacionTipo,
        startUpdateStatusPlanificacionTipo,
        setActivatePlanificacionTipo,
        activatePlanificacionTipo,
        message,
        errores,
    } = usePlanificacionTipoStore();

    const {
        isOpenModalStatusPlanificacionTipo,
        modalActionStatusPlanificacionTipo,
    } = useUiPlanificacionTipo();

    useEffect(() => {
        startLoadPlanificacionTipos();

        return () => {
            startClearPlanificacionTipo();
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
                {APP_WORDS.TIPOSPLANIFICACION_TITLE}
            </TitlePage>
            <Divider my="md" />

            <PlanificaciontiposTable />

            <PlanificacionTipoModal />

            <StatusModal
                isOpenModal={isOpenModalStatusPlanificacionTipo}
                modalAction={modalActionStatusPlanificacionTipo}
                titleModal="Activar/Desactivar Elemento"
                startAction={startUpdateStatusPlanificacionTipo}
                activateElement={activatePlanificacionTipo}
                setActivate={setActivatePlanificacionTipo}
            />
        </Container>
    );
};
