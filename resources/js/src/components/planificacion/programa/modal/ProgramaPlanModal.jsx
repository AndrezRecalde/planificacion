import { Modal } from "@mantine/core";
import { ProgramaForm, TextSection } from "../../../../components";
import { isNotEmpty, useForm } from "@mantine/form";
import { useProgramaStore, useUiPrograma } from "../../../../hooks";
import { APP_WORDS } from "../../../../helpers";

export const ProgramaPlanModal = () => {
    const { activatePrograma, setActivatePrograma } = useProgramaStore();
    const { isOpenModalPrograma, modalActionPrograma } = useUiPrograma();

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            nombre_programa: "",
            planificaciontipo_id: null,
            objetivo_id: null,
            departamentos: []
        },
        validate: {
            nombre_programa: isNotEmpty(
                "Por favor ingrese el nombre del programa"
            ),
            planificaciontipo_id: isNotEmpty(
                "Por favor seleccione un tipo de planificación"
            ),
            objetivo_id: isNotEmpty(
                "Por favor seleccione un objetivo estratégico"
            ),
            departamentos: isNotEmpty("Por favor ingrese el/los departamentos a redireccionar")
        },
        transformValues: (values) => ({
            ...values,
            planificaciontipo_id: Number(values.planificaciontipo_id) || null,
            objetivo_id: Number(values.objetivo_id) || null,
            departamentos: values.departamentos.map(departamento => Number(departamento.id) || [])
        }),
    });

    const handleCloseModal = () => {
        if (activatePrograma !== null) {
            setActivatePrograma(null);
        }
        modalActionPrograma(false);
        form.reset();
    }

    return (
        <Modal
            opened={isOpenModalPrograma}
            onClose={handleCloseModal}
            size="lg"
            title={
                <TextSection fz={18} fw={700} tt="capitalize">
                    {APP_WORDS.PROGRAMA_TITLE_MODAL}
                </TextSection>
            }
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
        >
            <ProgramaForm form={form} />
        </Modal>
    );
};
