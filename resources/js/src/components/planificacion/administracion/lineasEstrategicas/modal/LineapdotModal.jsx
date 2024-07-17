import { Modal } from "@mantine/core";
import { LineapdotForm, TextSection } from "../../../../../components";
import { isNotEmpty, useForm } from "@mantine/form";
import { useUiLineapdot } from "../../../../../hooks";

export const LineapdotModal = () => {
    const { isOpenModalLineapdot, modalActionLineapdot } = useUiLineapdot();

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            nombre_linea: "",
        },
        validate: {
            nombre_linea: isNotEmpty("Por favor ingrese el nombre de la línea"),
        },
    });

    const handleCloseModal = () => {
        modalActionLineapdot(false);
        form.reset();
    };

    return (
        <Modal
            centered
            opened={isOpenModalLineapdot}
            onClose={handleCloseModal}
            title={
                <TextSection fz={18} fw={700} tt="capitalize">
                    Ficha - Lineas del PDOT
                </TextSection>
            }
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
        >
            <LineapdotForm form={form} />
        </Modal>
    );
};
