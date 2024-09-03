import { useEffect } from "react";
import { Container, Group, Stack } from "@mantine/core";
import {
    TitlePage,
    FilterFormProgramaPlan,
    ProgramaPlanTable,
    ProyectoFromPrograma,
    StatusModal,
    BtnSection,
    ProgramaPlanModal,
} from "../../../components";
import { APP_WORDS, BTN_TITLES } from "../../../helpers";
import {
    useDepartamentoStore,
    usePlanificacionTipoStore,
    useProgramaStore,
    useUiPrograma,
} from "../../../hooks";
import { IconSquarePlus } from "@tabler/icons-react";
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

    const { isOpenModalStatusPrograma, modalActionStatusPrograma, modalActionPrograma } =
        useUiPrograma();

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

    const handleOpenModal = (e) => {
        e.preventDefault();
        modalActionPrograma(true);
    }

    return (
        <Container size="xxl">
            <Group justify="space-between">
                <TitlePage order={2} ta="left">
                    {APP_WORDS.PROGRAMA_TITLE}
                </TitlePage>
                <BtnSection
                    heigh={30}
                    fontSize={12}
                    icon={IconSquarePlus}
                    handleAction={handleOpenModal}
                >
                    {BTN_TITLES.BTN_ADD}
                </BtnSection>
            </Group>
            <Stack>
                <FilterFormProgramaPlan />
                {/* <ProgramaPlanTable />
                <ProyectoFromPrograma classes={classes} /> */}
            </Stack>

            <ProgramaPlanModal />

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
