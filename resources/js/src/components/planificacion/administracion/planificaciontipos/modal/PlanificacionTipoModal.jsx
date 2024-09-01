import { Modal } from "@mantine/core";
import { PlanificacionTipoForm, TextSection } from "../../../../../components";
import { APP_WORDS } from "../../../../../helpers";
import {
    usePlanificacionTipoStore,
    useUiPlanificacionTipo,
} from "../../../../../hooks";
import { isNotEmpty, useForm } from "@mantine/form";

export const PlanificacionTipoModal = () => {
    const { activatePlanificacionTipo, setActivatePlanificacionTipo } =
        usePlanificacionTipoStore();
    const { isOpenModalPlanificacionTipo, modalActionPlanificacionTipo } =
        useUiPlanificacionTipo();

    const form = useForm({
        initialValues: {
            nombre_planificacion: "",
        },
        validate: {
            nombre_planificacion: isNotEmpty(
                "Por favor ingrese el nombre del tipo"
            ),
        },
    });

    const handleCloseModal = () => {
        if (activatePlanificacionTipo !== null) {
            setActivatePlanificacionTipo(null);
        }
        form.reset();
        modalActionPlanificacionTipo(false);
    };

    return (
        <Modal
            centered
            opened={isOpenModalPlanificacionTipo}
            onClose={handleCloseModal}
            size="lg"
            title={
                <TextSection fz={18} fw={700} tt="capitalize">
                    {APP_WORDS.TIPOSPLANIFICACION_TITLE_MODAL}
                </TextSection>
            }
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
        >
            <PlanificacionTipoForm form={form} />
        </Modal>
    );
};
