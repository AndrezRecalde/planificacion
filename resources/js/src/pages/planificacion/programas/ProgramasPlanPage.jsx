import { useEffect } from "react";
import { Container, Stack } from "@mantine/core";
import {
    TitlePage,
    FilterFormProgramaPlan,
    ProgramaPlanTable,
    ProyectoFromPrograma,
    StatusModal,
} from "../../../components";
import { APP_WORDS } from "../../../helpers";
import {
    useDepartamentoStore,
    usePlanificacionTipoStore,
    useProgramaStore,
    useUiPrograma,
} from "../../../hooks";
import Swal from "sweetalert2";
import classes from "../../gestiones/proyecto/ProyectoModule/Proyecto.module.css";

export const ProgramasPlanPage = () => {
    const usuario = JSON.parse(localStorage.getItem("service_user"));
    const {
        startUpdateStatusPrograma,
        startClearProgramas,
        activatePrograma,
        setActivatePrograma,
        message,
        errores,
    } = useProgramaStore();

    const { isOpenModalStatusPrograma, modalActionStatusPrograma } = useUiPrograma();

    const { startLoadDepartamentos, startClearDepartamentos } =
        useDepartamentoStore();
    const { startLoadPlanificacionTipos, startClearPlanificacionTipo } =
        usePlanificacionTipoStore();

    useEffect(() => {
        startLoadDepartamentos({ institucion_id: usuario.institucion_id });
        startLoadPlanificacionTipos();

        return () => {
            startClearDepartamentos();
            startClearPlanificacionTipo();
            startClearProgramas();
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
                timer: 2500,
            });
            return;
        }
    }, [errores]);

    return (
        <Container size="xxl">
            <TitlePage order={2} ta="left">
                {APP_WORDS.PROGRAMA_TITLE}
            </TitlePage>
            <Stack>
                <FilterFormProgramaPlan />
                <ProgramaPlanTable />
                <ProyectoFromPrograma classes={classes} />
            </Stack>

            <StatusModal
                isOpenModal={isOpenModalStatusPrograma}
                modalAction={modalActionStatusPrograma}
                titleModal="Activar/Desactivar Elemento"
                startAction={startUpdateStatusPrograma}
                activateElement={activatePrograma}
                setActivate={setActivatePrograma}
            />
        </Container>
    );
};
