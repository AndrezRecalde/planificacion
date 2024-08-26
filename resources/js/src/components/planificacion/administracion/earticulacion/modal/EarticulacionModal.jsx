import { Modal } from "@mantine/core";
import { EarticulacionForm, TextSection } from "../../../../../components";
import { useEarticulacionStore, useUiEarticulacion } from "../../../../../hooks";
import { isNotEmpty, useForm } from "@mantine/form";

export const EarticulacionModal = () => {
    const { activateEarticulacion, setActivateEarticulacion } = useEarticulacionStore();
    const { isOpenModalEarticulacion, modalActionEarticulacion } = useUiEarticulacion();

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            nombre_articulacion: "",
        },
        validate: {
            nombre_articulacion: isNotEmpty("Por favor ingresa el nombre de la estrategía")
        }
    })

    const handleCloseModal = () => {
        if (activateEarticulacion !== null) {
            setActivateEarticulacion(null);
        }
        modalActionEarticulacion(false);
        form.reset();
    }

    return (
        <Modal
            centered
            opened={isOpenModalEarticulacion}
            onClose={handleCloseModal}
            size="lg"
            title={
                <TextSection fz={18} fw={700} tt="capitalize">
                    Estrategia de articulación
                </TextSection>
            }
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
        >
            <EarticulacionForm form={form} />
        </Modal>
    );
};
