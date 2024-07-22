import { Modal } from "@mantine/core";
import { ComponentepdotForm, TextSection } from "../../../../../components";
import { isNotEmpty, useForm } from "@mantine/form";
import { useComponentepdotStore, useUiComponentepdot } from "../../../../../hooks";

export const ComponentepdotModal = () => {
    const { activateComponentepdot, setActivateComponentepdot } = useComponentepdotStore();
    const { isOpenModalComponentepdot, modalActionComponentepdot } = useUiComponentepdot();

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            nombre_componente: "",
        },
        validate: {
            nombre_componente: isNotEmpty("Por favor ingresa el nombre del componente")
        }
    });

    const handleCloseModal = () => {
        modalActionComponentepdot(false);
        if (activateComponentepdot !== null) {
            setActivateComponentepdot(null);
        }
        form.reset();
    }

    return (
        <Modal
            centered
            opened={isOpenModalComponentepdot}
            onClose={handleCloseModal}
            size="lg"
            title={
                <TextSection fz={18} fw={700} tt="capitalize">
                    Ficha Componente del PDOT
                </TextSection>
            }
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
        >
            <ComponentepdotForm form={form} />
        </Modal>
    );
};
