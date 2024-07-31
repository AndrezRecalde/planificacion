import { Modal } from "@mantine/core";
import { useOPNStore, useUiOPN } from "../../../../../hooks";
import { isNotEmpty, useForm } from "@mantine/form";
import { TextSection } from "../../../../../components";
import { APP_WORDS } from "../../../../../helpers";

export const ObjetivosPlanNacionalModal = () => {
    const { setActivateOPN, activateOPN } = useOPNStore();
    const { isOpenModalOPN, modalActionOPN } = useUiOPN();

    const form = useForm({
        initialValues: {
            objetivo_opn: "",
            eje_id: null,
            gobierno_id: null,

        },
        validate: {
            objetivo_opn: isNotEmpty("Por favor ingrese el objetivo"),
            eje_id: isNotEmpty("Por favor seleccione un eje"),
            gobierno_id: isNotEmpty("Por favor seleccione al gobierno que pertenece")
        },
        transformValues: (values) => ({
            ...values,
            eje_id: Number(values.eje_id) || null,
            gobierno_id: Number(values.gobierno_id) || null,
        }),
    })

    const handleCloseModal = () => {
        if (activateOPN !== null) {
            setActivateOPN(null);
        }
        form.reset();
        modalActionOPN(false);
    }

    return (
        <Modal
            centered
            opened={isOpenModalOPN}
            onClose={handleCloseModal}
            size="lg"
            title={
                <TextSection fz={18} fw={700} tt="capitalize">
                    {APP_WORDS.OPN_TITLE_MODAL}
                </TextSection>
            }
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
        >

        </Modal>
    );
};
