import { Modal } from "@mantine/core";
import { LineapdotForm, TextSection } from "../../../../../components";
import { isNotEmpty, useForm } from "@mantine/form";
import { useLineapdotStore, useUiLineapdot } from "../../../../../hooks";
import { APP_WORDS } from "../../../../../helpers";

export const LineapdotModal = () => {
    const { setActivateLineapdot, activeLineapdot } = useLineapdotStore();
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
        if (activeLineapdot !== null) {
            setActivateLineapdot(null);
        }
        form.reset();
    };

    return (
        <Modal
            centered
            opened={isOpenModalLineapdot}
            onClose={handleCloseModal}
            title={
                <TextSection fz={18} fw={700} tt="capitalize">
                    {APP_WORDS.LINEAPDOT_TITLE_MODAL}
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
