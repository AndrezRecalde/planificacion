import { Modal } from "@mantine/core";
import { LineaEstrategiaForm, TextSection } from "../../../../../components";
import {
    useLestrategiapdotStore,
    useUiLestrategiapdot,
} from "../../../../../hooks";
import { isNotEmpty, useForm } from "@mantine/form";
import { APP_WORDS } from "../../../../../helpers";

export const LineaEstrategiaModal = () => {
    const { setActivateLestrategia, activateLestrategia } =
        useLestrategiapdotStore();
    const { modalActionLestrategiapdot, isOpenModalLestrategia } =
        useUiLestrategiapdot();

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            linea_estrategica: "",
            lineapdot_id: null,
        },
        validate: {
            linea_estrategica: isNotEmpty(
                "Por favor ingrese el nombre de la línea"
            ),
            lineapdot_id: isNotEmpty(
                "Por favor ingrese la línea referencial del pdot"
            ),
        },
        transformValues: (values) => ({
            ...values,
            lineapdot_id: Number(values.lineapdot_id) || null,
        }),
    });

    const handleCloseModal = () => {
        if (activateLestrategia !== null) {
            setActivateLestrategia(null);
        }
        form.reset();
        modalActionLestrategiapdot(false);
    };

    return (
        <Modal
            centered
            opened={isOpenModalLestrategia}
            onClose={handleCloseModal}
            size="lg"
            title={
                <TextSection fz={18} fw={700} tt="capitalize">
                    {APP_WORDS.LINEAESTRATEGICA_TITLE_MODAL}
                </TextSection>
            }
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
        >
            <LineaEstrategiaForm form={form} />
        </Modal>
    );
};
