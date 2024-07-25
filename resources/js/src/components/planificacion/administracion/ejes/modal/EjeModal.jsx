import { Modal } from "@mantine/core";
import { EjeForm, TextSection } from "../../../../../components";
import { isNotEmpty, useForm } from "@mantine/form";
import { useEjeStore, useUiEje } from "../../../../../hooks";

export const EjeModal = () => {
    const { activateEje, setActivateEje } = useEjeStore();
    const { isOpenModalEje, modalActionEje } = useUiEje();

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            nombre_eje: "",
        },
        validate: {
            nombre_eje: isNotEmpty("Por favor ingresa el nombre del eje"),
        },
    });

    const handleCloseModal = () => {
        modalActionEje(false);
        if (activateEje !== null) {
            setActivateEje(null);
        }
        form.reset();
    };

    return (
        <Modal
            centered
            opened={isOpenModalEje}
            onClose={handleCloseModal}
            size="lg"
            title={
                <TextSection fz={18} fw={700} tt="capitalize">
                    Ficha Ejes de Gobierno
                </TextSection>
            }
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
        >
            <EjeForm form={form} />
        </Modal>
    );
};
