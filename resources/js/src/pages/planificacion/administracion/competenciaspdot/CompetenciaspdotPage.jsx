import { useEffect } from "react";
import { Container, Divider } from "@mantine/core";
import {
    CompetenciapdotModal,
    CompetenciapdotTable,
    StatusModal,
    TitlePage,
} from "../../../../components";
import {
    useCompetenciapdotStore,
    useLestrategiapdotStore,
    useUiCompetenciapdot,
} from "../../../../hooks";
import Swal from "sweetalert2";

export const CompetenciaspdotPage = () => {
    const {
        startLoadCompetenciaspdot,
        startClearCompetenciapdot,
        startUpdateStatusCompetenciapdot,
        activateCompetenciapdot,
        setActivateCompetenciapdot,
        message,
        errores,
    } = useCompetenciapdotStore();

    const {
        isOpenModalStatusCompetenciapdot,
        modalActionStatusCompetenciapdot,
    } = useUiCompetenciapdot();

    useEffect(() => {
        startLoadCompetenciaspdot({});

        return () => {
            //startClearCompetenciapdot();
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
                Competencias del PDOT
            </TitlePage>
            <Divider my="md" />

            <CompetenciapdotTable />

            <CompetenciapdotModal />

            <StatusModal
                isOpenModal={isOpenModalStatusCompetenciapdot}
                modalAction={modalActionStatusCompetenciapdot}
                titleModal="Activar/Desactivar Elemento"
                startAction={startUpdateStatusCompetenciapdot}
                activateElement={activateCompetenciapdot}
                setActivate={setActivateCompetenciapdot}
            />
        </Container>
    );
};
